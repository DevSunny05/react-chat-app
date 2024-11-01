import React from "react";
import "./LeftSidebar.css";
import assets from "../../assets/assets";

const LeftSidebar = () => {
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img className="logo" src={assets.logo} alt="" />
          <div className="menu">
            <img className="" src={assets.menu_icon} alt="" />
            <div className="sub_menu">
                <p>Edit Profile</p>
                <hr />
                <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="ls-serach">
          <img src={assets.search_icon} alt="" />
          <input type="text" placeholder="Enter here" />
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
