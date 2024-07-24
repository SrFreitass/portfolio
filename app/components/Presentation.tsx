import grid from "@/public/images/grid.svg"
import stars from '@/public/images/stars.svg'
import Image from 'next/image'
import { BsArrowDown } from "react-icons/bs"
import { FaMapMarkerAlt } from "react-icons/fa"
import { PiSuitcaseSimple } from "react-icons/pi"


export const Presentation = () => {
    return (
            <div className=''>
                <Image alt='Stars' src={stars} className='w-full absolute right-0'/>
                <Image alt='Stars' src={grid} className='w-screen h-screen absolute right-0 -z-10' data-aos="fade-down"/>
                <section className='w-full h-[80vh] flex justify-center items-center' data-aos="fade-down">
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-[3rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold color_main'>Olá, meu nome é</h1>
                        <span className='text-[4rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold'><h2 className='inline-block color_main'>Guilherme Freitas</h2></span>
                        <p className='text-secundary text-xl font-medium max-w-5xl text-center mt-4 max-[500px]:text-lg'>
                        Sou um desenvolvedor full-stack 🐱‍💻
                        </p>
                        <p className="text-secundary text-xl font-medium max-w-5xl text-center mt-4 max-[500px]:text-lg flex justify-center items-center gap-2"> <FaMapMarkerAlt color="#9CA9BD"/> Campo Grande - MS | <PiSuitcaseSimple  color="#9CA9BD"/> #Open to Work</p>    
                    
                    </div>
                </section>
                <div className="animate-bounce flex justify-center" data-aos="fade-down">
                    <a href="#about"><BsArrowDown size={32} color="#4D1D95"/></a>
                </div>
            </div>
    )   
}