import { Link } from "react-router-dom"

const Item = (props) => {
  return (
    <div>
        <div className=" max-w-[20rem] min-w-52 hover:scale-[1.05] hover:transition-all duration-500">
            <Link to={`/product/${props.id}`}>
            <img onClick={()=>window.scrollTo(0,0)} src={props.image} alt="" className="w-auto"/>
            </Link>
            <p className="my-[6px]">{props.name}</p>
            <div className="flex gap-5">
                <div className="text-[#374151] text-lg font-semibold">
                    ${props.new_price}
                </div>
                <div className="text-[#8c8c8c] text-lg font-semibold line-through">
                    ${props.old_price}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item