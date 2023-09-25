import { logo, illustrationIntro } from '../utils/images/index'
import { motion } from "framer-motion"
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div className='bg-Dark-Blue-intro flex flex-col items-center '>

      <Navbar />

      <motion.img
        src={illustrationIntro}
        alt="intro dark"
        className='mt-[4.61rem] px-11'

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 0, transition: { duration: 1.1 } }}
      />
    </div>
  )
}

export default Hero