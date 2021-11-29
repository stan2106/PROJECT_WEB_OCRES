import "./Chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function Chart( {data,title,dataKey}) {


    return (

         <div className="chart">
            <h3 className="title">{title}</h3>

            <ResponsiveContainer width="100%" aspect={4 / 1}> 
                <LineChart data={data}>
                    <XAxis dataKey="Years" stroke="white"/>
                    <YAxis  stroke="white"/>
                    <Line type="monotone" dataKey={dataKey} stroke="red"/>
                    <Tooltip/>
                    <CartesianGrid stroke="white" strokeDasharray="5 5"/>
                    
                </LineChart>
             </ResponsiveContainer>

             <br></br>

            
        </div>
    );
}
  