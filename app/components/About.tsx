import Image from 'next/image'
import { Carrer } from './Career'

export const About = () => {
    return (
        <section className='flex gap-8'>
            <Image alt='Guilherme Freitas Foto' src={"https://github.com/srfreitass.png"} quality={100} width={500} height={100} className='w-[30rem] h-[46rem] rounded-2xl sticky top-1 border max-2xl:hidden' data-aos="fade-right"/>
            <div className='flex flex-col gap-8'>
                <div data-aos="fade-right">
                    <h3 className='text-[2.5rem] font-semibold color_main'>Sobre mim</h3>
                    <p className='text-[#9CA9BD] text-xl font-medium max-w-6xl mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero .
                    </p>
                </div>
                <Carrer/>
            </div>
        </section>
    )
}