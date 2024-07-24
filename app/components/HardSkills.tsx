import { FaNodeJs } from "react-icons/fa"
import { SiFastify, SiFirebase, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPrisma, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import { HardSkill } from "./HardSkill"

export const HardSkills = () => {
    return (
        <section className="flex flex-col items-start  gap-8" data-aos="fade-down">
            <h2 className="text-[2.5rem] font-semibold color_main">Hard Skills</h2>
            <div className="flex gap-4 flex-wrap max-w-[40rem]">
                <HardSkill  icon={<FaNodeJs/>} name="Node.js"/>
                <HardSkill  icon={<SiPrisma/>} name="Prisma.js"/>
                <HardSkill  icon={<SiTypescript/>} name="Typescript"/>
                <HardSkill  icon={<SiFastify/>} name="Fastify"/>
                <HardSkill  icon={<SiPostgresql/>} name="PostgreSQL"/>
                <HardSkill  icon={<SiPhp/>} name="PHP"/>
                <HardSkill  icon={<SiMysql/>} name="MySQL"/>
                <HardSkill  icon={<SiReact/>} name="React"/>
                <HardSkill  icon={<SiNextdotjs/>} name="Next"/>
                <HardSkill  icon={<SiPython/>} name="Python"/>
                <HardSkill  icon={<SiTailwindcss/>} name="TailwindCSS"/>
                <HardSkill  icon={<SiFirebase/>} name="Firebase"/>
            </div>
        </section>
    )
}