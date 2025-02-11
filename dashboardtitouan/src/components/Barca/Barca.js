import "./Barca.css"


export default function Barca() {
    return (

    <div className="Barca">

        <div className="info">

                <div className="containerWidget">
                            <div className="widget2">
                                <h2 className="titre">FC Barcelone</h2>
                            
                                
                                <div className="logo">
                                    <img src="ekip/barcelone.png" width="150px" height="150px"></img>
                                    <br></br>
                                    <div className="Fondation">1900</div>
                                </div>
                                <div className="maillots">
                                    <img src="Maillots/BarcaDom.png" width="150px" height="150px"></img>
                                    <img src="Maillots/BarcaExt.png" width="150px" height="150px"></img>
                                </div>

                            </div>
                </div>


                <div className="containerWidget">
                        <div className="widget2">
                            <h2 className="titre"> FC Barcelone en Liga</h2>
                            <br></br>

                            <div className="InfoTeamBoss">

                                <div className="InfosTeam">

                                    Nombre de matchs joués : 12<br></br> <br></br>
                                    Nombre de matchs gagnés : 6 <br></br> <br></br>
                                    Nombres de matchs nuls : 2<br></br> <br></br>
                                    Nombre de matchs perdus : 4 <br></br> <br></br>

                                </div> 

                                <div className="InfosTeam">

                                    Points : 18 <br></br> <br></br>
                                    Buts pour : 20<br></br> <br></br>
                                    Buts contre :10 <br></br> <br></br>
                                    Différence : 10

                                </div>

                            </div>

                            <div className="position"> Classement en Liga : 7ème</div>
                                
                                
                                

                            
                            <div className="ldc">
                                
                            </div>
                        </div>
                </div>
                


                    
                    
        </div>

        <div className="widget10">
            <h2 className="titre">Camp Nou</h2>

            <div className="info_stade"> Adresse : C. d'Arístides Maillol, 12, 08028 Barcelona</div>
            <div className="info_stade">  WebSite :  <a href="https://www.fcbarcelona.fr/fr/">https://www.fcbarcelona.fr/fr/</a></div>
            <div className="info_stade">  Phone :  +34 902 18 99 00</div>
            <div className="info_stade">  E-mail:  <a href="https://www.fcbarcelona.fr/fr/club/contact">service@fcbarca.com</a></div>


           

            <br></br>

            <div className="stade">

                <div className="vue_exterieur">
                    <img className="img"src="stades/barca1.jpeg" width="330px" height="200px"></img>
                </div>

                <div className="vue_interieur">
                    <img className="img"src="stades/barca2.jpeg" width="330px" height="200px"></img>
                </div>
                
            </div>

        </div>

        <div className="widget6">

                        <h2 className="titre">Composition d'équipe <br></br></h2>
                        <div className="G">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Ter Stegen</a>
                        </div>

                        <div className="DG">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Alba</a>
                        </div>   
                        <div className="DC1">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Umtiti</a>
                        </div>    
                        <div className="DC2">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Piqué</a>
                        </div>   
                        <div className="DD">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Dest</a>                    
                        </div>   

                        <div className="MG">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Pedri</a>
                        </div>   
                        <div className="MC">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Busquets</a>
                        </div>   
                        <div className="MD">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>De Jong</a>
                        </div>   

                        <div className="AG">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Coutinho</a>
                        </div>   
                        <div className="BU">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Depay</a>
                        </div>   
                        <div className="AD">
                            <a className="navlinkk" > <img src="man.png" width="60px" height="60px"></img><br></br>Dembélé</a>
                        </div>  

                        <div className="coach">
                            <img src="man.png" width="60px" height="60px"></img><br></br> Xavi
                        </div>

                   
     </div>


    </div>
)

}