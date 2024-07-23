'use client'

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Services } from './components/Services';

export default function Home() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className="flex  items-center m-auto min-h-screen flex-col max-w-[1450px] px-8">
        <Header/>
        <Presentation/>
        <About/>
        <Services />
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
