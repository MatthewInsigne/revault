import Image from "next/image";
import DocxCard from "@/components/DocxCard";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row justify-between text-xl w-full bg-stone-900 p-8 px-16">
        <div>
          <h1>ReVault</h1>
        </div>
        <ul className="flex flex-row gap-8">
          <li>
            <a href="#">My Vault</a>
          </li>
          <li>
            <a>My Requests</a>
          </li>
        </ul>
      </header>

      <main className="flex flex-row">
        <aside className="flex h-lvh w-72 bg-stone-800 p-8">

          <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Filter</h1>

            <h2>Course</h2>
            <ul>
              <li>CS</li>
              <li>IT</li>
            </ul>

            <h1>Publication Date</h1>
            <ul>
              <li>2025</li>
              <li>2024</li>
              <li>Custom range...</li>
            </ul>

            <h1>Subject</h1>
            <ul>
              <li>SIA</li>
              <li>Capstone</li>
              <li>Research Writing</li>
              <li>CS Thesis Writing</li>
            </ul>

          </div>
        </aside>

        <div className="flex flex-col w-full gap-4 bg-stone-500 p-8">
          <h1 className="text-2xl">Recent Papers</h1>

          <div className="flex flex-col justify-between gap-4">
            <DocxCard></DocxCard>
            
            <DocxCard></DocxCard>

            <DocxCard></DocxCard>

          </div>
        </div>
      </main>

    </div>
  );
}
