import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY || '';

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

const fallbackReplies = [
  {
    keywords: ['疼', '不舒服', '难受', '腰', '头', '睡'],
    reply: '听起来你有点不舒服呢，要不要先休息一下？如果一直不舒服，我们一起去看看医生好不好？',
  },
  {
    keywords: ['想你', '想念', '孤单', '孤独'],
    reply: '我也很想你呀！我会一直陪你聊天的，咱们一起说说今天的心情吧。',
  },
  {
    keywords: ['故事', '笑话', '开心'],
    reply: '好呀！给你讲个小故事：从前有一只小猫，每天都会给爷爷带来阳光一样的笑容。',
  },
];

const getFallbackReply = (text: string) => {
  const hit = fallbackReplies.find(item => item.keywords.some(keyword => text.includes(keyword)));
  if (hit) return hit.reply;
  return '我在呢！要不要跟我聊聊今天发生的小事？我可喜欢听你说话了。';
};

export const isGeminiConfigured = () => Boolean(API_KEY);

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
    if (!API_KEY) return;
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
  if (!API_KEY) {
    return getFallbackReply(text);
  }
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
