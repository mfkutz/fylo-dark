import { logo } from '../utils/images/index'
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <motion.nav
      className='flex flex-col mt-10 items-center  md:flex-row md:justify-between md:items-center lg:items-center lg:justify-between wrapper w-full lg:mt-[4.55rem] px-[38px]'
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ y: 0, transition: { duration: 1.1 } }}
    >
      <img
        src={logo}
        alt="logo"
        className='w-[140px] mb-4 md:mb-0 lg:w-[176px] '
      />
      <ul className='flex lg:gap-[3.6rem] gap-[3rem] text-[white] text-[.96rem] font-Ral'>
        <li className='tracking-[.03rem] anim'><a href="">Features</a></li>
        <li className='tracking-[.03rem] anim'><a href="">Team</a></li>
        <li className='tracking-[.03rem] anim'><a href="">Sign In</a></li>
      </ul>

    </motion.nav>
  )
}

export default Navbar