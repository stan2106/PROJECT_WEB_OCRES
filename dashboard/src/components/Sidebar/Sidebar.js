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
                                <li className="Categories">Allemagne :</li>
                                <li className="ItemsSousListe">Bayern Munich</li>
                                <li className="ItemsSousListe">Borussia Dortmund</li>
                                <li className="Categories">Angleterre :</li>
                                <li className="ItemsSousListe">Chelsea</li>
                                <li className="ItemsSousListe">Liverpool</li>
                                <li className="ItemsSousListe">Manchester City</li>
                                <li className="ItemsSousListe">Manchester United</li>
                                <li className="Categories">Espagne :</li>
                                <li className="ItemsSousListe">Athlético Madrid</li>
                                <li className="ItemsSousListe">Barcelone</li>
                                <li className="ItemsSousListe"> </li>
                                <li className="Categories">France :</li>
                                <li className="ItemsSousListe"> <a className="nav-link" href="/clubs"> Olympique Lyonnais</a></li>
                                <li className="ItemsSousListe">Paris Saint-Germain</li>
                                <li className="Categories">Italie :</li>
                                <li className="ItemsSousListe">A.C. Milan</li>
                                <li className="ItemsSousListe">Inter Milan</li>
                                <li className="ItemsSousListe">Juventus</li>



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
                                <li className="ItemsSousListe">Anthony Lopes</li>
                            
                                <li className="Categories">Défenseurs :</li>
                                <li className="ItemsSousListe">Léo Dubois</li>
                                <li className="ItemsSousListe">Jerome Boateng</li>
                                <li className="ItemsSousListe">Jason Denayer</li>
                                <li className="ItemsSousListe">Emerson</li>


                                <li className="Categories">Milieux de terrain :</li>
                                <li className="ItemsSousListe">Houssem Aouar</li>
                                <li className="ItemsSousListe">Maxence Caqueret</li>
                                <li className="ItemsSousListe">Bruno Guimares</li>

                                <li className="Categories">Attaquants :</li>
                                <li className="ItemsSousListe"><a className="nav-link" href="/Player">Lucas Paqueta </a></li>
                                <li className="ItemsSousListe">Karl Toko Ekambi</li>
                                <li className="ItemsSousListe">Moussa Dembele</li>



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
