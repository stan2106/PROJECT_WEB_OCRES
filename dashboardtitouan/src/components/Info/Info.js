import "./Info.css"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Label } from 'recharts';

import React from 'react';

export default class CallApi extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 

			playerName: "",
			playerNationality: "",
			position: "",
			dateOfBirth:"",
		};
	}

	callAPI() {
		var myHeaders = new Headers();
		myHeaders.append("X-Auth-Token","f9475c7dc1df466b965ffe2a72d2f4a7");

		var obj = {
			method: "GET",
			headers: myHeaders,
			mode: "cors",
			cache: "default"
		};
		



		fetch("https://api.football-data.org//v2/players/" + this.props.id, obj)
			.then(res => res.json())
			.then(res => this.setState({ 
				playerName: res.name,
				playerNationality: res.nationality,
				position : res.position,
				dateOfBirth: res.dateOfBirth
		}));
	}

	componentWillMount() {
		this.callAPI();
	}

	render() {
		return (
			<div className="info2">
				<div className="containerWidget2">
					<div className="titrewidget">{this.state.playerName}</div>
						<div className="widget1">
							<div className="profil">
								<img src="../Liverpool/salah.png" width="180px" height="180px"></img>
							</div>
							<div className="ecusson">
							{this.state.position}
								<br></br>
								<br></br>
							{this.state.dateOfBirth}
								<br></br>
								<br></br>
								
								{this.state.playerNationality }
								<br></br>
								<br></br>
								<img src="../Liverpool/logo.png" width="60px" height="60px"></img>
							</div>
						</div>
					</div>
					<div className="containerWidget2">
						<div className="charts">
							<RadarChart height={270} width={270} outerRadius="80%" data={this.props.data}>
							<PolarGrid />
							<PolarAngleAxis dataKey="name" />
							<PolarRadiusAxis/>
							<Radar dataKey={this.props.dataKey} stroke="black" 
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
		);
	}
}