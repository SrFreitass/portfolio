'use client'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Header } from '../components/Header';

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className="flex  items-center m-auto min-h-screen flex-col max-w-[1450px]">
        <Header/>
        <h2 className='text-[2.5rem] font-bold color_main'>Projetos</h2>
      </main>
    </>
  );
}
