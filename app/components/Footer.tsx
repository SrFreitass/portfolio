import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export const Footer = () => {
    return (
        <footer className="py-10 w-full flex-row-reverse flex justify-between items-center gap-8">
            <div className="flex gap-4">
                <button className="bg-[#141D30] w-10 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2">
                    <FaWhatsapp/>
                </button>
                <button className="bg-[#141D30] w-10 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2">
                    <MdEmail/>
                </button>
                <button className="bg-[#141D30] w-10 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2">
                    <FaInstagram/>
                </button>
                <button className="bg-[#141D30] w-10 h-10 rounded-md font-semibold text-secundary flex justify-center items-center gap-2">
                    <FaLinkedin/>
                </button>
            </div>
            <h2 className="text-xl font-bold color_main">© Freitasdev - 2024</h2>
        </footer>
    )
}