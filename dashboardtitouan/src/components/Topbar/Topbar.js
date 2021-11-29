import React from "react";
import "./Topbar.css"


export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarwrapper">

                <div className="topleft">
                    <a href="/"> <img src ="fs.png" width="40px" height="40px"></img> </a>
                </div>  

                <div>            
                    <a className="topcenter" href="/"> FootballStats </a>
                </div>

                
                <div className="topright">
                    <a href="https://www.instagram.com/championsleague/"> <img src ="insta.png" width="40" height="40"></img> &ensp; </a>
                    <a href="https://twitter.com/UEFAcom_fr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"> <img src ="twitter.png" width="40" height="40"></img> &ensp; </a>
                    <a href="https://www.facebook.com/ChampionsLeague/"> <img src ="fb.png" width="40" height="40"></img> &ensp; </a>
                </div>   
                
            </div>
        </div>
    )
}