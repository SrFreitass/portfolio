import { HardSkills } from "../components/HardSkills";
import { Header } from "../components/Header";

export default function Page() {
    return (
        <main className="flex m-auto">
                <Header />
                <HardSkills />
                {/* <Presentation/>
                <About/>
                <Services />
                <Projects/>
                <Contact/>
                <Footer/> */}
        </main>
    )
}