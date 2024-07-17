'use client'
import FeedCard from "@/layouts/Feed/FeedCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const feedArray = Array(10).fill(null)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://talento-backend.vercel.app/posts');
      const data = await res.data;
      console.log(data.documents);
      setPosts(data.documents);
    }
    )()
  }, [])

  return (
    <main className="w-screen flex flex-col justify-center items-center overflow-hidden">
      {
        posts.map((post: any, index) => (
          <>
            <FeedCard key={index} post={post} />
          </>
        ))
      }
    </main>
  );
}
