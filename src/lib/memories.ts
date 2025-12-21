import { databases } from "@/lib/appwrite";
import { Memory, MemoryDoc } from "@/types/memory";
import { Query } from "appwrite";

export async function getMemories(): Promise<Memory[]> {
  const res = await databases.listDocuments<MemoryDoc>(
    databaseID,
    collectionID,
    [Query.orderAsc("date")]
  );

  return res.documents.map((doc) => ({
    $id: doc.$id,
    title: doc.title,
    description: doc.description,
    date: doc.date,
    imageIds: doc.imageIds,
    isPublished: doc.isPublished
  }));
}
