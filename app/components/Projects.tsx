import estudai from '@/public/images/estudai.png'
import techconnect from '@/public/images/techconnect.png'
import { DiReact } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiFirebaseLine, RiNextjsLine } from 'react-icons/ri'
import { SiFastify, SiPostgresql, SiPrisma, SiStyledcomponents } from 'react-icons/si'
import { Project } from "./Project"

export const Projects = () => {
    return (
        <section className="flex flex-col items-center min-h-screen mt-72">
            <h2 className="text-[2.5rem] text-center font-bold color_main">Projetos de destaque</h2>
            <div>
                <Project 
                img={techconnect} 
                stacks={[{name:"React", icon: <DiReact size={24}/>}, 
                {name: "Firebase", icon: <RiFirebaseLine/>}, 
                {name: "Styled C.", icon: <SiStyledcomponents/>}]} 
                direction='LEFT' 
                title="<TechConnect />" 
                description="Projeto techconnect consiste em um portal de notícias de tecnologia similar a um blog. o projeto é full-stack, vai desde o front-end ao back-end com firebase." 
                />

                <Project 
                img={estudai} 
                stacks={[{name:"Next", icon:  <RiNextjsLine size={24}/>}, 
                {name: "NodeJS", icon: <FaNodeJs/> }, 
                {name: "Fastify", icon: <SiFastify/>}, 
                {name: "PostgreSQL", icon: <SiPostgresql/>}, 
                {name: "PrismaJS", icon: <SiPrisma/>}]} 
                direction='RIGHT' 
                title="<EstudaAI />" 
                description="Em desenvolvimento - Uma plataforma de educação para estudar para o ENEM e vestibulares, com simulados, correção de redação por IA e videoaulas." />
            </div>
        </section>
    )
}