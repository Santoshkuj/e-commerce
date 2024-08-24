import { useContext } from 'react'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'
const NewCollections = () => {
  const {newCollection} = useContext(ShopContext)
  return (
    <div className="flex flex-col items-center gap-3 mb-24">
        <h1 className='text-[#171717] text-5xl font-semibold'>NEW COLLECTIONS</h1>
        <hr className='w-52 h-[0.4rem] rounded-xl bg-[#252525]'/>
        <div className="mt-12 flex gap-7 flex-wrap justify-center">
            {newCollection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default NewCollections