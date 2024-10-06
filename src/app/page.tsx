'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { HeaderMobile } from './components/HeaderMobile';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main className="flex m-auto max-xl:flex-col">
        <Header />
        <HeaderMobile />
        <Presentation />
      </main>
    </>
  );
}
