import { storage } from "./appwrite";

export function getImageUrl(fileId: string): string {
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;
    return storage.getFileView(bucketId, fileId);
}