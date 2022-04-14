import React from 'react'
import MyVideo from "../../assets/video.MP4"
import { Navbar } from "../../components"
import "./herocontainer.css"

const Herocontainer = () => {
  return (
    <div className='life__herocontainer'>
      <Navbar />
      <div className='life__herocontainer-inner'>
      <video width="100%" height="100%"  preload='auto' autoPlay= 'true'>
        <source src={MyVideo} type="video/mp4" />
      </video>
        {/* <h1>EXPERIENCE LIFE</h1> */}
        {/* <div className='big-circle'> */}
          {/* <PlayCircleIcon sx={{ fontSize: 40, color:'#F9175B' }} /> */}
          {/* <div className='small-circle'></div> */}
        {/* </div> */}
    </div>
    </div>
  )
} 

export default Herocontainer