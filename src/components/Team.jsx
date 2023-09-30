import TestimonialCard from './TestimonialCard'
import { motion } from "framer-motion"

const Team = () => {

  const variants = (delay) => ({
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: delay, duration: 0.5 } }
  })
  return (
    <motion.div
      className="bg-DarkBlueMain flex gap-10 justify-center flex-wrap "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants(0.2)}
    >
      <TestimonialCard />
    </motion.div>
  )
}

export default Team