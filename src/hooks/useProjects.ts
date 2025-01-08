import { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import type { Project } from '../types';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'realizations'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch (error) {
      console.error('Error loading projects:', error);
    }
  };

  const addProject = async (formData: FormData) => {
    try {
      const images = formData.getAll('images') as File[];
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const storageRef = ref(storage, `projects/${Date.now()}-${image.name}`);
          await uploadBytes(storageRef, image);
          return getDownloadURL(storageRef);
        })
      );

      await addDoc(collection(db, 'realizations'), {
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        imageUrls,
        createdAt: new Date().toISOString(),
      });

      loadProjects();
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  };

  const updateProject = async (projectId: string, formData: FormData) => {
    try {
      const images = formData.getAll('images') as File[];
      const imageUrls = await Promise.all(
        images.map(async (image) => {
          const storageRef = ref(storage, `projects/${Date.now()}-${image.name}`);
          await uploadBytes(storageRef, image);
          return getDownloadURL(storageRef);
        })
      );

      await updateDoc(doc(db, 'realizations', projectId), {
        title: formData.get('title'),
        description: formData.get('description'),
        date: formData.get('date'),
        imageUrls,
        updatedAt: new Date().toISOString(),
      });

      loadProjects();
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  };

  const deleteProject = async (projectId: string) => {
    try {
      await deleteDoc(doc(db, 'realizations', projectId));
      loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };

  return {
    projects,
    addProject,
    updateProject,
    deleteProject,
  };
}