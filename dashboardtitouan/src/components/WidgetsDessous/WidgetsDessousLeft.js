import "./WidgetsDessousLeft.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';



export default function WidgetsDessousLeft({data,dataKey}) {
    return (
        <div className="WidgetsDessousLeft">
            <div className="charts">

            <RadarChart height={230} width={230} outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey={dataKey} stroke="black" 
                fill="grey" fillOpacity={0.4} />
            </RadarChart>

            </div>
            

        </div>
        
    )
};

