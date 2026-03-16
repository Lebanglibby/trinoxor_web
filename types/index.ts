export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Demo {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}