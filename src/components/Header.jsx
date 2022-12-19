import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />
      {/* Search Box */}
      <div className="header-right">
        <div className="location-search-container">
          <div className="location-box">
            <div className="location-icon-name">
              <i className="fa-solid fa-location-dot center location-icon"></i>

              <div>Kolkata</div>
            </div>
            <i class="fa-solid fa-caret-down center"></i>
          </div>
          <div className="seperator"></div>
          <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass center search-icon"></i>
          <input type="text" placeholder="Search for resturant cuisine and dish" className ="search-input" />
          </div>

        </div>
        <div className="profile-wrapper">
          <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
className="profile-image" alt="profile" />
<span className="username">Shubh</span>
<i className="fa-solid fa-angle-down center profile-option-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
