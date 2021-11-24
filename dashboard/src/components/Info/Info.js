import "./Info.css"

export default function Info() {
    return (
        <div className="info">

            <div className="containerWidget">
                <div className="widget1">
                    <div className="img">
                        <img src="paqueta.jpeg" width="200px" height="200px"></img>
                    </div>
                    <div className="infoPlayer">
                        <h3>Lucas Paqueta</h3>
                        <ul>
                            <li>Lyon</li>
                            <li>Brazil</li>
                            <li>1m80</li>
                            <li>72kg</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="containerWidget">
                <div className="widget2">
                    <h4 className="titre">Equipe Actuelle</h4>
                    
                    <div className="logo">
                        <img src="ol.png" width="150px" height="150px"></img>

                    </div>

                </div>
            </div>

            <div className="containerWidget">
                <div className="widget2">
                    <h4 className="titre">Séléction Actuelle</h4>
                    
                    <div className="logo">
                        <img src="brésil.png" width="250px" height="150px"></img>

                    </div>

                </div>
            </div>

            


            
        </div>
    )
}
