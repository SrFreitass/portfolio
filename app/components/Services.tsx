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
                <Service title="Desenvolvimento de sites" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<CgWebsite size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento de Web API" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<TbApi size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento Mobile" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<HiDevicePhoneMobile  size={48} color="#9CA9BD"/>}/>
                <Service title="Design" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<MdDesignServices size={48} color="#9CA9BD"/>}/>
                <Service title="Integração de sistemas" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<IoHardwareChip  size={48} color="#9CA9BD"/>}/>
                <Service title="Desenvolvimento Desktop" description="Crio sites interativos e responsivos usando HTML, CSS e JavaScript, combinados com frameworks como React" icon={<FaComputer size={48} color="#9CA9BD"/>}/>
            </div>
        </section>
    )
}