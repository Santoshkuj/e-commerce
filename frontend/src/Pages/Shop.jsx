import Hero from "../Components/Hero"
import NewCollections from "../Components/NewCollections"
import NewsLetter from "../Components/NewsLetter"
import Offers from "../Components/Offers"
import Popular from "../Components/Popular"

const Shop = ({menu}) => {
  return (
    <div className={`${menu?'':''} w-full`}>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop