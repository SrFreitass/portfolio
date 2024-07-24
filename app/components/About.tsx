import photo_guilherme from '@/public/images/guilherme.jpg'
import Image from 'next/image'
import { Carrer } from './Career'

export const About = () => {
    return (
        <section className='flex gap-8 mt-72' id='about'>
            <Image alt='Guilherme Freitas Foto' src={photo_guilherme} quality={100} width={500} height={100} className='w-[30rem] h-[46rem] rounded-2xl sticky top-1 border max-2xl:hidden object-cover' data-aos="fade-right"/>
            <div className='flex flex-col gap-8'>
                <div data-aos="fade-right">
                    <h3 className='text-[2.5rem] font-semibold color_main'>Sobre mim</h3>
                    <p className='text-secundary text-xl font-medium max-w-6xl mt-4'>
                    Olá, sou Guilherme Freitas do Nascimento, tenho 16 anos. Comecei a desenvolver no início de 2023. Sou um entusiasta da tecnologia e um desenvolvedor full-stack, dedicado a construir soluções e projetos de alto nível. Desde o início da minha jornada no desenvolvimento, tenho buscado aprimorar constantemente minhas habilidades e enfrentar novos desafios.
                    </p>
                </div>
                <Carrer/>
            </div>
        </section>
    )
}