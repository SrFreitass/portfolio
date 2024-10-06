import { HardSkill } from './HardSkill';

interface Skill {
  url: string;
  stack: string;
  description: string;
}

interface HardSkillStackProps {
  label: string;
  skills: Skill[];
}

export function HardSkillStack({ label, skills }: HardSkillStackProps) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-primary text-xl font-semibold border-[#27272A] border-b pb-2">
        {label}
      </h2>
      <ul>
        {skills.map((skill, i) => {
          return <HardSkill {...skill} key={i} />;
        })}
      </ul>
    </div>
  );
}
