import { ReactNode } from "react";

interface HardSkillProps {
    icon: ReactNode,
    name: string;
}

export const HardSkill = ({ icon, name }: HardSkillProps) => {
    return (
        <div className="flex items-center justify-center text-secundary font-semibold gap-2 bg-[#141D30] w-36 h-10 rounded-lg">
            {icon} {name}
        </div>
    )
}