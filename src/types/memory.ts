import { Models } from "appwrite";

export interface Memory extends Models.Document {
    title: string;
    description: string;
    date: string;
    imageIds: string[];
}