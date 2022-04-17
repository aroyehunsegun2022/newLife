import React from 'react'
import Vendorss from '../../components/vendorss/Vendorss'
import { Sponsors } from "../../components"
import "./partnerwithlife.css"
 
const Partnerwithlife = () => {
  return (
    <div className='er__partnerwithlife'>
        <h1>PARTNER WITH LIFE</h1>
        <div className='sponsor-vendor'>
            <Sponsors title='SPONSORS' list1='Naming rights to the LIFE Festival.' list2='High-value brand visibility and awareness.'
                list3='Activation opportunities - convert prospects into customers.' list4='Showcase brand as a proponent of the Nigerian culture and heritage.' list5='Take advantage of LIFE sponsor rights and privileges' />
            <Vendorss title='VENDORS' list1='Showcase your brand, products and services.' list2='Access a pool of over 5000 potential customers.'
                list3='Boost revenue significantly over a 3-day period.' list4='Experience high-value brand visibility.' list5='Take advantage of LIFE vendor rights and privileges.' />
        </div>
        
    </div>
  )
}

export default Partnerwithlife