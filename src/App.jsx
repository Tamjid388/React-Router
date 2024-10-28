import { useState } from 'react'

import './App.css'
import DaisyNavbar from './Component/NAV/DaisyNAv'
import Navbar from './Component/NAV/Navbar'
import Priceoption from './Component/PriceOpiton/Priceoption'
import Rechart from './Component/Rechart/Rechart'
import Phones from './Component/Phones/Phones'

function App() {


  return (
    <>
{/* <DaisyNavbar></DaisyNavbar> */}
 <Navbar></Navbar>
     <Priceoption></Priceoption>
     <Rechart></Rechart>
     <Phones></Phones>
    </>
  )
}





export default App
