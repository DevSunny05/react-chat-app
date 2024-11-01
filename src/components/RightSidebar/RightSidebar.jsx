import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs'>
        <div className='rs_profile'>
            <img src={assets.profile_img} alt="" />
            <h3>Sarang<img className='dot' src={assets.green_dot} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
            <hr />
        <div className='rs_media'>
            <p>Medis</p>
            <div>
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
                <img src={assets.pic3} alt="" />
                <img src={assets.pic4} alt="" />
                <img src={assets.pic1} alt="" />
                <img src={assets.pic2} alt="" />
            </div>
        </div>

        <button>Click</button>
    </div>
  )
}

export default RightSidebar