import { FaLinkedin } from "react-icons/fa"
import { Education } from "./Education"

export const Carrer = () => {
    return (
        <div>
            <h2 className="text-[2.5rem] font-semibold color_main" data-aos="fade-right">Experiência & Formação</h2>
            <div className="mt-14">
                <Education beginDate="Mar 2023" endDate="Dez 2025" course="Game Developer" entity="E.E Prof° Silvio Oliveira dos Santos" skills="Python, Lua"/>
                <Education beginDate="Mar 2024" endDate="Nov 2025" course="Systems Developer" entity="Senac MS - Hub Academy" skills="PHP, MySQL, Python"/>
            </div>
            <div className="flex gap-4 items-center">
                <button className='bg-primary w-40 h-12 rounded-md font-semibold text-white'><a href=''>Download C.V</a></button>
                <button className="bg-[#141D30] w-12 h-12 rounded-md font-semibold text-secundary flex justify-center items-center gap-2">
                    <FaLinkedin/>
                </button>
            </div>
        </div>
    )
}