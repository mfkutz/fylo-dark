import { logo, illustrationIntro } from '../utils/images/index'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <div className='bg-Dark-Blue-intro flex flex-col items-center '>

      <motion.nav
        className='flex items-center justify-between wrapper w-full mt-[4.55rem]'
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 0, transition: { duration: 1.1 } }}


      >
        <img
          src={logo}
          alt="logo"
        />
        <ul className='flex gap-[3.6rem] text-[white] text-[.96rem] font-Ral'>
          <li className='tracking-[.03rem] anim'><a href="">Features</a></li>
          <li className='tracking-[.03rem] anim'><a href="">Team</a></li>
          <li className='tracking-[.03rem] anim'><a href="">Sign In</a></li>
        </ul>

      </motion.nav>

      <motion.img
        src={illustrationIntro}
        alt="intro dark"
        className='mt-[4.61rem]'

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ y: 0, transition: { duration: 1.1 } }}
      />
    </div>
  )
}

export default Hero