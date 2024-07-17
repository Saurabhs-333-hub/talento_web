'use client'
import FeedCard from "@/layouts/Feed/FeedCard";
import GlimpseCard from "@/layouts/Glimpse/GlimpseCard";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Glimpes = () => {
  const [glimpses, setGlimpses] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://talento-backend.vercel.app/glimpses');
      const data = await res.data;
      console.log(data.documents);
      setGlimpses(data.documents);
    }
    )()
  }, [])
  return (
    <main className=" max-h-screen w-screen  justify-center items-center">
      {
        glimpses.map((glimpse: any, index) => (
          <>
            <GlimpseCard key={index} glimpse={glimpse} />
          </>
        ))
      }
    </main>
  )
}

export default Glimpes