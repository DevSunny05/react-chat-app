import React, { useContext } from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { AppContext } from "../../context/AppContext";

const LeftSidebar = () => {
    const navigate=useNavigate()
    const {userData}=useContext(AppContext)

    const inputHandler=async(e)=>{
        try {
            const input=e.target.value;
            
            const userRef=collection(db,"users");
            const q=query(userRef,where("username","==",input.toLowerCase()))

            const querySnap=await getDocs(q)

            if(!querySnap.empty && querySnap.docs[0].data().id !== userData.id){
                console.log(querySnap.docs[0].data())
            }
        } catch (error) {
            console.log(error)
        }
    }   

  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          {/* <img className="logo" src={assets.logo} alt="" /> */}
          <h1>Chat App</h1>
          <div className="menu">
            <img className="" src={assets.menu_icon} alt="" />
            <div className="sub_menu">
                <p onClick={()=>navigate("/profile")}>Edit Profile</p>
                <hr />
                <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-serach">
          <img src={assets.search_icon} alt="" />
          <input onChange={inputHandler}  type="text" placeholder="Search here" />
        </div>

      </div>
      <div className="ls-list">
          {Array(12)
            .fill("")
            .map((item, index) => (
              <div key={index} className="friends">
                <img src={assets.avatar_icon} alt="" />
                <div className="">
                  <p>Richard</p>
                  <span>Hello ,How are ypo</span>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default LeftSidebar;
