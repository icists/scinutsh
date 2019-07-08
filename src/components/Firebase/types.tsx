export type Data = {
  id: string;
  title: string;
  team: string;
  progress?: string;
  introduction?: string;
  materials?: Material[];
}

export type Material = {
  name: string;
  content?: string;
  link?: string;
}