
const Info = () => {
    return (
        <div className="flex flex-col items-center bg-DarkBlueintro pt-10 px-5 ">

            <h1 className="text-White-P lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] text-center font-bold font-Ral max-w-[700px] z-10">
                All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-White-P pt-8 lg:text-[1.2rem] text-[.9rem] text-center max-w-[600px] leading-[1.9rem] z-10 ">
                Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.
            </p>

            <button className="text-White btn bg-gradient-to-r from-CyanInsideGradient to-BlueInsideGradient px-[6.1rem] py-[1rem] rounded-full text-White-P mt-[1.9rem] mb-[9rem] z-10 hover:from-[#8cdae4] hover:to-[#8cdae4]">
                Get Started
            </button>

        </div>
    )
}

export default Info