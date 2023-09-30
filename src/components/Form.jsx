import { useForm } from 'react-hook-form'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const Form = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset()
  })


  return (
    <div id='contact' className="bg-DarkBlueMain  flex justify-center pt-[9rem] h-[360px]  relative">
      <motion.div
        ref={ref}
        className="bg-DarkBlueintro max-w-[862px] shadow-2xl pt-[2.4rem] pb-[2.6rem] absolute lg:top-[12.6rem] px-8 lg:px-0 rounded-[10px] ml-[25px] mr-[25px]"
      /*   initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }} */
      >
        <h3 className="text-White-P text-center text-[1.2rem] md:text-[1.5rem] lg:text-[1.9rem]  font-Ral font-bold tracking-[1px] mb-4 pt-[0.27rem]">
          Get early access today
        </h3>
        <p className="text-White-P text-[0.84rem] text-center  lg:px-[7rem] mb-9">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.
        </p>
        <form onSubmit={onSubmit} className="flex lg:flex-row flex-col justify-center gap-7 items-center">
          <div className="w-full max-w-[30rem] relative">
            <input
              type="text"
              className="max-w-[30rem] w-full rounded-full px-8 py-[1rem] text-[0.8rem] "
              placeholder="email@example.com"

              {...register("email", {
                required: {
                  value: true,
                  message: "Email required"
                },
                pattern: {
                  value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  message: "Please enter a valid email address"
                }
              })}
            />
            {
              errors.email && <span className="text-red-600 text-[0.7rem] absolute left-[2.1rem] -bottom-[1.3rem] font-bold">{errors.email.message}</span>
            }
          </div>
          <button className="text-White text-[0.9rem] font-bold font-Ral bg-gradient-to-r from-CyanInsideGradient to-BlueInsideGradient  rounded-full text-White-P lg:px-[1.95rem] max-w-[30rem] lg:max-w-none w-full lg:w-auto py-[0.9rem] hover:from-[#8cdae4] hover:to-[#8cdae4]">
            Get Started For Free
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Form