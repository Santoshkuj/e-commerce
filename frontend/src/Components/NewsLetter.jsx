
const NewsLetter = () => {
  return (
    <div className="lg:w-[65%] h-[40vh] w-[85%] flex flex-col items-center justify-center m-auto px-20 lg:px-28 mb-36 bg-custom-newsletter gap-7">
        <h1 className="text-[#454545] text-3xl lg:text-5xl font-semibold">
            Get Exclusive Offers on Your Email
        </h1>
        <p className="text-[#454545] text-xl">
            Subscribe to our new newsletter and stay updated
        </p>
        <div className="flex items-center justify-between bg-white w-[30rem] lg:w-[45rem] h-12 lg:h-16 rounded-[5rem] border border-[#e3e3e3]">
            <input type="email" placeholder="Your Email id"  className="w-[31rem] ml-7 border-none text-[#616161] font-Poppins text-base p-1 outline-none"/>
            <button className="lg:w-52 w-40 h-11 lg:h-16 rounded-[5rem] bg-black text-white text-base cursor-pointer">
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default NewsLetter