import "./Home.css"
import Info from "../../components/Info/Info";
import Chart from "../../components/Chart/Chart";
import { PlayerData } from "../../DataGraphe";
import { StatData } from "../../DataCamembert";
import CallApi from "../../components/Info/Info";
import { useParams } from "react-router";



var Home = (id) => {
    var { id } = useParams();
    return (
        <div className="home">


            <CallApi data={StatData} dataKey="stats" id={id}/>
            <Chart data={PlayerData} title="Prix sur le marché des transferts (en millions d'euros)"  dataKey="Prix (en millions d'euros)" />

        </div>
    )
}

export default Home;