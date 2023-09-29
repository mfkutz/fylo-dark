import testimonials from '../utils/data/testimonials.json'

const TestimonialCard = () => {
    return (
        <>
            {testimonials.map((item, index) => (
                <div className={`bg-DarkBlueTestimonials max-w-[360px] w-full px-[28px] tracking-[0.8px] pt-[40px] pb-[23px] rounded-md mx-[25px] lg:mx-0 relative  ${index === 0 ? "icon" : null} `} key={index}>
                    <p className='text-White-P lg:text-[0.83rem] text-[0.72rem] leading-[1.4rem] mb-[1.3rem]'>
                        {item.paragraph}
                    </p>
                    <div className="flex items-center gap-2">
                        <img src={item.image} alt="profile" className='w-[25px] h-[25px] rounded-full' />
                        <div className='flex flex-col'>
                            <h3 className='text-White-P text-[0.65rem] tracking-[0.5px] font-semibold'>{item.name}</h3>
                            <span className='text-gray-300 text-[0.45rem] '>{item.position}</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default TestimonialCard