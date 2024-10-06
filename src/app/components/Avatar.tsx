import Image from 'next/image';

export function Avatar() {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={'https://github.com/srfreitass.png'}
        width={50}
        height={50}
        className="rounded-full"
        alt="Foto de perfil"
      />
      <div>
        <h2 className="text-primary font-bold">Guilherme Freitas</h2>
        <p className="text-secundary font-medium">Desenvolvedor Full-Stack</p>
      </div>
    </div>
  );
}
