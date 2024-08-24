import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from "../Components/Item"

const ShopCategory = (props) => {
const {allProducts} = useContext(ShopContext)

  return (
    <div className={`${props.menu?'pl-10':''} lg:p-0 category`}>
        <img src={props.banner} alt="" className="block my-7 mx-auto w-[82%]"/>
        <div className="flex mx-12 lg:mx-40 justify-between items-center">
          <p>
            <span className="font-semibold">Showing 1-12 </span>
            out of 36 products
          </p>
          <div className="py-2 px-5 rounded-[2.5rem] border border-[#888]">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="my-5 mx-8 lg:mx-16 gap-4 gap-y-5 grid grid-cols-shopCategory place-items-center">
          {allProducts.map((item,i)=>{
            if(props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }else {
              return null
            }
          })}
        </div>
        <div className="flex justify-center items-center my-36 mx-auto w-56 h-16 bg-[#ededed] text-[#787878] text-lg font-semibold">
          Explore More
        </div>
    </div>
  )
}

export default ShopCategory