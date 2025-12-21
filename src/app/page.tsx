import { getMemories } from "@/lib/memories";
import HomeClient from "./HomeClient";

export default async function Home() {
  const memories = await getMemories();
  return <HomeClient memories={memories} />;
}
