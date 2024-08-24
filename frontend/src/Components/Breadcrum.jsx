import arrow_icon from './Assets/arrow.png'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="flex gap-2 items-center text-[#5e5e5e] text-base font-semibold my-14 lg:mx-40 mx-4 capitalize">
        HOME <img src={arrow_icon} alt="" className='w-5 h-4 bg-slate-400'/>
        SHOP <img src={arrow_icon} alt="" className='w-5 h-4 bg-slate-400' />
        {product.category} <img src={arrow_icon} alt="" className='w-4 h-4 bg-slate-400' />
        {product.name}
    </div>
  )
}

export default Breadcrum