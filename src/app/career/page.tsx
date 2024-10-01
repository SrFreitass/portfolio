import { Career } from "../components/Career";
import { Header } from "../components/Header";

export default function Page() {
    return (
        <main className="flex m-auto">
            <Header />
            <Career />
            {/* <Presentation/>
            <About/>
            <Services />
            <Projects/>
            <Contact/>
            <Footer/> */}
        </main>
    )
}