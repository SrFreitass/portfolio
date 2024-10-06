'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Presentation } from './components/Presentation';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main>
        <Presentation />
      </main>
    </>
  );
}
