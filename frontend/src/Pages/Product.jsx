import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom"
import Breadcrum from "../Components/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay";
import Description from "../Components/Description";
import RelatedProducts from "../Components/RelatedProducts";

const Product = ({menu}) => {
  const {allProducts} = useContext(ShopContext);
  const {productId} = useParams();
  
  const product = allProducts.find(e=>e.id === Number(productId))
  return (
    <div className={`${menu?'pl-[4.2rem]':''} lg:pl-0`}>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <Description/>
        <RelatedProducts/>
    </div>
  )
}

export default Product