import React from 'react'
import Index from '../Home'
import Detail from '../Detail/Detail'
import {Route, Routes} from 'react-router-dom'
import Cart from '../cart/cart'
import Checkout from '../checkout/Checkout'
import Contact from '../Contact/Contact'
import Shop from '../Shop/Shop'

function Show() {
  return (
   <>
   <Routes>
   <Route path='/' element={<Index/>}/>
    <Route path='/detail' element={<Detail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/shop" element={<Shop/>}/>
   </Routes>
   </>
  )
}

export default Show
