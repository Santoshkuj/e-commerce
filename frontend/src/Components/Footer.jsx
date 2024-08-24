import footer_logo from './Assets/logo.png'
import instagram_icon from './Assets/instagram_icon.png'
import whatsapp_icon from './Assets/whatsapp_icon.png'
import pintester_icon from './Assets/pintester_icon.png'
const Footer = () => {
    let date = new Date()

  return (
    <div className="flex flex-col justify-center items-center gap-12 mt-4">
        <div className="flex items-center gap-5">
            <img src={footer_logo} alt="" />
            <p className='text-[#383838] text-4xl font-bold'>
                SHOPPER
            </p>
        </div>
        <ul className='flex list-none gap-12 text-[#252525] text-xl'>
            <li className='cursor-pointer'>Company</li>
            <li className='cursor-pointer'>Products</li>
            <li className='cursor-pointer'>Offices</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
        <div className="flex gap-5">
            <div className="p-2 pb-1 bg-[#fbfbfb] border border-[#ebebeb]">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="p-2 pb-1 bg-[#fbfbfb] border border-[#ebebeb]">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="p-2 pb-1 bg-[#fbfbfb] border border-[#ebebeb]">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-7 w-full mb-7 text-[#1a1a1a] text-xl">
            <hr className='w-[80%] border-none rounded-lg h-1 bg-[#c7c7c7]'/>
            <p>
                Copyright @ {date.getFullYear()} -All Right Reserved
            </p>
        </div>
    </div>
  )
}

export default Footer