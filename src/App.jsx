import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoritside from "./pages/Favoritside";
import KoebBoeger from "./pages/KoebBoeger";

function App() {
  return (

  <>
     <Header/>   
    <Routes>
      <Route path="/" element={ <KoebBoeger /> } />
      <Route path="/favoritside" element={ <Favoritside/> } />
    </Routes>
  
  
  
  
  
  
  </>
  
  
  );
}

export default App;
