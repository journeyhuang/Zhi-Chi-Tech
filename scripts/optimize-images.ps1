param(
  [string]$InputDir = 'public/images',
  [string]$OutputDir = 'public/images/optimized',
  [string]$DataOut = 'data/lifestyleImages.ts'
)

Add-Type -AssemblyName System.Drawing

$sizes = @(640, 960, 1440)
$lqipWidth = 24
$quality = 82
$lqipQuality = 35

$targets = @(
  @{ Key = 'hero'; File = 'galley-hero.jpg' },
  @{ Key = 'nfc'; File = 'galley-nfc.jpg' },
  @{ Key = 'char'; File = 'galley-char.jpg' }
)

New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
New-Item -ItemType Directory -Force -Path (Split-Path $DataOut) | Out-Null

function New-Jpeg {
  param(
    [string]$InPath,
    [string]$OutPath,
    [int]$Width,
    [int]$Quality
  )

  $image = [System.Drawing.Image]::FromFile($InPath)
  $ratio = $Width / $image.Width
  $height = [int][Math]::Round($image.Height * $ratio)

  $bitmap = New-Object System.Drawing.Bitmap($Width, $height)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.DrawImage($image, 0, 0, $Width, $height)

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
  $bitmap.Save($OutPath, $codec, $encoderParams)

  $graphics.Dispose()
  $bitmap.Dispose()
  $image.Dispose()
}

function Get-LqipBase64 {
  param(
    [string]$InPath,
    [int]$Width,
    [int]$Quality
  )

  $image = [System.Drawing.Image]::FromFile($InPath)
  $ratio = $Width / $image.Width
  $height = [int][Math]::Round($image.Height * $ratio)

  $bitmap = New-Object System.Drawing.Bitmap($Width, $height)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.DrawImage($image, 0, 0, $Width, $height)

  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

  $stream = New-Object System.IO.MemoryStream
  $bitmap.Save($stream, $codec, $encoderParams)
  $bytes = $stream.ToArray()

  $stream.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
  $image.Dispose()

  return [Convert]::ToBase64String($bytes)
}

$assets = @{}

foreach ($target in $targets) {
  $inputPath = Join-Path $InputDir $target.File
  $baseName = [IO.Path]::GetFileNameWithoutExtension($target.File)

  foreach ($size in $sizes) {
    $outputPath = Join-Path $OutputDir ("{0}-{1}.jpg" -f $baseName, $size)
    New-Jpeg -InPath $inputPath -OutPath $outputPath -Width $size -Quality $quality
  }

  $placeholderBase64 = Get-LqipBase64 -InPath $inputPath -Width $lqipWidth -Quality $lqipQuality

  $assets[$target.Key] = @{
    baseName = $baseName
    placeholder = "data:image/jpeg;base64,$placeholderBase64"
    sizes = $sizes
  }
}

$assetsJson = $assets | ConvertTo-Json -Depth 4
$tsContent = "export const imageAssets = $assetsJson as const;`n`nexport type ImageAssetKey = keyof typeof imageAssets;`n"
Set-Content -Path $DataOut -Value $tsContent -Encoding UTF8

Write-Host "Wrote $DataOut"
