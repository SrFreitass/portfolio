import { RiShareBoxFill } from 'react-icons/ri';

interface HardSkillProps {
  url: string;
  stack: string;
  description: string;
}

export const HardSkill = ({ stack, description, url }: HardSkillProps) => {
  return (
    <li>
      <a
        target="__blank"
        href={url}
        className="text-blue-500 gap-1 items-center inline-flex "
      >
        {stack} <RiShareBoxFill />{' '}
      </a>
      <span className="text-primary">- {description}</span>
    </li>
  );
};
