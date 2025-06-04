export interface User {
  username: string;
  password: string;
}

export interface ProjectLink {
  url: string;
  description: string;
}

export interface Project {
  id: string;
  group: string;
  title: string;
  links: ProjectLink[];
  company: string;
  description: string;
  members: Member[];
}

export interface Member {
  name: string;
  rut: string;
}

export interface Document {
  filename: string;
  path: string;
  type: 'image' | 'pdf' | 'csv';
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}