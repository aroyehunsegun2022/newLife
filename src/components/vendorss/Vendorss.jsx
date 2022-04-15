import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import "./vendorss.css" 

const Vendorss = (props) => {
  return (
    <div className='er__sponsors'>
        <h4>{props.title}</h4>
        <div className='er__sponsors-list'>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list1}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list2}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list3}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list4}</p>
            <p><CircleIcon sx={{ fontSize: 12 }} /> {props.list5}</p>
        </div>
       <a href='https://docs.google.com/forms/d/e/1FAIpQLSdsoQcGspmd0kVKqUIkldqocFFjIOL1uU63F9a6d9R3nXTLrQ/viewform?embedded=true' className='linkk'>Partner</a>
    </div>
  ) 
}
export default Vendorss

