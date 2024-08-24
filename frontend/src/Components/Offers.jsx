import exclusive_image from './Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="w-[85%] lg:w-[65%] flex m-auto px-16 lg:px-24 mb-36 bg-custom-gradient">
        <div className="flex-1 flex flex-col justify-center">
            <h1 className='text-[#171717] lg:text-[5rem] text-5xl font-semibold '>Exclusive</h1>
            <h1 className='text-[#171717] lg:text-[5rem] text-5xl font-semibold'>Offers for you</h1>
            <p className='text-[#171717] lg:text-2xl text-xl font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
            <button className='w-40 h-12 lg:w-64 lg:h-16 rounded-[2.2rem] bg-[#ff4141] border-none text-white lg:text-xl font-medium lg:mt-7 mt-5 cursor-pointer'>
                Check Now
            </button>
        </div>
        <div className="flex-1 flex items-center justify-end pt-12">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers