export interface Review {
  id: number;
  name: string;
  date: string;
  avatar: string;
  text: string;
  rating: number;
  product?: string;
}
