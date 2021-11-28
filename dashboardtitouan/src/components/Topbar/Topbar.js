import React from "react";
import "./Topbar.css"


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topleft">
                    <a href="/"> <img src ="fs.png" alt="" className="fs"></img> </a>
                </div>  

                <div className="topcenter">
                    <span className="titre">
                        <a className ="navlink" href="/"> FootballStats </a>
                    </span>
                </div>

                <div className="topright">
                    <a className ="navlink2" href="/"> Contact </a>
                </div>    
            </div>
        </div>
    )
}