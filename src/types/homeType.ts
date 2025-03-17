export interface HomeType {
  id: number;
  name: string;
  icon: string;
  path: string;
  children?: HomeType[];
}
