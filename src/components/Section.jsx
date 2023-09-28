import { illustationStayProductive, iconArrow } from '../utils/images/index'

const Section = () => {
  return (
    <div className='bg-DarkBlueMain flex flex-wrap justify-center items-center gap-[4rem] pb-[11.1rem]'>

      <img src={illustationStayProductive} alt="productive" className='px-[25px] lg:px-0' />
      <div className='lg:pt-[2.9rem]'>
        <h2 className=' max-w-[30rem] lg:text-[2.5rem] text-[1.2rem] text-White-P font-Ral font-semibold leading-[3.3rem] lg:mb-[1.15rem] mb-[0.3rem] px-[25px] lg:px-0 '>
          Stay productive, wherever you are
        </h2>
        <p className='max-w-[35rem] lg:text-[1rem] text-[0.85rem] text-White-P  mb-[1.05rem] px-[25px] lg:px-0'>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file
          storage needs.
        </p>
        <p className='max-w-[35rem] lg:text-[1rem] text-[0.85rem] text-White-P mb-[1.3rem] px-[25px] lg:px-0 '>
          Securely share files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <a href="#" className='cursor-pointer text-[#65B6AF] lg:w-[165px] mx-[25px] lg:mx-0 w-[135px] border-b-[1px] border-[#65B6AF] flex items-center pb-[2px] relative  text-[0.74rem]'>
          <span>See how Fylo works </span>
          <img src={iconArrow} alt="icon" className='absolute right-0 bottom-1' />
        </a>
      </div>
    </div>
  )
}

export default Section