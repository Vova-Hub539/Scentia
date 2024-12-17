import React from "react";

const SidebarButton = ({ name, icon, active }) => {
    return <div className={`sidebar-button ${active ? 'active' : 'inactive'}`}>
        <div className="sidebar-button-icon">{icon}</div>
        <div className="sidebar-button-text">{name}</div>
    </div>
}

export default SidebarButton;