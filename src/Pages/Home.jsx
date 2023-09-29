import { Features, Footer, Form, Hero, Info, Section, Team } from "../components"

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
            <Form />
            <Footer />
        </>
    )
}

export default Home