import React, { useState } from 'react'
import "./ProfileUpdate.css"
import assets from '../../assets/assets'

const ProfileUpdate = () => {

    const [image,setImage]=useState(false)
  return (
    <div className='profile'>
        <div className='container'>
            <form>
                <h3>Profile Details</h3>
                <label htmlFor="profile_data">
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" accept='.jpg ,.png, .jpeg' id='profile_data' hidden />
                    <img src={image?URL.createObjectURL(image): assets.avatar_icon} alt="" />
                   upload profile image
                </label>

                <input type="text" placeholder='Your name' />
                <textarea  placeholder='Write profile bio' />
                <button type='submit'>Save</button>
            </form>
            <img className='logo' src={image?URL.createObjectURL(image) : assets.logo_icon} alt="" />
        </div>
        
    </div>
  )
}

export default ProfileUpdate