import React from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Header from './Component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Collection from './Component/Collection'
import Bed from './Component/Bed'
import Sofa from './Component/Sofa'
import Table from './Component/Table'
import Chair from './Component/Chair'
import Wardrobe from './Component/Wardrobe'
import ProductView from './Component/ProductView'
import LoginForm from './Component/LoginForm'
import SignUp from './Component/SignUp'
import { UserContextProvider } from './Component/UserContextProvider'
import Search from './Component/Search'
import Cart from './Component/Cart'
import AdminLogin from './Component/AdminLogin'
import AdminView from './Component/AdminView'


function App() {

  return (
    <>
      <UserContextProvider>
      <Header/>



      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Collection' element={<Collection/>}/>
        <Route path='/bed' element={<Bed/>}/>
        <Route path='/sofa' element={<Sofa/>}/>
        <Route path='/table' element={<Table/>}/>
        <Route path='/chair' element={<Chair/>}/>
        <Route path='/wardrobe' element={<Wardrobe/>}/>
        <Route path='/:id' element={<ProductView/>}/>
        <Route path='loginform' element={<LoginForm/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='/search/:term' element={<Search/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Adminlogin' element={<AdminLogin/>}/>
        <Route path='/Adminview' element={<AdminView/>}/>
      </Routes>

      
      </UserContextProvider>

      <Footer/>

    </>
  )
}

export default App
