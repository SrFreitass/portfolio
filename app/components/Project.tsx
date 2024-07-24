import githubIcon from '@/public/images/github_icon.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ProjectProps {
    title: string;
    description: string;
    img: StaticImport
    stacks: { icon: React.ReactNode | string, name: string }[]
    direction: 'RIGHT' | 'LEFT';
    url: string;
    git: string;
}

export const Project = ({ title, description, img, direction, stacks, url, git }: ProjectProps) => {
    return (
        <div className='flex max-xl:flex-col max-xl:items-center gap-8 mt-28' data-aos={direction == "LEFT" ? "fade-left" : "fade-right"}>
            {direction == "LEFT" && <Image src={img} alt='' className='w-[38.75rem] h-[21.25rem] max-sm:object-contain max-sm:h-full max-xl:hidden rounded-xl border border-primary'/>}
            <div className='flex flex-col justify-center gap-4'>
                <div className='flex gap-4 flex-wrap max-xl:justify-center'>
                    {stacks.map((skill, index) => {
                        return <button key={index} className='bg-[#141D30] w-32 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2'>{skill.icon}<a href=''>{skill.name}</a></button>    
                    })}
                </div>
                <div className='flex flex-col  max-xl:items-center gap-4'>
                    <h2 className='text-[2.5rem] font-semibold color_main'>{title}</h2>
                    <p className='text-xl font-medum text-secundary max-xl:text-center'>{description}</p>
                </div>
                <div className='flex gap-4 max-xl:justify-center'>
                    <button className='bg-primary w-40 h-10 rounded-md font-semibold text-white'><a href={url} target='__blank'>Visitar</a></button>
                    <button className='bg-[#141D30] w-40 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2'><Image src={githubIcon} alt='Icone github'/><a href={git} target='__blank'>Código fonte</a></button>
                </div>
            </div>
            {direction == "RIGHT" && <Image src={img} alt='' className='w-[38.75rem] h-[21.25rem] max-sm:object-contain max-sm:h-full max-xl:hidden rounded-xl border border-primary'/>}
            <Image src={img} alt='' className='w-[38.75rem] h-[21.25rem] max-sm:object-contain max-sm:h-full hidden max-xl:block object-cover rounded-xl border border-primary'/>
        </div>
    )
}