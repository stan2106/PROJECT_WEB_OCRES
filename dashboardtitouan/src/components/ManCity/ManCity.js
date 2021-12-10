import "./ManCity.css"


export default function ManCity() {
    return (

    <div className="ManCity">

        <div className="info">

                <div className="containerWidget">
                            <div className="widget2">
                                <h2 className="titre">Manchester City</h2>
                            
                                
                                <div className="logo">
                                    <img src="ekip/mancity.png" width="150px" height="150px"></img>
                                    <br></br>
                                    <div className="Fondation">1880</div>
                                </div>
                                <div className="maillots">
                                    <img src="Liverpool/maillot1.png" width="150px" height="150px"></img>
                                    <img src="Liverpool/maillot2.png" width="150px" height="150px"></img>
                                </div>

                            </div>
                </div>


                <div className="containerWidget">
                        <div className="widget2">
                            <h2 className="titre"> Manchester City en Premier League</h2>
                            <br></br>

                            <div className="InfoTeamBoss">

                                <div className="InfosTeam">

                                    Nombre de matchs joués : <br></br> <br></br>
                                    Nombre de matchs gagnés : <br></br> <br></br>
                                    Nombres de matchs nuls : <br></br> <br></br>
                                    Nombre de matchs perdus : <br></br> <br></br>

                                </div> 

                                <div className="InfosTeam">

                                    Points : <br></br> <br></br>
                                    Buts pour : <br></br> <br></br>
                                    Buts contre : <br></br> <br></br>
                                    Différence : 

                                </div>

                            </div>

                            <div className="position"> Classement en PL : 1er</div>
                                
                                
                                

                            
                            <div className="ldc">
                                
                            </div>
                        </div>
                </div>
                


                    
                    
        </div>

        <div className="widget10">
            <h2 className="titre">Etihad Stadium</h2>

            <div className="info_stade"> Adresse : Ashton New Rd, Manchester M11 3FF</div>
            <div className="info_stade">  WebSite :  <a href="https://fr.mancity.com/">https://fr.mancity.com/</a></div>
            <div className="info_stade">  Phone :  +44 161 444 1894</div>
            <div className="info_stade">  E-mail:  <a href="https://www.mancity.com/contact-us">service@mancity.com</a></div>


           

            <br></br>

            <div className="stade">

                <div className="vue_exterieur">
                    <img className="img"src="stades/mancity1.jpeg" width="330px" height="200px"></img>
                </div>

                <div className="vue_interieur">
                    <img className="img"src="stades/mancity2.jpeg" width="330px" height="200px"></img>
                </div>
                
            </div>

        </div>

        <div className="widget6">

                        <h2 className="titre">Composition d'équipe <br></br></h2>
                        <div className="G">
                            <a className="navlinkk" href="/Player/1795"> <img src="man.png" width="60px" height="60px"></img><br></br>Ederson</a>
                        </div>

                        <div className="DG">
                            <a className="navlinkk" href="/Player/7868"> <img src="man.png" width="60px" height="60px"></img><br></br>Cancelo</a>
                        </div>   
                        <div className="DC1">
                            <a className="navlinkk" href="/Player/7862"> <img src="man.png" width="60px" height="60px"></img><br></br>Laporte</a>
                        </div>    
                        <div className="DC2">
                            <a className="navlinkk" href="/Player/7869"> <img src="man.png" width="60px" height="60px"></img><br></br>Dias</a>
                        </div>   
                        <div className="DD">
                            <a className="navlinkk" href="/Player/7867"> <img src="man.png" width="60px" height="60px"></img><br></br>Walker</a>                    
                        </div>   

                        <div className="MG">
                            <a className="navlinkk" href="/Player/356"> <img src="man.png" width="60px" height="60px"></img><br></br>De Bruyne</a>
                        </div>   
                        <div className="MC">
                            <a className="navlinkk" href="/Player/8749"> <img src="man.png" width="60px" height="60px"></img><br></br>Rodri</a>
                        </div>   
                        <div className="MD">
                            <a className="navlinkk" href="/Player/3320"> <img src="man.png" width="60px" height="60px"></img><br></br>Gundogan</a>
                        </div>   

                        <div className="AG">
                            <a className="navlinkk" href="/Player/3626"> <img src="man.png" width="60px" height="60px"></img><br></br>Foden</a>
                        </div>   
                        <div className="BU">
                            <a className="navlinkk" href="/Player/3233"> <img src="man.png" width="60px" height="60px"></img><br></br>Silva</a>
                        </div>   
                        <div className="AD">
                            <a className="navlinkk" href="/Player/3754"> <img src="man.png" width="60px" height="60px"></img><br></br>Mahrez</a>
                        </div>  

                        <div className="coach">
                            <img src="man.png" width="60px" height="60px"></img><br></br> Guardiola
                        </div>

                   
     </div>


    </div>
)

}