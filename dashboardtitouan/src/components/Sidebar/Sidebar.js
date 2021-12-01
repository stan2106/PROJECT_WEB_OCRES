import React from "react";
import "./Sidebar.css"



export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarTitle">
                    <a href="/" className="menu"> MENU</a>
                </div>
                
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
                                <li className="Categories">Allemagne :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Bayern Munich</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Borussia Dortmund</a></li>
                                <li className="Categories">Angleterre :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Chelsea</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Liverpool</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Manchester City</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Manchester United</a></li>
                                <li className="Categories">Espagne :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Athlético Madrid</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">FC Barcelone</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Real Madrid</a></li>
                                <li className="Categories">France :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Olympique Lyonnais</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Paris Saint-Germain</a></li>
                                <li className="Categories">Italie :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">A.C. Milan</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Inter Milan</a></li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/Clubs">Juventus</a></li>



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

                                <li className="Categories">Gardien :</li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li> 

                                <li className="Categories">Défenseurs :</li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>

                                <li className="Categories">Milieux de terrain :</li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>

                                <li className="Categories">Attaquants :</li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX </a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">XXX</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">Mohamed Salah</a></li>



                            </ul>
                           
                        </li>

                        <li className="sidebarListItems1">
                            <div className="items1">
                                <span className="logoContainer">
                                    <img src="ldccc.png" height="40px" width="40px"></img> 
                                </span>
                                <p className="titreItems"> Compétitions 
                                   <span>&#9660;</span>
                                </p>
                            </div>
                            <ul className="sousliste">
                                <li className="ItemsSousListe"><a className="nav-link" href="/coupe">C1</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/coupe">C2</a></li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/coupe">C3</a></li>
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
