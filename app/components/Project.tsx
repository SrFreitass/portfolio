import githubIcon from '@/public/images/github_icon.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ProjectProps {
    title: string;
    description: string;
    img: StaticImport
    stacks: [{ url: StaticImport | string, name: string }];
    direction: 'RIGHT' | 'LEFT';
}

export const Project = ({ title, description, img, direction }: ProjectProps) => {
    return (
        <div className='flex max-xl:flex-col max-xl:items-center gap-8 mt-28' data-aos={direction == "LEFT" ? "fade-left" : "fade-right"}>
            {direction == "LEFT" && <Image src={img} alt='' className='w-[38.75rem] h-[22rem] max-xl:hidden'/>}
            <div className='flex flex-col justify-center gap-4'>
                <div className='flex flex-col  max-xl:items-center gap-4'>
                    <h2 className='text-[2.5rem] font-semibold color_main'>{title}</h2>
                    <p className='text-xl font-medum text-[#9CA9BD] max-xl:text-center'>{description}</p>
                </div>
                <div className='flex gap-4 max-xl:justify-center'>
                    <button className='bg-[#4D1D95] w-40 h-10 rounded-md font-semibold text-white'>Visitar</button>
                    <button className='bg-[#141D30] w-40 h-10 rounded-md font-semibold text-[#9CA9BD] flex justify-center items-center gap-2'><Image src={githubIcon} alt='Icone github'/>Código fonte</button>
                </div>
            </div>
            {direction == "RIGHT" && <Image src={img} alt='' className='w-[38.75rem] h-[22rem] max-xl:hidden'/>}
            <Image src={img} alt='' className='w-[38.75rem] h-[22rem] hidden max-xl:block object-contain'/>
        </div>
    )
}