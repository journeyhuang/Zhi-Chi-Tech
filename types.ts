export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  VALUE = 'value',
  PRODUCT = 'product',
  DEMO = 'demo',
  ABOUT = 'about',
  FAQ = 'faq',
  CONTACT = 'contact'
}
