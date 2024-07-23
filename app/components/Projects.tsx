import projectOneX from '@/public/images/project_onex.png'
import { Project } from "./Project"

export const Projects = () => {
    return (
        <section className="flex flex-col items-center min-h-screen mt-72">
            <h2 className="text-[2.5rem] text-center font-bold color_main">Projetos de destaque</h2>
            <div>
                <Project img={projectOneX} stacks={[{name:"React", url: ""}]} direction='LEFT' title="Project OneX" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero ." />
                <Project img={projectOneX} stacks={[{name:"React", url: ""}]} direction='RIGHT' title="Project OneX" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus convallis euismod. Sed efficitur augue quis eros porttitor pellentesque. Nulla facilisi. Suspendisse id diam ut libero ." />
            </div>
        </section>
    )
}