import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignUp from './Pages/LoginSignUp';
import { useState } from 'react';
import Footer from './Components/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  const [menu,setMenu] = useState(false)

  return (
    <div className=''>
      <BrowserRouter>
        <Navbar menu={menu} setMenu={setMenu}/>
        <Routes>
          <Route path='/' element={<Shop menu={menu}/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} menu={menu} category='Men'/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} menu={menu} category='Women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} menu={menu} category='Kid'/>}/>
          <Route path='/product' element={<Product menu={menu}/>}>
          <Route path=':productId' element={<Product menu={menu}/>}/>
          </Route>
          <Route path='/cart' element={<Cart menu={menu}/>}/>
          <Route path='/login' element={<LoginSignUp menu={menu}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
