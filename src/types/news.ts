export interface Story {
  id: number;
  title: string;
  by: string;
  time: number;
  score: number;
  url?: string;
  type: string;
  descendants: number;
}
