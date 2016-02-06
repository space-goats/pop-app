export interface Entry {
  name: string;
  description: string;
  help: string;
  links?: Link[];
  required?: boolean;
}

export interface Link {
  url: string;
  name: string;
}
