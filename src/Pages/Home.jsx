import { Features, Hero, Info, Section, Team } from "../components"

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <div className="bgCurve relative ">
                <Features />
            </div>
            <Section />
            <Team />
        </>
    )
}

export default Home