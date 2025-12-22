export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  PRODUCT = 'product',
  DEMO = 'demo',
  ABOUT = 'about',
  CONTACT = 'contact'
}