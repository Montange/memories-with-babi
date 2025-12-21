"use client";

import { useState } from "react";
import { databases, storage } from "@/lib/appwrite";
import { ID } from "appwrite";
import { Memory } from "@/types/memory";

// Define the input type used to create documents (exclude Appwrite metadata)
type MemoryInput = Omit<
  Memory,
  | "$id"
  | "$createdAt"
  | "$updatedAt"
  | "$permissions"
  | "$collectionId"
  | "$databaseId"
  | "$sequence"
>;

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [uploadedImageIds, setUploadedImageIds] = useState<string[]>([]);

  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!;

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    setError(null);
    if (!e.target.files?.length) return;

    setUploading(true);
    try {
      const files = Array.from(e.target.files);
      const uploadedIds: string[] = [];

      for (const file of files) {
        const response = await storage.createFile(bucketId, ID.unique(), file);
        uploadedIds.push(response.$id);
      }

      setUploadedImageIds(prev => [...prev, ...uploadedIds]);
      setMessage("Files uploaded successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to upload one or more files.");
    } finally {
      setUploading(false);
      e.target.value = ""; // Reset file input
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!title || !date) {
      setError("Title and date are required.");
      return;
    }

    try {
      const isoDate = new Date(date).toISOString();

      const newMemory: MemoryInput = {
        title,
        description,
        date: isoDate,
        imageIds: uploadedImageIds,
      };

      await databases.createDocument(databaseId, collectionId, ID.unique(), newMemory);
      setMessage("Memory added successfully!");

      // Reset form fields
      setTitle("");
      setDescription("");
      setDate("");
      setUploadedImageIds([]);
    } catch (err) {
      console.error(err);
      setError("Failed to add memory.");
    }
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Memory</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Title <span className="text-red-600">*</span>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded p-2"
            placeholder="Memory title"
          />
        </label>

        <label className="flex flex-col">
          Description
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={4}
            className="border border-gray-300 rounded p-2"
            placeholder="Memory description"
          />
        </label>

        <label className="flex flex-col">
          Date <span className="text-red-600">*</span>
          <input
            type="datetime-local"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            className="border border-gray-300 rounded p-2"
          />
        </label>

        <label className="flex flex-col">
          Upload Images
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="border border-gray-300 rounded p-2"
          />
        </label>

        {uploading && <p className="text-blue-600">Uploading images...</p>}

        {uploadedImageIds.length > 0 && (
          <div>
            <h4 className="font-semibold">Uploaded Image IDs:</h4>
            <ul className="list-disc list-inside max-h-32 overflow-auto">
              {uploadedImageIds.map(id => (
                <li key={id} className="text-sm break-all">{id}</li>
              ))}
            </ul>
          </div>
        )}

        {error && <p className="text-red-600 font-semibold">{error}</p>}
        {message && <p className="text-green-600 font-semibold">{message}</p>}

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded disabled:opacity-50"
        >
          Add Memory
        </button>
      </form>
    </div>
  );
}
