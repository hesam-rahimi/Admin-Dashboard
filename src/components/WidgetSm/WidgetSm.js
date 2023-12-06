import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "./../../datas";
const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li className="widgetSmListItem" key={user.id}>
            <div className="widgetSmUser">
              <div style={{ flex: .5 }}>
                <img src={user.img} alt="" className="widgetSmUserImg" />
              </div>
              <div className="widgetSmUserDetail">
                <span className="widgetSmUserName">{user.username}</span>
                <span className="widgetSmUserTitle">{user.title}</span>
              </div>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              <span className="widgetSmDisplay">Display</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
