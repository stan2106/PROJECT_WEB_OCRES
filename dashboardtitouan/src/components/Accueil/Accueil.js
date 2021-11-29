import React from 'react'
import "./Accueil.css" 


export default function Accueil() {
    return (
        <div className = "fond">
            <div className="welcome">
                    Bienvenue sur FootballStats
            </div>
            <div className="soustitre">
                <br></br>
                <img src ="ldc2.png" className="ldc2" width="40px" height="40px"></img>
                &emsp;L'essentiel des statistiques concernant les meilleurs joueurs du monde et les meilleures équipes européennes.&emsp;
                <img src ="ldc2.png" className="ldc2" width="40px" height="40px"></img>
            </div>

                <br></br>
                <br></br>
                <br></br>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/X3Zs-HZczUM?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>

            <div class="conteneur1">
                <div class="d1"></div>
            </div>



        </div>


    )
}
