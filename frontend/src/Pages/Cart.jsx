import CartItems from "../Components/CartItems"

const Cart = ({menu}) => {
  return (
    <div className={`${menu?'pl-16 ':''} `}>
        <CartItems/>
    </div>
  )
}

export default Cart