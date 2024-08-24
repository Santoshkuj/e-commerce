import { useEffect, useState } from "react"
import axios from "axios"
import cross_icon from '../Assets/cross_icon.png'
const ListProduct = () => {

    const[allProducts,setAllProducts] = useState([])

    const fetchInfo = async () => {
        const response = await axios.get('http://localhost:5004/api/product/allproducts')

        if (response.data.success) {
            setAllProducts(response.data.products)
        }
    }

    const removeProduct = async (id) => {
        await axios.post('http://localhost:5004/api/product/remove',{id})
        await fetchInfo()
    }
    useEffect(()=>{
        fetchInfo()
    },[])

  return (
    <div className="flex flex-col w-full h-[40rem] py-2 px-12 p-7 rounded-md bg-white">
        <h1>All Product List</h1>
        <div className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-2 w-full py-5 text-[#454545] text-base font-semibold">
            <p>Products</p>
            <p>Title</p>
            <p>Old price</p>
            <p>New price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="overflow-y-scroll mr-[-20px]">
            <hr />
            {allProducts.map((product,index)=>{
                return(
                    <>
                    <div key={index} className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-4 w-full py-5 text-[#454545] text-base font-medium items-center">
                        <img src={product.image} alt="" className="h-16"/>
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img src={cross_icon} alt="" className="cursor-pointer" onClick={()=>removeProduct(product.id)}/>
                    </div>
                    <hr />
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default ListProduct