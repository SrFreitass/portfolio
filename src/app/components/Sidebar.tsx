import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AiOutlineProject } from 'react-icons/ai';

import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaWhatsapp,
} from 'react-icons/fa';
import { PiGraph } from 'react-icons/pi';
import { RiShareBoxFill } from 'react-icons/ri';
import { SiReaddotcv } from 'react-icons/si';
import { TbSparkles } from 'react-icons/tb';
import { Avatar } from './Avatar';
import { NavBar } from './Navbar';

const ItemNav = ({
  icon,
  title,
  href,
}: {
  icon: ReactNode;
  title: string;
  href: string;
}) => {
  return (
    <li className="flex items-center justify-between gap-2">
      <a className="flex items-center gap-2" href={href}>
        {icon} {title}
      </a>
      <RiShareBoxFill />
    </li>
  );
};

export const Sidebar = () => {
  return (
    <aside className="min-w-[17rem] max-xl:hidden">
      <Avatar />
      <NavBar />
    </aside>
  );
};
