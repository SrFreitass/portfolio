import Image from "next/image"


export const Presentation = () => {
    return (
            <div className='mx-40 py-5 w-3/4'>
                <h1 className="text-3xl text-primary font-bold border-b pb-4 border-[#27272A]">Seja bem-vindo ao meu portfolio 👋</h1>
                <div className="flex mt-10 gap-10">
                    <Image className="min-w-[25rem] border rounded-xl" src={"https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Foto" width={200} height={500}/>
                    <div>
                        <h2 className="text-primary text-xl font-semibold">Sobre mim.</h2>
                        <p className="text-secundary">
                            Lorem ipsum 👋, dolor sit amet consectetur adipisicing elit. Sint sapiente expedita itaque quia at fuga, iusto tempore omnis iste cupiditate, aliquam maxime dolorum ipsum aperiam veritatis quasi excepturi, delectus animi.
                            lorem
                        </p>

                        <h2 className="text-primary text-xl font-semibold mt-4">
                            Ultimos Projetos
                            
                        </h2>
                        <div className="flex gap-4 mt-4 ">
                            <div className="border-[#27272a] border rounded-xl w-96 p-4">
                                <h3 className="text-primary text-lg font-semibold  flex gap-2 items-center">BookMark <p className="bg-[#494949] px-2 py-1 rounded-lg text-sm">Público</p></h3>
                                <p className="text-secundary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur
                                </p>
                                <div className="flex gap-2 items-center mt-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <p className="text-secundary text-sm">Typescript</p>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Bun</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Elysia.js</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Drizzle ORM</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Postgresql</p>
                                </div>
                            </div>
                            <div className="border-[#27272a] border rounded-xl w-96 p-4">
                                <h3 className="text-primary text-lg font-semibold  flex gap-2 items-center">OrionOS <p className="bg-[#494949] px-2 py-1 rounded-lg text-sm">Público</p></h3>
                                <p className="text-secundary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur
                                </p>
                                <div className="flex gap-2 items-center mt-2">
                                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                    <p className="text-secundary text-sm">Shell</p>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Bun</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Elysia.js</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Drizzle ORM</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Postgresql</p>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-primary text-xl font-semibold mt-4">
                            Ultimos posts
                        </h2>
                        <div className="border-[#27272a] border rounded-xl w-96 p-4 mt-4">
                                <h3 className="text-primary text-lg font-semibold  flex gap-2 items-center">Testes e2e em apis <p className="bg-[#494949] px-2 py-1 rounded-lg text-sm">{"<"}techconnect{"/>"}</p></h3>
                                <p className="text-secundary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. onsectetur adipisicing elit ipsum dolor sit amet consectetur
                                </p>
                                <div className="flex gap-2 items-center mt-2">
                                    <div className="w-2 h-2 bg-purple-950 rounded-full"></div>
                                    <p className="text-secundary text-sm">Programação</p>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Web API</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Back-end</p>
                                    <p className="bg-primary px-2 py-1 rounded-lg text-sm font-medium">Bun.js</p>
                                </div>
                            </div>
                    </div>
                    <div>
                    </div>
                    {/* <hr className="border-secundary border-[0.1px] border-solid"/> */}
                    {/* <Image alt='Stars' src={stars} className='w-full absolute right-0'/>
                    <Image alt='Stars' src={grid} className='w-screen h-screen absolute right-0 -z-10' data-aos="fade-down"/>
                    <section className='w-full h-[80vh] flex justify-center items-center' data-aos="fade-down">
                        <div className='flex flex-col justify-center'>
                            <h1 className='text-[3rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold color_main'>Olá, meu nome é</h1>
                            <span className='text-[4rem] max-md:text-[3rem] max-[500px]:text-[2.5rem] text-center font-semibold'><h2 className='inline-block color_main'>Guilherme Freitas</h2></span>
                            <p className='text-secundary text-xl font-medium max-w-5xl text-center mt-4 max-[500px]:text-lg'>
                            Sou um desenvolvedor full-stack 🐱‍💻
                            </p>
                            <p className="text-secundary text-xl font-medium max-w-5xl text-center mt-4 max-[500px]:text-lg flex justify-center items-center gap-2"> <FaMapMarkerAlt color="#9CA9BD"/> Campo Grande - MS  <span className="flex items-center gap-2 max-[420px]:hidden">| <PiSuitcaseSimple  color="#9CA9BD"/> #Open to Work</span></p>    
                        
                        </div>
                    </section>
                    <div className="animate-bounce flex justify-center" data-aos="fade-down">
                        <a href="#about"><BsArrowDown size={32} color="#4D1D95"/></a>
                    </div> */}
                </div>
            </div>
    )   
}