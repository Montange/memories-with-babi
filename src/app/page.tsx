import Timeline from "@/components/Timeline";
import { getMemories } from "@/lib/memories";
import { Memory } from "@/types/memory";

export default async function Home() {
  const memories = await getMemories();

  const memoriesByYear = memories.reduce<Record<number, Memory[]>>(
    (acc, memory) => {
      const year = new Date(memory.date).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(memory);
      return acc;
    },
    {}
  );

  const years = Object.keys(memoriesByYear).sort();

  return (
    <div className="items-center h-auto bg-[#FFF1E6]">
      <h1 className="text-center text-2xl font-semibold p-4">
        Memories In Time
      </h1>
      {/* <MusicPlayer /> */}

      {years.map((year) => (
        <div key={year}>
          <h3 className="text-center text-xl font-semibold mt-1">{year}</h3>
          <Timeline memories={memoriesByYear[Number(year)]}></Timeline>
        </div>
      ))}

      <h3 className="text-center text-xl font-semibold mt-1 mb-3">2026</h3>
      <div className="w-vw flex justify-center items-center mx-2 p-10 bg-white rounded-md">
          <h3 className="text-center text-xl font-semibold mt-1">
            COMING SOON!!
          </h3>
      </div>
    </div>
  );
}
