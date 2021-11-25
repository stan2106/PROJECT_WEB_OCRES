import "./InfoClub.css"

export default function InfoClub() {
    return (
        <div className="general">

            <div className="info">

                <div className="containerWidget">
                        <div className="widget2">
                            <h4 className="titre"> Olympique Lyonnais</h4>
                            
                            <div className="logo">
                                <img src="OL/ol.png" width="170px" height="170px"></img>

                            </div>

                        </div>
                </div>


                <div className="containerWidget">
                        <div className="widget2">
                            <h4 className="titre">Maillots actuels </h4>
                            
                            <div className="logo">
                                <img src="OL/ol1.png" width="150px" height="150px"></img>
                                <img src="OL/ol2.png" width="150px" height="150px"></img>


                            </div>

                           

                        </div>
                </div>


                    
                    

            </div>

            <div className="containerWidget">
                <div className="widget2">
                    <h4 className="titre">Classement actuel</h4>
                                
                    <div className="logo">
                    <img src="classement.png" width="450px" height="300px"></img>
                    </div>

                </div>
                   
            </div>


    </div>
)
        
        
    
}
