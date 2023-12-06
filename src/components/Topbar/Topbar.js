import React from "react";
import "./Topbar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
           <p className="logo">Admin Dashboard</p>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
            <NotificationsNoneOutlinedIcon fontSize="large"/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <LanguageIcon fontSize="large"/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <SettingsIcon fontSize="large"/>
            </div>
            <img src="/images/profile1.png" alt="" className="profileImage"/>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
