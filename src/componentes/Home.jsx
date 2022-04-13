import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
  return (
    <div className="d-flex flex-column container fullscreen">
        <Header></Header>
        <main className="flex-grow-1">
            <Outlet />
        </main>
        <Footer></Footer>
    </div>
  )
}
