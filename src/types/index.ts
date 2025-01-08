export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
}

export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
}