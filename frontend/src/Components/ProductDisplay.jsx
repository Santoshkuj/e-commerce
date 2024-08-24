import star_icon from "./Assets/star_icon.png";
import star_dull_icon from "./Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex gap-5 lg:gap-10 mx-4 lg:mx-40">
      <div className=" flex  gap-4">
        <div className="flex flex-col gap-4">
          <img src={product.image} alt="" className="h-32 w-32" />
          <img src={product.image} alt="" className="h-32 w-32" />
          <img src={product.image} alt="" className="h-32 w-32" />
          <img src={product.image} alt="" className="h-32 w-32" />
        </div>
        <div className="">
          <img src={product.image} alt="" className="w-[32rem] h-[35rem]" />
        </div>
      </div>
      <div className="flex flex-col w-[65%] lg:w-auto">
        <h1 className="text-[#3d3d3d] text-3xl lg:text-4xl font-bold">
          {product.name}
        </h1>
        <div className="flex items-center mt-3 gap-1 text-[#1c1c1c] text-base">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-4 lg:my-7 gap-7 text-2xl font-bold">
          <div className="line-through text-[#818181]">
            ${product.old_price}
          </div>
          <div className="text-[#ff4141]">${product.new_price}</div>
        </div>
        <div className="mt-[-6px] lg:text-lg">
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          around neckline and short sleeves, worn as an undershirt or under
          garment.
        </div>
        <div>
          <h1 className="lg:mt-8 mt-6 text-[#656565] text-xl font-semibold">
            Select size
          </h1>
          <div className="flex flex-wrap my-4 lg:my-7 gap-2 lg:gap-5 items-center">
            <div className="py-2 lg:py-3 px-4 lg:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer">
              S
            </div>
            <div className="py-2 lg:py-3 px-4 lg:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer">
              M
            </div>
            <div className="py-2 lg:py-3 px-4 lg:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer">
              L
            </div>
            <div className="py-2 lg:py-3 px-4 lg:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer">
              XL
            </div>
            <div className="py-2 lg:py-3 px-4 lg:px-6 bg-[#fbfbfb] border border-[#ebebeb] rounded-sm cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          className="py-4 lg:py-5 lg:px-10 w-40 lg:w-48 text-base font-semibold text-white bg-[#ff4141] mb-6 lg:mb-8 border-none outline-none cursor-pointer"
          onClick={() => addToCart(product.id)}
        >
          ADD TO CART
        </button>
        <p className="text-lg">
          <span className="font-semibold">Category :</span>
          Women, T-Shirt, Crop Top
        </p>
        <p className="text-lg">
          <span className="font-semibold">Tags :</span>
          Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
