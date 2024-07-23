import { Education } from "./Education"

export const Carrer = () => {
    return (
        <div>
            <h2 className="text-[2.5rem] font-semibold color_main" data-aos="fade-right">Experiência & Formação</h2>
            <div className="mt-14">
                <Education beginDate="Mar 2023" endDate="Dez 2025" course="Game Developer" entity="E.E Prof° Silvio Oliveira dos Santos"/>
                <Education beginDate="Mar 2024" endDate="Nov 2025" course="Systems Developer" entity="Senac MS - Hub Academy"/>
            </div>
        </div>
    )
}