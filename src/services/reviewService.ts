import { supabase } from '../lib/supabase';
import type { Review, ReviewFormData } from '../types/review';

export const reviewService = {
  async submitReview(data: ReviewFormData) {
    const { error } = await supabase
      .from('reviews')
      .insert({
        name: data.author,
        review: data.content,
        status: 'pending'
      });

    if (error) throw error;
  },

  async getAllReviews() {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getPublicReviews() {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('status', 'verified')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async verifyReview(id: string) {
    const { error } = await supabase
      .from('reviews')
      .update({ status: 'verified' })
      .eq('id', id);

    if (error) throw error;
  },

  async respondToReview(id: string, response: string) {
    const { error } = await supabase
      .from('reviews')
      .update({ 
        response,
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) throw error;
  },

  async deleteReview(id: string) {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};