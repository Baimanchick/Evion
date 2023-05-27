import React from 'react'
import { Outlet } from 'react-router-dom'
import ESGNavbar from '../components/ESGNavbar'

function ESGLayout() {
  return (
    <div>
        <ESGNavbar/>
        <Outlet/>
    </div>
  )
}

export default ESGLayout