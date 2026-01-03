export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  FEATURES = 'features',
  SHOWCASE = 'showcase',
  SPECS = 'specs',
  BUSINESS = 'business',
  ROADMAP = 'roadmap',
  ABOUT = 'about',
  CONTACT = 'contact'
}
