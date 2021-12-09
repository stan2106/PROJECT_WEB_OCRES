
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/Home/Home"; 
import Clubs from "./components/Clubs/Clubs";
import {BrowserRouter, Routes, Route , Link } from 'react-router-dom';
import Accueil from "./components/Accueil/Accueil";
import Coupe from "./components/Coupe/Coupe";
import React from "react";
import "./components/Sidebar/Sidebar.css"

const player = [
  {
      name: "Alisson",
      id: "1795"
  },
  {
      name: "Andrew Roberston",
      id: "7868"
  },
  {
      name: "Joe Gomez",
      id: "7862"
  },
  {
      name: "Virgil van Dijk",
      id: "7869"
  },
  {
      name: "Trent Alexander-Arnold",
      id: "7867"
  },
  {
      name: "Thiago Alcantara",
      id: "356"
  },
  {
      name: "Fabinho",
      id: "8749"
  },
  {
      name: "Jordan Henderson",
      id: "3320"
  },
  {
      name: "Sadio Mané",
      id: "3626"
  },
  {
      name: "Roberto Fimino",
      id: "3233"
  },
  {
      name: "Mohamed Salah",
      id: "3754"
  },
]


function App() {
  var test = 0;
  
  return (
  
    <BrowserRouter>
    
      <Topbar />
      <div className="container">
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarTitle">
                    <a href="/" className="menu"> MENU</a>
                </div>
                
                    <ul className="sidebarList">

                        <li className="sidebarListItems1">
                            <div className="items1">
                                <span className="logoContainer">
                                    <img src="../football.png" height="40px" width="40px"></img>
                                    
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
                                <img src="../player.png" height="40px" width="40px"></img>
                            </span>
                            <p className="titreItems"> Players 
                                   <span>&#9660;</span>
                            </p>
                        </div>
                            <ul className="sousliste">

                                <li className="Categories">Gardien :</li>
                               
                                <li className="ItemsSousListe"><Link to={`/Player/${player[0].id}`} className="nav-link" activeClassName="active">{player[0].name}</Link></li>

                                <li className="Categories">Défenseurs :</li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[1].id}`} className="nav-link" activeClassName="active" onClick={test=1}>{player[1].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[2].id}`} className="nav-link" activeClassName="active" onClick={test = 2} >{player[2].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[3].id}`} className="nav-link" activeClassName="active" onClick={test = 3}>{player[3].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[4].id}`} className="nav-link" activeClassName="active" onClick={test = 4}>{player[4].name}</Link></li>

                                <li className="Categories">Milieux de terrain :</li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[5].id}`} className="nav-link" activeClassName="active"onClick={test=5}>{player[5].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[6].id}`} className="nav-link" activeClassName="active"onClick={test=6}>{player[6].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[7].id}`} className="nav-link" activeClassName="active"onClick={test=7}>{player[7].name}</Link></li>

                                <li className="Categories">Attaquants :</li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[8].id}`} className="nav-link" activeClassName="active" onClick={test=8}>{player[8].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[9].id}`} className="nav-link" activeClassName="active" onClick={test=9}>{player[9].name}</Link></li>
                                <li className="ItemsSousListe"><Link to={`/Player/${player[10].id}`} className="nav-link" activeClassName="active" onClick={test=10}>{player[10].name}</Link></li>



                            </ul>
                           
                        </li>

                        <li className="sidebarListItems1">
                            <div className="items1">
                                <span className="logoContainer">
                                    <img src="../ldccc.png" height="40px" width="40px"></img> 
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

                        


                    </ul>
                    

            </div>
            
        </div>
        <Routes>
        
        <Route exact path='/clubs' element={<Clubs/>} />
        <Route exact path='/Player/:id' element={<Home key={test}/>}/>
        
        <Route exact path='/' element={<Accueil/>} /> 
        <Route exact path='/coupe' element={<Coupe/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
