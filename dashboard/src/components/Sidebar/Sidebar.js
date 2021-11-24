import React from "react";
import "./Sidebar.css"



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                    <h3 className="sidebarTitle"> DashBoard </h3>
                    <ul className="sidebarList">

                        <li className="sidebarListItems1">
                            <div className="items1">
                                <span className="logoContainer">
                                    <img src="football.png" height="40px" width="40px"></img>
                                    
                                </span>
                                
                                <p className="titreItems">
                                    
                                    Clubs 
                                   <span>&#9660;</span>
                                </p>
                            </div>

                            <ul className="sousliste">
                                <li className="ItemsSousListe"> <a className="nav-link" href="/clubs">Real Madrid </a></li>
                                <li className="ItemsSousListe">Barcelone</li>
                                <li className="ItemsSousListe">Athlético Madrid</li>
                                <li className="ItemsSousListe">PSG</li>
                                <li className="ItemsSousListe">Lyon</li>
                                <li className="ItemsSousListe">Liverpool</li>
                                <li className="ItemsSousListe">Chelsea</li>
                                <li className="ItemsSousListe">Manchester City</li>
                                <li className="ItemsSousListe">Manchester United</li>
                                <li className="ItemsSousListe">Bayern Munich</li>
                                <li className="ItemsSousListe">Dortmund</li>
                                <li className="ItemsSousListe">Juventus</li>
                                <li className="ItemsSousListe">Inter Milan</li>


                            </ul>
                        
                        </li>

                        <li className="sidebarListItems1">

                        <div className="items1">
                            <span className="logoContainer">
                                <img src="player.png" height="40px" width="40px"></img>
                            </span>
                            <p className="titreItems"> Players 
                                   <span>&#9660;</span>
                            </p>
                        </div>
                            <ul className="sousliste">
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                            </ul>
                           
                        </li>

                        <li className="sidebarListItems1">
                            <div className="items1">
                                <span className="logoContainer">
                                    <img src="statistique.png" height="40px" width="40px"></img> 
                                </span>
                                <p className="titreItems"> Statistiques 
                                   <span>&#9660;</span>
                                </p>
                            </div>
                            <ul className="sousliste">
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                            </ul>
                        </li>

                        <li className="sidebarListItems1">
                            <div className="items1">
                            
                                <span className="logoContainer">
                                    <img src="calendar.png" height="40px" width="40px"></img>
                                </span>
                                <p className="titreItems"> Events 
                                   <span>&#9660;</span>
                                </p>
                            </div>
                            <ul className="sousliste">
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                                <li className="ItemsSousListe">lorem</li>
                            </ul>
                        </li>


                    </ul>
                    

            </div>
            
        </div>
    )
}
