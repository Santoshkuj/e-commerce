import '../index.css'
import hand_icon from './Assets/hand_icon.png'
import arrow_icon from './Assets/arrow.png'
import hero_img from './Assets/hero_image.png'
const Hero = () => {
  return (
    <div className="h-[90vh] lg:h-auto bg-custom-gradient flex">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-5 lg:pl-44 leading-1.1">
            <h2 className='text-[#090909] text-[1.6rem] font-semibold'>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="flex items-center gap-5">
                <p className='hero-p lg:text-[#171717] lg:text-[6.3rem]'>new</p>
                <img src={hand_icon} alt="" className='w-[6.5rem]'/>
            </div>
            <p className='hero-p lg:text-[#171717] lg:text-[6.3rem]'>
                collections
            </p>
            <p className='hero-p lg:text-[#171717] lg:text-[6.3rem]'>
                for everyone
            </p>
        </div>
        <div className='flex justify-center items-center gap-3 lg:w-[19rem] lg:h-[4.5rem] mt-7 bg-[#ff4141] text-white text-xl font-medium rounded-[4.7rem] w-60 h-16'>
            <div className=''>
                Latest Collection
            </div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
            <img src={hero_img} alt="" className='w-96 lg:w-[28rem]'/>
        </div>
        
    </div>
  )
}

export default Hero