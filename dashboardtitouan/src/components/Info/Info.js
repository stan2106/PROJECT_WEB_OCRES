import "./Info.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';

export default function Info({data,dataKey}) {
    return (
        <div className="info2">

            <div className="containerWidget2">
            <div className="titrewidget">Mohamed Salah</div>
                <div className="widget1">
                    <div className="profil">
                        <img src="Liverpool/salah.png" width="180px" height="180px"></img>
                    </div>
                    <div className="ecusson">
                        AD
                        <br></br>
                        <br></br>
                        29 ans
                        <br></br>
                        <img src="Pays/egypte.png" width="60px" height="60px"></img>
                        <br></br>
                        <img src="Liverpool/logo.png" width="60px" height="60px"></img>
                    </div>

                </div>
            </div>

            <div className="containerWidget2">

                <div className="charts">

                    <RadarChart height={270} width={270} outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis/>
                    <Radar dataKey={dataKey} stroke="black" 
                        fill="red" fillOpacity={0.4}/>
                    </RadarChart>

                </div>


            </div>

            <div className="containerWidget2">
                <div className="widget2">
                    <div className="titrewidget">Statistiques (saison en cours)</div>                    
                        <br></br>
                        <br></br>
                        Matches joués : 18
                        <br></br>
                        <br></br>
                        Buts : 17
                        <br></br>
                        <br></br>
                        Passes décisives : 7
                </div>

            </div>
        </div>

            


            
    )
}
