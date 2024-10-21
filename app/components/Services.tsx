import { CgWebsite } from "react-icons/cg"
import { FaComputer } from "react-icons/fa6"
import { HiDevicePhoneMobile } from "react-icons/hi2"
import { IoHardwareChip } from "react-icons/io5"
import { MdDesignServices } from "react-icons/md"
import { TbApi } from "react-icons/tb"
import { Service } from "./Service"

export const Services = () => {
    return (
        <section className="mt-60 flex flex-col justify-center items-center">
            <h2 className="mb-16 text-[2.5rem] font-semibold color_main">Serviços</h2>
            <div className="flex items-center justify-center gap-8 flex-wrap">
                <Service title="Desenvolvimento de sites" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como Next.js" icon={<CgWebsite size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento de Web API" description="Desenho e implemento APIs eficientes e escaláveis, garantindo a segurança e a integração perfeita com sistemas." icon={<TbApi size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento Mobile" 
                description="Crio aplicações cross-platform de alta performance com React Native, utilizando componentes personalizados e integrações." icon={<HiDevicePhoneMobile  size={48} color="#9CA9BD"/>}/>
                <Service title="Design" description="Crio experiências de usuário incríveis com design intuitivo e atraente, utilizando Figma, faço designs de alta fidelidade." icon={<MdDesignServices size={48} color="#9CA9BD"/>}/>
                <Service title="Integração de sistemas" description="Realizo integração de sistemas para conectar aplicações, serviços e dados, permitindo que eles trabalhem em conjunto de forma eficaz e eficiente." icon={<IoHardwareChip  size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento Desktop" description="Desenvolvo aplicativos desktop usando o Electron, uma plataforma de código aberto que permite criar aplicativos desktop multiplataforma." icon={<FaComputer size={48} color="#9CA9BD"/>}/>
            </div>
        </section>
    )
}