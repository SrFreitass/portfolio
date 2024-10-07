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

const ItemNav = ({
  icon,
  title,
  href,
  external,
}: {
  icon: ReactNode;
  title: string;
  href: string;
  external?: boolean;
}) => {
  return (
    <li className="flex items-center justify-between gap-2">
      {external ? (
        <a className="flex items-center gap-2" href={href}>
          {icon} {title}
        </a>
      ) : (
        <Link href={href} className="flex gap-2">
          {icon} {title}
        </Link>
      )}
      {external && <RiShareBoxFill />}
    </li>
  );
};

const items = [
  {
    icon: <TbSparkles size={24} />,
    title: 'Início',
    href: '/',
  },
  {
    icon: <PiGraph size={24} />,
    title: 'Carreira',
    href: '/career',
  },
  {
    icon: <FaStackOverflow size={24} />,
    title: 'Habilidades',
    href: '/skills',
  },
  {
    icon: <AiOutlineProject size={24} />,
    title: 'Projetos',
    href: '/projects',
  },
];

const itemsExternal = [
  {
    icon: <SiReaddotcv size={24} />,
    title: 'Currículo CV',
    href: '#',
    external: true,
  },
  {
    icon: <FaLinkedin size={24} />,
    title: 'Linkedin',
    href: '#',
    external: true,
  },
  {
    icon: <FaGithub size={24} />,
    title: 'Github',
    href: '#',
    external: true,
  },
  {
    icon: <FaWhatsapp size={24} />,
    title: 'Whatsapp',
    href: '#',
    external: true,
  },
];

export function NavBar() {
  return (
    <ul className="text-secundary flex flex-col gap-6 mt-8 font-semibold">
      {items.map((item, i) => {
        return <ItemNav {...item} key={i} />;
      })}
      <hr className="border-border" />
      {itemsExternal.map((item, i) => {
        return <ItemNav {...item} key={i} />;
      })}
    </ul>
  );
}
