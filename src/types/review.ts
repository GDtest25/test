export interface Review {
  id: string;
  author: string;
  content: string;
  rating: number;
  date: string;
  isVerified: boolean;
  status: 'pending' | 'approved' | 'rejected';
  response?: string | null;
  respondedAt?: string | null;
}

export interface ReviewFormData {
  author: string;
  content: string;
  rating: number;
}