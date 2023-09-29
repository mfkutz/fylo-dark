import { Features, Footer, Form, Hero, Info, Section, Team } from "../components"

const Home = () => {
    return (
        <div className="bg-DarkBlueintro">
            <Hero />
            <Info />
            <div className="bgCurve relative bg-DarkBlueMain ">
                <Features />
                <Section />
                <Team />
                <Form />
            </div>
            <Footer />
        </div>
    )
}

export default Home