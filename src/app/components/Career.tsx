import { Education } from './Education';

export const Career = () => {
  return (
    <div className="w-full">
      <h2 className="text-3xl text-primary font-bold border-b pb-4 border-[#27272A]">
        Experiências e formações
      </h2>

      <div className="mt-14">
        <Education
          beginDate="Mar 2023"
          endDate="Dez 2025"
          course="Ensino Médio Téc."
          entity="E.E Prof° Silvio Oliveira dos Santos"
          skills={[]}
        />
        <Education
          beginDate="Mar 2024"
          endDate="Nov 2025"
          course="Desenvolvimento de sistemas"
          entity="Senac MS - Hub Academy"
          skills={['PHP', 'MySQL', 'Python', 'HTML', 'CSS', 'Javascript']}
        />
      </div>
    </div>
  );
};
