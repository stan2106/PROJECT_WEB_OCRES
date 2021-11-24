import React from "react";
import "./Topbar.css"


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">
                        
                        <a className ="nav-link" href="/"> FootballManager </a>
                        
                        </span>
                </div>
                <div className="topright">
                    <img src ="notifications.jpg" alt="" className="notifications"></img>
                    <img src="Photo-ID.jpg" alt="" className="topAvatar"></img>
                
                
                </div>    
            </div>
        </div>
    )
}