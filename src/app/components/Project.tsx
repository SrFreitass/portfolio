import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  stacks: string[];
  language: {
    color: string;
    name: string;
  };
  url: string;
  status: string;
  image?: string;
}

export const Project = ({
  title,
  description,
  language,
  stacks,
  url,
  status,
  image,
}: ProjectProps) => {
  return (
    <div className="border-[#27272a] border rounded-xl w-96 p-4">
      {image && (
        <Image
          src={image}
          alt="Imagem"
          className="w-full h-40 object-cover mb-4"
        />
      )}
      <Link href={url}>
        <h3 className="text-primary text-lg font-semibold  flex gap-2 items-center">
          {title}
          <p className="bg-[#494949] px-2 py-1 rounded-lg text-sm">{status}</p>
        </h3>
      </Link>
      <p className="text-secundary">{description}</p>
      <div className="flex gap-2 items-center mt-2">
        <div className={`w-2 h-2 bg-${language.color} rounded-full`}></div>
        <p className="text-secundary text-sm">{language.name}</p>
      </div>
      <div className="flex gap-4 mt-4">
        {stacks.map((stack, index) => {
          return (
            <p
              key={index}
              className="bg-primary px-2 py-1 rounded-lg text-sm font-medium"
            >
              {stack}
            </p>
          );
        })}
      </div>
    </div>
  );
};
