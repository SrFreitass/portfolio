import book from '@/public/images/book.svg';
import Image from 'next/image';


interface EducationProps {
    beginDate: string;
    endDate: string;
    course: string;
    entity: string;
}



export const Education = ({ beginDate, endDate, course, entity }: EducationProps) => {
    return (
        <div className='-mt-8' data-aos="fade-down">
            <div className="flex gap-3">
                <div>
                    <div className="min-w-12 min-h-12 rounded-full bg-[#4D1D95]"></div>
                    <Image src={book} alt='Icone de livro' className='relative left-4 bottom-8'/>
                    <div className="relative bottom-9 min-w-12 min-h-7 rounded-full bg-[#4D1D95] blur-2xl"></div>
                </div>
                <h3 className="mt-2 text-2xl font-bold color_main">
                    {beginDate} - {endDate}
                </h3>
            </div>
            <div className="flex gap-3">
                <div className="min-w-12 flex justify-center">
                    <div className="relative bottom-10 min-w-0.5 max-w-1 min-h-36 rounded-full bg-gradient-to-r  from-[#18092F] via-[#4D1D95] to-[#000000]"></div>
                </div>
                <div>
                    <h4 className="text-2xl font-bold color_main">
                        {course}
                    </h4>
                    <p className="text-lg font-bold color_main">
                        {entity}
                    </p>
                </div>
            </div>
        </div>
    )
}