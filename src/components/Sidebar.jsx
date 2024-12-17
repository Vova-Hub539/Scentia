import React from "react";
import SidebarButton from "./SidebarButton";
import { aitools, overview } from "../assets/svg";
import logo from "./../assets/logo.png"

const Sidebar = () => {
    return <div className="sidebar border">
        <div className="sidebar-logo">
            <img src={logo}></img>
        </div>
        <SidebarButton name={'AI Tools'} icon={overview} active={false} />
        <SidebarButton name={'Overview'} icon={aitools} active={true} />
    </div>
}

export default Sidebar;