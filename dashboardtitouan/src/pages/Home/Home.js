import "./Home.css"
import Info from "../../components/Info/Info";
import Chart from "../../components/Chart/Chart";
import { PlayerData } from "../../DataGraphe";
import { StatData } from "../../DataCamembert";
import CallApi from "../../components/Info/Info";




var Home = (id) => {
    return (
        <div className="home">

            <CallApi data={StatData} dataKey="stats" id={3754}/>
            <Chart data={PlayerData} title="Prix sur le marché des transferts (en millions d'euros)"  dataKey="Prix (en millions d'euros)" />

        </div>
    )
}

export default Home;