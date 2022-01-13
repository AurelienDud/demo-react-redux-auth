import React, { FunctionComponent } from "react"
import { Outlet } from "react-router-dom";
import Header from '@src/components/header'
import Footer from '@src/components/footer'

const Layout:FunctionComponent = () => {
  
  return (
    <>
      <Header />
      <div style={{ minHeight: '80vh' }}> 
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout