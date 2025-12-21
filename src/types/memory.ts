import { Models } from "appwrite";

export interface Memory {
  $id: string;
  title: string;
  description: string;
  date: string;
  imageIds: string[];
  isPublished?: boolean;
}

// Fully typed Appwrite doc results
export type MemoryDoc = Models.Document & Memory;
