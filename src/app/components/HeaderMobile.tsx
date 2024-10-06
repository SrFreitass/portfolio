import Image from 'next/image';
import { Avatar } from './Avatar';
import { Menu } from './Menu';

export function HeaderMobile() {
  return (
    <header className="hidden max-xl:flex justify-between mb-8">
      <Image
        alt="Foto do portfolio"
        src={'https://github.com/srfreitass.png'}
        width={50}
        height={50}
        className="rounded-full"
      />
      <Menu />
    </header>
  );
}
