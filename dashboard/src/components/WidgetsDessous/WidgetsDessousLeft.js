import "./WidgetsDessousLeft.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';



export default function WidgetsDessousLeft({data,dataKey}) {
    return (
        <div className="WidgetsDessousLeft">
            <div className="charts">

            <RadarChart height={400} width={400} outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey={dataKey} stroke="blue" 
                fill="blue" fillOpacity={0.5} />
            </RadarChart>

            </div>
            

        </div>
        
    )
};
