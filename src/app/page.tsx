import FeedCard from "@/layouts/Feed/FeedCard";
import Image from "next/image";

export default function Home() {
  const feedArray = Array(10).fill(null)
  return (
    <main className="w-screen flex flex-col justify-center items-center overflow-hidden">
      {
        feedArray.map((_, index) => (
          <FeedCard key={index} />
        ))
      }
    </main>
  );
}
