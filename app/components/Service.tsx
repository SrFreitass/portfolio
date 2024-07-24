
interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    className?: string;
}

export const Service = ({ title, description, icon, className }: ServiceProps) => {
    return (
        <div data-aos="fade-down" className={`p-4 w-96 h-60 flex flex-col items-center justify-center border border-secundary hover:border-secundary transition-all rounded-md ${className}`}>
            {icon}
            <h2 className="text-2xl font-semibold color_main">{title}</h2>
            <p className="text-secundary text-center">{description}</p>
        </div>
    )
}