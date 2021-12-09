import React from 'react'
import "./Accueil.css" 


export default class CallApi extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 

            message:"",
		};
	}

	callAPI(){


		var obj = {
			method: "GET",
			mode: "cors",
			cache: "default"
		};
		
    
        fetch("http://localhost:4000/messages", obj)
		.then(res => res.json())
		.then(res => this.setState({ 

            message:res.message,
		}));

    }

    componentDidMount() {
        this.callAPI();
    }

            

render() {
    return (
        <div className = "fond">
            <div className="welcome">

            {this.state.message}
            
		
            </div>
            <div className="soustitre">
                <br></br>
                <br></br>

                <img src ="ldc2.png" className="ldc2" width="40px" height="40px"></img>
                &emsp;L'essentiel des statistiques concernant les meilleurs joueurs du monde et les meilleures équipes européennes.&emsp;
                <img src ="ldc2.png" className="ldc2" width="40px" height="40px"></img>
            </div>

                <br></br>
                <br></br>
                <br></br>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/X3Zs-HZczUM?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>

            <div className="conteneur1">
                <div className="d1"></div>
            </div>



        </div>


    )
}


}
