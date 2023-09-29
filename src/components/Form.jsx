
const Form = () => {
  return (
    <div className="bg-DarkBlueMain  flex justify-center pt-[9rem] h-[360px]  relative">

      <div className="bg-DarkBlueintro max-w-[862px] shadow-2xl py-[2.4rem] absolute lg:top-[12.6rem] px-8 lg:px-0 rounded-[10px] ml-[25px] mr-[25px]" >
        <h3 className="text-White-P text-center text-[1.2rem] md:text-[1.5rem] lg:text-[1.9rem]  font-Ral font-bold tracking-[1px] mb-4">
          Get early access today
        </h3>
        <p className="text-White-P text-[0.84rem] text-center  lg:px-[7rem] mb-9">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.
        </p>
        <form action="#" className="flex lg:flex-row flex-col justify-center gap-7 items-center">
          <input
            type="text"
            className="max-w-[30rem] w-full rounded-full px-8 py-[1rem] text-[0.8rem] "
            placeholder="email@example.com"
          />
          <button className="text-White text-[0.9rem] font-bold font-Ral bg-gradient-to-r from-CyanInsideGradient to-BlueInsideGradient  rounded-full text-White-P lg:px-[1.95rem] max-w-[30rem] lg:max-w-none w-full lg:w-auto py-[0.9rem] hover:from-[#8cdae4] hover:to-[#8cdae4]">
            Get Started For Free
          </button>
        </form>
      </div>

    </div>
  )
}

export default Form