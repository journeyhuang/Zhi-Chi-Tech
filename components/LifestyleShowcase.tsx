import React from 'react';
import { SectionId } from '../types';
import { imageAssets, type ImageAssetKey } from '../data/lifestyleImages';

const baseUrl = import.meta.env.BASE_URL;

const buildSrcSet = (baseName: string, sizes: readonly number[]) =>
  sizes.map((size) => `${baseUrl}images/optimized/${baseName}-${size}.jpg ${size}w`).join(', ');

type LifestyleImage = {
  title: string;
  description: string;
  className: string;
  assetKey: ImageAssetKey;
  sizes: string;
  loading: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

const images: LifestyleImage[] = [
  {
    title: 'Spirit Cabin on RGB desk setup',
    description: 'A wide shot of the Spirit Cabin on a dimly lit desk with RGB ambient lighting.',
    className: 'md:col-span-2 md:row-span-2',
    assetKey: 'hero',
    sizes: '(min-width: 1024px) 66vw, (min-width: 768px) 66vw, 100vw',
    loading: 'eager',
    fetchPriority: 'high',
  },
  {
    title: 'NFC tap interaction',
    description: 'A user holding an NFC card tapping the device.',
    className: 'md:row-span-2',
    assetKey: 'nfc',
    sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
    loading: 'lazy',
  },
  {
    title: 'Holographic fan mechanism',
    description: 'A detailed shot of the spinning holographic fan mechanism.',
    className: '',
    assetKey: 'hero',
    sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
    loading: 'lazy',
  },
  {
    title: 'Miku style character dancing',
    description: "The device displaying a 'Miku' style character dancing.",
    className: '',
    assetKey: 'char',
    sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
    loading: 'lazy',
  },
];

const LifestyleShowcase: React.FC = () => {
  return (
    <section id={SectionId.SHOWCASE} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-sm font-semibold border border-cyan-500/30">
            桌搭美学
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 font-display">
            Upgrade Your Desktop Aesthetics
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4">
            以极简未来主义重塑桌面空间，暗色氛围与霓虹细节让灵境舱成为桌搭的视觉焦点。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {images.map((image) => {
            const asset = imageAssets[image.assetKey];
            const srcSet = buildSrcSet(asset.baseName, asset.sizes);
            return (
              <div
                key={image.title}
                style={{ backgroundImage: `url(${asset.placeholder})` }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 bg-cover bg-center ${image.className} transition-shadow duration-500 hover:border-fuchsia-400/70 hover:shadow-[0_0_25px_rgba(255,79,216,0.6)]`}
              >
                <img
                  src={`${baseUrl}images/${asset.baseName}.jpg`}
                  srcSet={srcSet}
                  sizes={image.sizes}
                  alt={image.description}
                  loading={image.loading}
                  fetchPriority={image.fetchPriority}
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-sm text-slate-200">
                  {image.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifestyleShowcase;
