import { storage } from "@/lib/appwrite";

export const getImageUrl = (fileId: string) => {
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;
  return storage.getFileView(bucketId, fileId);
};
