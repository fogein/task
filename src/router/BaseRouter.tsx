import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContainer } from '../components/auth-component/AuthContainer'
import { Main } from '../components/main/main'
import { StoreContainer } from '../components/main/storeContainer/storeContainer'
import { Menu } from '../components/menu/menu'

export const BaseRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<AuthContainer/>} />
    <Route path='/store' element={<StoreContainer menu={<Menu/>} header={<Header/>} />} />
    <Route path='/' element={<Main menu={<Menu/>} header={<Header/>} />} />

    </Routes>
    
    </BrowserRouter>
  )
}
