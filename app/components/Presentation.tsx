import stars from '@/public/images/stars.svg'
import Image from 'next/image'


export const Presentation = () => {
    return (
        <div className='-mt-14'>
            <Image alt='Stars' src={stars} className='w-full absolute right-0'/>
            <section className='w-full h-screen flex justify-center items-center' data-aos="fade-down">
                <div className='flex flex-col justify-center'>
                    <h1 className='text-[4rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold color_main'>Olá, meu nome é</h1>
                    <span className='text-[4rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold'><h2 className='inline-block color_main'>Freitasdev</h2></span>
                    <p className='text-[#9CA9BD] text-xl font-medium max-w-5xl text-center mt-4 max-[500px]:text-lg'>
                    Sou um desenvolvedor full-stack, apaixonado por tecnlogia. Com experiências sólidas em diversas tecnologias, como: NodeJS, PostgreSQL, Prisma, React, NextJS, Typescript, PHP, Python
                    </p>    
                </div>
            </section>
        </div>
    )   
}