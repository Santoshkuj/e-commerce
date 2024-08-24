import { useState } from 'react'
import upload_area from '../Assets/upload_area.svg'
import '../index.css'
import axios from 'axios'
const AddProduct = () => {

    const[image,setImage] = useState(false)
    const[details,SetDetails] = useState({
        name:"",
        category : "Women",
        new_price : "",
        old_price : ""
    })

    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }
    const detailHandler = (e) =>{
        const {name,value} = e.target;
        SetDetails(data=>({
            ...data,[name] : value
        }))
    }

    const AddProduct = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('name',details.name)
        formData.append('image',image)
        formData.append('category',details.category)
        formData.append('new_price',details.new_price)
        formData.append('old_price',details.old_price)
        const response = await axios.post('http://localhost:5004/api/product/add',formData);
        if (response.data.success) {
            alert('Product added')
            SetDetails(data=>({
                ...data,
                name:"",
                category : details.category,
                new_price : "",
                old_price : ""
                }))
            setImage(false)
        } else{
            alert('Failed to add product')
        }
    }

  return (
    <form onSubmit={AddProduct} className="box-border w-full max-w-[800px] py-7 px-12 my-5 mx-7 rounded-md bg-white">
        <div className="w-full text-[#7b7b7b] text-base">
            <p>Product Name</p>
            <input type="text" name="name" placeholder="product name" className='inputclass' onChange={detailHandler} value={details.name}/>
        </div>
        <div className="flex gap-10">
            <div className="w-full text-[#7b7b7b] text-base">
                <p>Price</p>
                <input type="text" name="old_price" placeholder="old price" className='inputclass' onChange={detailHandler} value={details.old_price}/>
            </div>
            <div className="w-full text-[#7b7b7b] text-base">
                <p>Offer Price</p>
                <input type="text" name="new_price" placeholder="new price" className='inputclass' onChange={detailHandler} value={details.new_price}/>
            </div>
        </div>
        <div className="w-full text-[#7b7b7b] text-base">
            <p>Product Category</p>
            <select name="category" className="p-2 w-24 h-10 text-sm text-[#7b7b7b] border border-[#7b7b7b8d] rounded-md" onChange={detailHandler} value={details.category}>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kid">Kid</option>
            </select>
        </div>
        <div className="w-28 text-[#7b7b7b] text-base">
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='h-28 w-28 rounded-lg object-contain my-2 cursor-pointer'/>
            </label>
            <input type="file" name="image" id="file-input" hidden className='inputclass' onChange={imageHandler}/>
        </div>
        <button className='mt-5 w-40 h-12 rouded-md bg-[#6079ff] border-none cursor-pointer text-white text-base font-medium' type='submit'>
            Add
        </button>
    </form>
  )
}

export default AddProduct