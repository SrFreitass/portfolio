import Image from 'next/image';
import { Project } from './Project';

export const Presentation = () => {
  return (
    <div>
      <h1 className="text-3xl text-primary font-bold border-b pb-4 border-[#27272A]">
        Seja bem-vindo ao meu portfolio 👋
      </h1>
      <div className="flex mt-10 gap-10">
        <Image
          className="min-w-[25rem] max-h-[40rem] border rounded-xl max-2xl:hidden"
          src={
            'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="Foto"
          width={200}
          height={500}
        />
        <div>
          <h2 className="text-primary text-xl font-semibold">Sobre mim.</h2>
          <p className="text-secundary mt-2">
            Olá, sou Guilherme Freitas do Nascimento 👋, tenho 16 anos. Comecei
            a desenvolver no início de 2023. Sou um entusiasta da tecnologia e
            um desenvolvedor full-stack, dedicado a construir soluções e
            projetos de alto nível.
          </p>
          <h2 className="text-primary text-xl font-semibold mt-4">
            Ultimos Projetos
          </h2>
          <div className="flex gap-4 mt-4 flex-wrap">
            <Project
              title="BookMark"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
              language={{ color: 'rgb(59 130 246)', name: 'Typescript' }}
              stacks={['Bun', 'Elysia.js', 'Drizzle ORM', 'Postgresql']}
              url="https://github.com/srfreitass/bookmark"
              status="Público"
            />
            <Project
              title="OrionOS"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
              language={{ color: 'rgb(22 163 74)', name: 'Shell' }}
              stacks={['Shell', 'GNU/Linux']}
              url="https://github.com/srfreitass/orionos"
              status="Público"
            />
          </div>
          <h2 className="text-primary text-xl font-semibold mt-4 mb-4">
            Ultimos posts
          </h2>
          <Project
            title="Teste e2e com Bun"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur"
            language={{ color: 'rgb(59 130 246)', name: 'Typescript' }}
            stacks={['Bun', 'Web API', 'E2E', 'Testes']}
            status="</techconnect/>"
            url="https://techconnectdev.vercel.app"
          />
        </div>
      </div>
    </div>
  );
};
