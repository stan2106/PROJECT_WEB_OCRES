import "./InfoCoupe.css"

export default function InfoCoupe() {
    return (
    <div className="general">

        <div className="info3">

            <div className="containerWidget4">
                <div className="widget2">
                    <h2 className="titre">Ligue des champions</h2>         
                    <div className="logocoupe">
                        <img src="coupeldc.png" alt="" width="150px" height="150px"></img>
                        &emsp;&emsp;&emsp;
                        <img src="ldc1.png" alt="" width="150px" height="150px"></img>
                    </div>
                </div>
            </div>

            <div className="containerWidget4">
                <div className="widget3">
                    <h2 className="titre">Historique</h2>
                    La Ligue des champions de l'UEFA (UEFA Champions League), parfois abrégée en C1 et anciennement 
                    dénommée Coupe des clubs champions européens (de sa création en 1955 jusqu'en 1992), est une 
                    compétition annuelle de football organisée par l'Union des associations européennes de football 
                    (UEFA) et regroupant les meilleurs clubs du continent européennote. C'est la compétition interclubs 
                    de football la plus prestigieuse d'Europe devant la Ligue Europa.
                </div>
            </div>

        </div>

        <div className="widget8">
            <h2 className="titre">Équipes les plus titrées<br></br></h2>
            <div className="ligne1">
                <img src="ekip/real.png" alt="" width="140px" height="140px"></img>
                &emsp;&emsp;
                <img src="ekip/milan.png" alt="" width="140px" height="140px"></img>
                &emsp;&emsp;
                <img src="ekip/liverpool.png" alt="" width="140px" height="140px"></img>
                &emsp;&emsp;&emsp;
                <img src="ekip/bayern.png" alt="" width="140px" height="140px"></img>
                &emsp;&emsp;&emsp;&emsp;
                <img src="ekip/barcelone.png" alt="" width="140px" height="140px"></img>
                <br></br>
                <br></br>

            </div>
            
            <div className="ligne15">
                13 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                7 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                6 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
                6 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                5
            </div>

            <br></br>
            <br></br>
            
            <div className="ligne2">
                <h2>Tenant du titre<br></br></h2>
                <img src="ekip/chelsea.png" alt="" width="140px" height="140px"></img>
            </div>
            
            <div className="ligne3">
                <h2>Meilleur buteur<br></br></h2>
                <img src="cr7.png" alt="" width="140px" height="140px"></img>
                141 BUTS
            </div>
            
        </div>

        <br></br>

    </div>
)
}