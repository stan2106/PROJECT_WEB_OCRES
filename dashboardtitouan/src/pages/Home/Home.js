import "./Home.css"
import Info from "../../components/Info/Info";
import Chart from "../../components/Chart/Chart";
import { PlayerData } from "../../DataGraphe";
import { StatData } from "../../DataCamembert";




const Home = () => {
    return (
        <div className="home">

            <Info data={StatData} dataKey="stats"/>
            <Chart data={PlayerData} title="Prix sur le marché des transferts (en millions d'euros)"  dataKey="Prix (en millions d'euros)" />

        </div>
    )
}

export default Home;