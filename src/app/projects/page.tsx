'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Project } from '../components/Project';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main>
      <h2 className="text-3xl text-primary font-bold border-b pb-4 border-[#27272A]">
        Projetos
      </h2>
      <div className="mt-8 flex flex-wrap gap-8">
        <Project
          title="BookMark"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
          language={{ color: 'blue-500', name: 'Typescript' }}
          stacks={['Bun', 'Elysia.js', 'Drizzle ORM', 'Postgresql']}
          url="https://github.com/srfreitass/bookmark"
          image="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          status="Público"
        />
        <Project
          title="BookMark"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
          language={{ color: 'blue-500', name: 'Typescript' }}
          stacks={['Bun', 'Elysia.js', 'Drizzle ORM', 'Postgresql']}
          url="https://github.com/srfreitass/bookmark"
          image="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          status="Público"
        />
        <Project
          title="BookMark"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
          language={{ color: 'blue-500', name: 'Typescript' }}
          stacks={['Bun', 'Elysia.js', 'Drizzle ORM', 'Postgresql']}
          url="https://github.com/srfreitass/bookmark"
          image="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          status="Público"
        />
        <Project
          title="BookMark"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
          language={{ color: 'blue-500', name: 'Typescript' }}
          stacks={['Bun', 'Elysia.js', 'Drizzle ORM', 'Postgresql']}
          url="https://github.com/srfreitass/bookmark"
          image="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          status="Público"
        />
      </div>
    </main>
  );
}
