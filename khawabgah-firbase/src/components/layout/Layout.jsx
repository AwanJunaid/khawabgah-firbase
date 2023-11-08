import React from 'react'
import NaBbar from '../navbar/NavBar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
        <NaBbar/>
        <div className="content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
