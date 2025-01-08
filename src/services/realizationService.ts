import { supabase } from '../lib/supabase';
import type { Project } from '../types/project';

export const realizationService = {
  async getAllRealizations() {
    const { data, error } = await supabase
      .from('realizations')
      .select('*')
      .order('date', { ascending: false });

    if (error) throw error;
    return data;
  },

  async addRealization(project: Omit<Project, 'id'>, photos: File[]) {
    // Upload photos to Supabase Storage
    const photoUrls = await Promise.all(
      photos.map(async (photo) => {
        const fileName = `${Date.now()}-${photo.name}`;
        const { data, error } = await supabase.storage
          .from('realizations')
          .upload(fileName, photo);

        if (error) throw error;
        
        const { data: { publicUrl } } = supabase.storage
          .from('realizations')
          .getPublicUrl(fileName);

        return publicUrl;
      })
    );

    const { error } = await supabase
      .from('realizations')
      .insert({
        date: project.date,
        title: project.title,
        description: project.description,
        photos: photoUrls
      });

    if (error) throw error;
  },

  async updateRealization(id: string, project: Partial<Project>, newPhotos?: File[]) {
    let photoUrls = [];
    
    if (newPhotos?.length) {
      photoUrls = await Promise.all(
        newPhotos.map(async (photo) => {
          const fileName = `${Date.now()}-${photo.name}`;
          const { data, error } = await supabase.storage
            .from('realizations')
            .upload(fileName, photo);

          if (error) throw error;
          
          const { data: { publicUrl } } = supabase.storage
            .from('realizations')
            .getPublicUrl(fileName);

          return publicUrl;
        })
      );
    }

    const { error } = await supabase
      .from('realizations')
      .update({
        ...project,
        ...(photoUrls.length && { photos: photoUrls }),
        updated_at: new Date().toISOString()
      })
      .eq('id', id);

    if (error) throw error;
  },

  async deleteRealization(id: string) {
    const { error } = await supabase
      .from('realizations')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};