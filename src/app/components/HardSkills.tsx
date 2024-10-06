import { HardSkillStack } from './HardSkillsStack';

export const HardSkills = () => {
  return (
    <section className="w-full">
      <h2 className="text-3xl text-primary font-bold pb-4 ">Habilidades</h2>
      <div className="flex flex-col gap-8 flex-wrap mt-4">
        <HardSkillStack
          label="Linguagens"
          skills={[
            {
              description: 'Lorem ipsum dolor it',
              stack: 'Javascript',
              url: 'https://github.com/srfreitass',
            },
          ]}
        />
      </div>
    </section>
  );
};
