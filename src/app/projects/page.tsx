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
      <main className="flex m-auto min-h-screen p-8">
        <Header/>
        <div className='mx-40'>
          <h2 className="text-3xl text-primary font-bold border-b pb-4 border-[#27272A]">Projetos</h2>
        </div>
      </main>
    </>
  );
}
