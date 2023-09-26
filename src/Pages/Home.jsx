import { Features, Hero, Info } from "../components"

const Home = () => {
    return (
        <>
            <Hero />
            <Info />
            <div className="bgCurve relative ">
                <Features />
            </div>
        </>
    )
}

export default Home