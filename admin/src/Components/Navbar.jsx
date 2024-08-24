import navlogo from '../Assets/nav-logo.svg'
import navprofile from '../Assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-3 px-14 mb-[1px] bg-white shadow-[0_1px_3px_-2px_#000]">
        <img src={navlogo} alt="" className="w-48"/>
        <img src={navprofile} alt="" className='w-16'/>
    </div>
  )
}

export default Navbar