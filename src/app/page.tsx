'use client'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Presentation } from './components/Presentation';

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className="flex m-auto min-h-screen p-8">
        <Header/>
        <Presentation />
        {/* <Presentation/>
        <About/>
        <Services />
        <Projects/>
        <Contact/>
        <Footer/> */}
      </main>
    </>
  );
}
