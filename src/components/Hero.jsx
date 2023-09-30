import { illustrationIntro } from '../utils/images/index'
import { motion } from "framer-motion"
import Navbar from './Navbar'


const Hero = () => {
  const variants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } }
  })
  return (
    <div className='bg-DarkBlueintro flex flex-col items-center '>

      <Navbar />

      <motion.img
        src={illustrationIntro}
        alt="intro dark"
        className='mt-[4.61rem] px-11'

      /*   initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants(0.3)} */
      />
    </div>
  )
}

export default Hero