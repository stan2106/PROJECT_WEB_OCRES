import "./InfoClub.css"


import React from 'react';

export default class CallApiClub extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 

			TeamName: "",
            Founded: "",
            Stadium:"",
            Address:"",
            WebSite:"",
            Phone:"",
            email:"",
            
            Player1 : "",
            Player2 : "",
            Player3 : "",
            Player4 : "",
            Player5 : "",
            Player6 : "",
            Player7 : "",
            Player8 : "",
            Player9 : "",
            Player10 : "",
            Player11 : "",
           

		};
	}

	CallApiClub() {
		var myHeaders = new Headers();
		myHeaders.append("X-Auth-Token","f9475c7dc1df466b965ffe2a72d2f4a7");

		var obj = {
			method: "GET",
			headers: myHeaders,
			mode: "cors",
			cache: "default"
		};

		fetch("https://api.football-data.org//v2/teams/" + this.props.id, obj)
			.then(res => res.json())
			.then(res => this.setState({ 
				TeamName: res.name,
                Founded: res.founded,
                Address: res.address,
                Stadium: res.venue,
                WebSite: res.website,
                Phone: res.phone,
                email: res.email,
                
                Player1: res.squad[1].name,
                Player2: res.squad[15].name,
                Player3: res.squad[12].name,
                Player4: res.squad[16].name,
                Player5: res.squad[14].name,
                Player6: res.squad[0].name,
                Player7: res.squad[19].name,
                Player8: res.squad[3].name,
                Player9: res.squad[5].name,
                Player10: res.squad[2].name,
                Player11: res.squad[7].name,
                
		}));
	}

	componentWillMount() {
		this.CallApiClub();
	}

    render(){
    return (
    <div className="general">

        <div className="info">

                <div className="containerWidget">
                            <div className="widget2">
                                <h2 className="titre">{this.state.TeamName}</h2>
                            
                                
                                <div className="logo">
                                    <img src="Liverpool/logo.png" width="150px" height="150px"></img>
                                    <br></br>
                                    <div className="Fondation">{this.state.Founded}</div>
                                </div>
                                <div className="maillots">
                                    <img src="Liverpool/maillot1.png" width="150px" height="150px"></img>
                                    <img src="Liverpool/maillot2.png" width="150px" height="150px"></img>
                                </div>

                            </div>
                </div>


                <div className="containerWidget">
                        <div className="widget2">
                            <h2 className="titre">Palmarès européen</h2>
                            <div className="ldc">
                                <a className="navlinkk" href="/coupe"><img src="coupeldc.png" width="130px" height="130px"></img>X6</a>
                                <a className="navlinkk" href="/coupe"><img src="coupedescoupes.png" width="130px" height="130px"></img>X0</a>
                                <a className="navlinkk" href="/coupe"><img src="coupeuefa.png" width="130px" height="130px"></img>X3</a>
                            </div>
                        </div>
                </div>
                


                    
                    
        </div>

        <div className="widget10">
            <h2 className="titre">{this.state.Stadium}</h2>

            <div className="info_stade"> Address : {this.state.Address}</div>
            <div className="info_stade">  WebSite :  <a href="https://www.liverpoolfc.com/">{this.state.WebSite}</a></div>
            <div className="info_stade">  Phone :  {this.state.Phone}</div>
            <div className="info_stade">  E-mail:  <a href="https://www.liverpool.com/contact-us/">{this.state.email}</a></div>


           

            <br></br>

            <div className="stade">

                <div className="vue_exterieur">
                    <img className="img"src="Liverpool/anfield.jpeg" width="330px" height="200px"></img>
                </div>

                <div className="vue_interieur">
                    <img className="img"src="Liverpool/Anfiled-inside.jpeg" width="330px" height="200px"></img>
                </div>
                
            </div>

        </div>

        <div className="widget6">

                        <h2 className="titre">Composition d'équipe <br></br></h2>
                        <div className="G">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/allison.png" width="60px" height="60px"></img><br></br>{this.state.Player1}</a>
                        </div>

                        <div className="DG">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/robertson.png" width="60px" height="60px"></img><br></br>{this.state.Player2}</a>
                        </div>   
                        <div className="DC1">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/gomez.png" width="60px" height="60px"></img><br></br>{this.state.Player3}</a>
                        </div>    
                        <div className="DC2">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/vandjik.png" width="60px" height="60px"></img><br></br>{this.state.Player4}</a>
                        </div>   
                        <div className="DD">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/arnold.png" width="60px" height="60px"></img><br></br>{this.state.Player5}</a>                    
                        </div>   

                        <div className="MG">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/thiago.png" width="60px" height="60px"></img><br></br>{this.state.Player6}</a>
                        </div>   
                        <div className="MC">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/fabinho.png" width="60px" height="60px"></img><br></br>{this.state.Player7}</a>
                        </div>   
                        <div className="MD">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/henderson.png" width="60px" height="60px"></img><br></br>{this.state.Player8}</a>
                        </div>   

                        <div className="AG">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/mane.png" width="60px" height="60px"></img><br></br>{this.state.Player9}</a>
                        </div>   
                        <div className="BU">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/firmino.png" width="60px" height="60px"></img><br></br>{this.state.Player10}</a>
                        </div>   
                        <div className="AD">
                            <a className="navlinkk" href="/Player"> <img src="Liverpool/salah.png" width="60px" height="60px"></img><br></br>{this.state.Player11}</a>
                        </div>  

                        <div className="coach">
                            <img src="Liverpool/coach.png" width="60px" height="60px"></img><br></br> Jurgen Klopp
                        </div>

                   
     </div>


    </div>
);


}

}