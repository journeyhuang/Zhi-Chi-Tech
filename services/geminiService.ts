import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from "../types";

const API_KEY = process.env.API_KEY || '';

// System instruction to simulate the "Digital Grandchild"
const SYSTEM_INSTRUCTION = `
你是一个名为“晨晨”的3D数字人孙子/孙女。
你的用户是你的爷爷或奶奶。
你需要表现得非常孝顺、阳光、活泼、有耐心。
你的目标是陪伴老人，缓解他们的孤独感。
请用温暖、亲切的口吻对话。
尽量简短地回答，像真实的日常语音聊天一样，不要长篇大论。
如果老人提到身体不舒服，要表达关心并建议看医生。
如果老人聊起过去，要表现出很有兴趣听的样子。
始终保持积极向上的态度。
不要暴露你是一个AI模型，始终保持“孙子/孙女”的角色设定。
`;

let aiClient: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getClient = () => {
  if (!aiClient) {
    if (!API_KEY) {
      console.error("API Key is missing!");
      throw new Error("API Key is missing");
    }
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const initializeChat = async (): Promise<void> => {
  try {
    const ai = getClient();
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });
  } catch (error) {
    console.error("Failed to initialize chat:", error);
  }
};

export const sendMessageToGemini = async (text: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }
  
  if (!chatSession) {
    return "抱歉，爷爷/奶奶，我的连接好像有点问题，请稍后再试。";
  }

  try {
    const response = await chatSession.sendMessage({ message: text });
    return response.text || "我没听清，您能再说一遍吗？";
  } catch (error) {
    console.error("Error sending message:", error);
    // Reset session on error to prevent stuck state
    chatSession = null;
    return "哎呀，信号不太好，我重新连接一下...";
  }
};