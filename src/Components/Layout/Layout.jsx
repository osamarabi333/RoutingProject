import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TitleUpdater from '../TitleUpdater/TitleUpdater'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <TitleUpdater/>
    <div className="">
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
