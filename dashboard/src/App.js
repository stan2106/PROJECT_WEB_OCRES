import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css"
import Home from "./pages/Home/Home"; 
import Clubs from "./components/Clubs/Clubs";
import {BrowserRouter, Routes, Route , } from 'react-router-dom';


function App() {
  return (
  
    <BrowserRouter>
      <Topbar />
      
      <div className="container">
        <Sidebar />
        <Routes>
        <Route exact path='/clubs' element={<Clubs/>} />
        <Route exact path='/' element={<Home/>} />
        


        </Routes>

      
      <app />


      </div>
      

    </BrowserRouter> 
    
    


  );
}

export default App;
