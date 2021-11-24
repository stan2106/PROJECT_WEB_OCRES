import "./Home.css"
import Info from "../../components/Info/Info";
import Chart from "../../components/Chart/Chart";
import { PlayerData } from "../../DataGraphe";
import { StatData } from "../../DataCamembert";
import WidgetsDessousLeft from "../../components/WidgetsDessous/WidgetsDessousLeft"
import WidgetsDessousRight from "../../components/WidgetsDessous/WidgetsDessousRight";


export default function home() {
    return (
        <div className="home">
            
            <Info />

            <Chart data={PlayerData} title="Market Value"  dataKey="Active Player" />

            <div className="WidgetsDessous">
                
            <WidgetsDessousLeft  className="WidgetsDessousLeft" data={StatData} dataKey="stats"/>
            <WidgetsDessousRight className="WidgetsDessousRight"/>

            </div>

            
        </div>
    )
}
 