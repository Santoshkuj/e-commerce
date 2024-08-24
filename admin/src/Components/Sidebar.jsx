import { Link } from "react-router-dom"
import addProduct_icon from '../Assets/Product_Cart.svg'
import listProduct_icon from '../Assets/Product_list_icon.svg'
const Sidebar = () => {
  return (
    <div className="flex flex-col pt-7 gap-5 w-full max-w-20 h-[100vh] bg-white">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="flex flex-col items-center justify-center py-1 bg-[#f6f6f6] gap-5 cursor-pointer">
                <img src={addProduct_icon} alt="" />
                <p>Add prod.</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration:"none"}}>
            <div className="flex flex-col items-center justify-center py-1 bg-[#f6f6f6] gap-5 cursor-pointer">
                <img src={listProduct_icon} alt="" />
                <p>Prod. List</p>
            </div>
        </Link>

    </div>
  )
}

export default Sidebar