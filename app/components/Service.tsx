
interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

export const Service = ({ title, description, icon, className }: ServiceProps) => {
    return (
        <div data-aos="fade-down" className={`p-4 w-96 h-60 flex flex-col items-center justify-center border border-[#9CA9BD] hover:border-[#4D1D95] transition-all rounded-md ${className}`}>
            {icon}
            <h2 className="text-2xl font-semibold color_main">{title}</h2>
            <p className="text-[#9CA9BD] text-center">{description}</p>
        </div>
    )
}