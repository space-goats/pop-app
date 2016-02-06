export interface Entry {
  name: string;
  description: string;
  help: string;
  links?: Link[];
}

export interface Link {
  url: string;
  name: string;
}
