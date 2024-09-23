import Image from "next/image"
import { AiOutlineProject } from "react-icons/ai"
import { FaStackOverflow } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import { PiGraph } from "react-icons/pi"
import { TbSparkles } from "react-icons/tb"

export const Header = () => {
    return ( 
        <aside className="py-5">
            <div className="flex items-center gap-4">
                <Image src={"https://github.com/srfreitass.png"} width={50} height={50} className="rounded-full" alt="Foto de perfil"/>
                <div>
                    <h2 className="text-primary font-bold">Guilherme Freitas</h2>
                    <p className="text-secundary font-medium">Desenvolvedor Full-Stack</p>
                </div>
            </div>

            <ul className="text-secundary flex flex-col gap-6 mt-8 font-semibold">
                <li className="flex items-center gap-2"><TbSparkles size={24}/> Início</li>
                <li className="flex items-center gap-2"><PiGraph   size={24}/> Carreira</li>
                <li className="flex items-center gap-2"><FaStackOverflow  size={24}/> Habilidades</li>
                <li className="flex items-center gap-2"><AiOutlineProject  size={24}/> Projetos</li>
                <li className="flex items-center gap-2"><IoMdContact  size={24}/> Contato</li>
            </ul>
        </aside>
    )
}