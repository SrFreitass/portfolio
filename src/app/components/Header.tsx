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

export const Header = () => {
  return (
    <aside className="sticky top-1 w-[20rem] max-xl:hidden">
      <Avatar />
      <ul className="text-secundary flex flex-col gap-6 mt-8 font-semibold">
        <li className="">
          <Link href={'/'} className="flex items-center gap-2">
            <TbSparkles size={24} /> Início
          </Link>
        </li>
        <li className="">
          <Link href={'/career'} className="flex items-center gap-2">
            <PiGraph size={24} /> Carreira
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href={'/skills'} className="flex items-center gap-2">
            <FaStackOverflow size={24} /> Habilidades
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href={'/projects'} className="flex items-center gap-2">
            <AiOutlineProject size={24} /> Projetos
          </Link>
        </li>
        <hr className="border-[#27272A]" />

        <ItemNav
          href="#"
          icon={<SiReaddotcv size={24} />}
          title="Currículo CV"
        />
        <ItemNav href="#" icon={<FaLinkedin size={24} />} title="Linkedin" />
        <ItemNav href="#" icon={<FaGithub size={24} />} title="Github" />
        <ItemNav href="#" icon={<FaWhatsapp size={24} />} title="Whatsapp" />
      </ul>
    </aside>
  );
};
