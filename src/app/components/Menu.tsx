'use client';

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
import { NavBar } from './Navbar';

export function Menu() {
  const [status, setStatus] = useState(false);

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <HiOutlineMenuAlt3 size={28} color="#fafafa" />
        </DrawerTrigger>
        <DrawerContent>
          <nav className="p-8 flex flex-col">
            <Avatar />
            <NavBar />
          </nav>
        </DrawerContent>
      </Drawer>
    </>
  );
}
