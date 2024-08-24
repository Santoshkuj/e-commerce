import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "./Assets/cart_cross_icon.png";

const CartItems = () => {
  const { allProducts, cartItems, removeFromCart,getTotalAmount } = useContext(ShopContext);
  const getAmount =getTotalAmount()
  return (
    <div>
    {getAmount === 0? (
    <div className="h-[60vh] flex justify-center items-center text-4xl text-zinc-800 font-bold">
        Your Cart is Empty
    </div>):
    (<div className="my-10 mx-4 lg:my-24 lg:mx-40">
      <div className="grid grid-cols-[0.5fr_1.5fr_1fr_1fr_1fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-10 py-5 text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-[#e2e2e2] border-none"/>
      {allProducts.map((e,i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-10 py-5 text-[#454545] text-base font-medium ">
                <img src={e.image} alt="" className="h-14" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-16 h-12 border-2 border-[#ebebeb] bg-[#fff]">
                    {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                className="w-4 mx-4 cursor-pointer"/>
              </div>
              <hr />
            </div>
          );
        } else {
            return null
        }
      })}
      <div className="flex my-24">
        <div className="flex-1 flex flex-col mr-8 lg:mr-48 gap-10">
            <h1>Cart Totals</h1>
            <div>
                <div className="flex justify-between py-3">
                    <p>Subtotal</p>
                    <p>${getAmount}</p>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between py-3">
                    <h3>Total</h3>
                    <p>${getAmount}</p>
                </div>
            </div>
            <button className="w-64 h-12 outline-none border-none bg-[#ff5a5a] text-[#fff] text-base font-semibold cursor-pointer">
                PROCEED TO CHECKOUT
            </button>
        </div>
        <div className="flex-1 text-base font-medium">
            <p className="text-[#555]">If you have a promo code, Enter it here</p>
            <div className="w-72 lg:w-[30rem] mt-4 pl-5 h-12 flex bg-[#eaeaea]">
                <input type="text" placeholder="Promo code"
                className="border-none outline-none bg-transparent text-base w-42 lg:w-[20rem] h-12"/>
                <button className="lg:w-40 w-20 h-12 text-base bg-black text-white cursor-pointer">
                    Submit
                </button>
            </div>
        </div>
      </div>
    </div>)}
    </div>
  )
};

export default CartItems;
