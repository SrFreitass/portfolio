import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Avatar } from './Avatar';
import Link from 'next/link';

export function Menu() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <HiOutlineMenuAlt3 size={28} color="#fafafa" />
        </DrawerTrigger>
        <DrawerContent>
          <nav className="p-8 flex flex-col gap-8">
            <Avatar />
            <ul className="flex flex-col gap-4 text-primary text-xl font-medium">
              <li>
                <Link href={'./'}>Início</Link>
              </li>
              <li>
                <Link href={'./career'}>Carreira</Link>
              </li>
              <li>
                <Link href={'./skills'}>Habilidades</Link>
              </li>
              <li>
                <Link href={'./projects'}>Projetos</Link>
              </li>
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  );
}
