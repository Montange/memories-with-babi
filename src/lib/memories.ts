import { Query } from "appwrite";
import { databases } from "./appwrite";
import { Memory } from "@/types/memory";

const databaseID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const collectionID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;

export async function getMemories(): Promise<Memory[]> {
    const res = await databases.listDocuments<Memory>(
        databaseID,
        collectionID,
        [Query.orderAsc("date")]
    );

    return res.documents as Memory[];
}