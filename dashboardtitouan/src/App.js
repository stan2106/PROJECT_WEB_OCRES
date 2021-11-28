import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/Home/Home"; 
import Clubs from "./components/Clubs/Clubs";
import {BrowserRouter, Routes, Route , } from 'react-router-dom';
import Accueil from "./components/Accueil/Accueil";
import Coupe from "./components/Coupe/Coupe";



function App() {
  return (
  
    <BrowserRouter>
      <Topbar />
      
      <div className="container">
        <Sidebar />
        <Routes>
        
        <Route exact path='/clubs' element={<Clubs/>} />
        <Route exact path='/Player' element={<Home/>}/>
        
        <Route exact path='/' element={<Accueil/>} /> 
        <Route exact path='/coupe' element={<Coupe/>}/>


        </Routes>

      
      <app />


      </div>
      

    </BrowserRouter> 
    
    


  );
}

export default App;
