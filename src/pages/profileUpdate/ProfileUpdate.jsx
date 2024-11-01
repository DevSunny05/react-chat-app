import React, { useEffect, useState } from 'react'
import "./ProfileUpdate.css"
import assets from '../../assets/assets'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../../config/firebase'

const ProfileUpdate = () => {

    const [image,setImage]=useState(false)
    const [name,setName]=useState("")
    const [bio,setBio]=useState("")
    const [uid,setUid]=useState("")
    const [prevImage,setPrevImage]=useState("")

    const navigate=useNavigate()

    useEffect(()=>{
        onAuthStateChanged(auth,async(user)=>{
            if(user){
                setUid(user.uid)
                const docRef=doc(db,"users",user.uid)
                const docSnap=await getDoc(docRef)

                if(docSnap.data().name){
                    setName(docSnap.data().name)
                }

                if(docSnap.data().bio){
                    setBio(docSnap.data().bio)
                }

                if(docSnap.data().avatar){
                    setPrevImage(docSnap.data().avatar)
                }
            }else{
                navigate("/")
            }
        })
    },[])
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

                <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Your name' />
                <textarea onChange={(e)=>setBio(e.target.value)} value={bio}  placeholder='Write profile bio' />
                <button type='submit'>Save</button>
            </form>
            <img className='logo' src={image?URL.createObjectURL(image) : assets.logo_icon} alt="" />
        </div>
        
    </div>
  )
}

export default ProfileUpdate