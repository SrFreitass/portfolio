import { Plus } from 'lucide-react';

interface EducationProps {
  beginDate: string;
  endDate: string;
  course: string;
  entity: string;
  skills: string[];
}

export const Education = ({
  beginDate,
  endDate,
  course,
  entity,
  skills,
}: EducationProps) => {
  return (
    <div className="-mt-8" data-aos="fade-down">
      <div className="flex gap-3">
        <div>
          <div className="w-6 h-6 relative left-3 rounded-full bg-primary z-10">
            <Plus size={16} className="m-auto relative top-1" />
          </div>

          <div className="relative bottom-9 min-w-8 min-h-8 rounded-full bg-purple-800 blur-2xl"></div>
        </div>
        <h3 className="text-xl font-semibold text-primary px-4">
          {beginDate} - {endDate}
        </h3>
      </div>
      <div className="flex gap-3">
        <div className="min-w-12 flex justify-center">
          <div className="relative bottom-10 min-w-0.5 max-w-1 min-h-40 rounded-full bg-[#27272A]"></div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-bold text-primary">{course}</h4>
          <p className="text-lg font-medium text-secundary ">{entity}</p>
          <div className="flex gap-4">
            {skills.map((skill, index) => {
              return (
                <p
                  className="bg-primary px-2 py-1 rounded-lg text-sm font-medium"
                  key={index}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
