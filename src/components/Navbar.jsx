import { logo } from '../utils/images/index'
import { motion } from "framer-motion"


const Navbar = () => {
  const variants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } }
  })

  return (
    <motion.nav
      className='flex flex-col mt-10 items-center  md:flex-row md:justify-between md:items-center lg:items-center lg:justify-between wrapper w-full lg:mt-[4.55rem] px-[38px]'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants(0.2)}
    >
      <img
        src={logo}
        alt="logo"
        className='w-[140px] mb-4 md:mb-0 lg:w-[176px] '
      />
      <ul className='flex lg:gap-[3.6rem] gap-[3rem] text-[white] text-[.96rem] font-Ral'>
        <li className='tracking-[.03rem] anim'><a href="#features">Features</a></li>
        <li className='tracking-[.03rem] anim'><a href="#team">Team</a></li>
        <li className='tracking-[.03rem] anim'><a href="#contact">Sign In</a></li>
      </ul>

    </motion.nav>
  )
}

export default Navbar