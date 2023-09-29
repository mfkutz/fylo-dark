import { logo, iconLocation, iconPhone, iconEmail } from '../utils/images/index'
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-DarkBlueFooter flex min-h-[30rem] pt-[12.5rem] justify-center px-[25px] lg:pb-[5.5rem] ">

      <div className='max-w-[1240px] w-full lg:ml-[2.7rem]'>
        <img src={logo} alt="Fylo" className='mb-[2.2rem] flex justify-start' />

        <div className='flex flex-wrap w-full justify-between gap-3 '>

          <div className='flex max-w-[630px] w-full  justify-between flex-col md:flex-row lg:flex-row '>

            <div className='mb-[1.2rem] lg:mb-0'>
              <div className='flex items-start gap-[1.6rem]'>
                <img src={iconLocation} alt="" />
                <p className='text-White-P max-w-[323px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua
                </p>
              </div>
            </div>

            <div>
              <div className='flex items-center gap-6 lg:mb-[1.2rem] mb-[1rem]'>
                <img src={iconPhone} alt="" />
                <span className='text-White-P text-[0.9rem]'>+1-543-123-4567</span>
              </div>
              <div className='flex items-center gap-6'>
                <img src={iconEmail} alt="" />
                <span className='text-White-P text-[0.9rem]'>example@fylo.com</span>
              </div>
            </div>


          </div>


          <div className='flex lg:gap-[4.8rem] gap-11 flex-col md:flex-row lg:flex-row lg:ml-[1.9rem] mt-[5rem] md:mt-0 lg:mt-0 '>

            <ul className='flex flex-col text-White-P '>
              <li className='mb-[1rem] shaD'><a href="#" >About Us</a></li>
              <li className='mb-[1rem] shaD'><a href="#">Jobs</a></li>
              <li className='mb-[1rem] shaD'><a href="#">Press</a></li>
              <li><a href="#" className='shaD'>Blog</a></li>
            </ul>

            <ul className='flex flex-col text-White-P '>
              <li className='mb-[1rem] shaD'><a href="#">Contact Us</a></li>
              <li className='mb-[1rem] shaD'><a href="#">Terms</a></li>
              <li><a href="#" className='shaD'>Privacy</a></li>
            </ul>

          </div>
          <div className='flex lg:items-start justify-center  w-full lg:w-auto mb-[3rem] lg:mb-0'>
            <div className='flex gap-3 mt-[5rem] lg:mt-0'>
              <a
                href="#"
                target="_blank"
                className="block p-[0.39rem] rounded-full text-white text-[1.1rem] border-[1.9px]  hover:border-CyanInsideGradient hover:text-CyanInsideGradient transition-colors duration-300"
              >
                <RiFacebookFill title="Instagram" />
              </a>
              <a
                href="#"
                target="_blank"
                className="block p-[0.39rem] rounded-full text-white text-[1.1rem] border-[1.9px]  hover:border-CyanInsideGradient hover:text-CyanInsideGradient transition-colors duration-300"
              >
                <RiTwitterFill title="Instagram" />
              </a>
              <a
                href="#"
                target="_blank"
                className="block p-[0.39rem] rounded-full text-white text-[1.1rem] border-[1.9px]  hover:border-CyanInsideGradient hover:text-CyanInsideGradient transition-colors duration-300"
              >
                <RiInstagramFill title="Instagram" />
              </a>

            </div>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Footer