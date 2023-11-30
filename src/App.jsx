import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoritside from "./pages/Favoritside";
import KoebBoeger from "./pages/KoebBoeger";
import MustRead from ".pages/kategorisider/MustRead";
import Tilbud from ".pages/kategorisider/Tilbud";
import Nye from ".pages/kategorisider/Nye";
import Signerede from ".pages/kategorisider/Signerede";
import Laseklub from ".pages/kategorisider/Laseklub";
import Skonlitteratur from ".pages/kategorisider/Skonlitteratur";
import Biografier from ".pages/kategorisider/Biografier";
import Lyrik from ".pages/kategorisider/Lyrik";
import Spanding from ".pages/kategorisider/Spanding";
import Fagboger from ".pages/kategorisider/Fagboger";
import Gavekort from ".pages/kategorisider/Gavekort";
import Moleskine from ".pages/kategorisider/Moleskine";




function App() {
  return (

  <>
     <Header/>   
    <Routes>
      <Route path="/" element={ <KoebBoeger /> } />
      <Route path="/favoritside" element={ <Favoritside/> } />
      <Route path="/mustread" element={ <MustRead /> } />
      <Route path="/ugenstilbud" element={ <Tilbud /> } />
      <Route path="/nyegodeboeger" element={ <Nye /> } />
      <Route path="/signeredeboeger" element={ <Signerede /> } />
      <Route path="/laeseklubbenlaeser" element={ <Laseklub /> } />
      <Route path="/skoenlitteratur" element={ <Skonlitteratur /> } />
      <Route path="/biografier" element={ <Biografier /> } />
      <Route path="/lyrik" element={ <Lyrik /> } />
      <Route path="/spaending" element={ <Spanding /> } />
      <Route path="/fagboeger" element={ <Fagboger /> } />
      <Route path="/boerneboeger" element={ <Borneboger /> } />
      <Route path="/gavekort" element={ <Gavekort /> } />
      <Route path="/moleskine" element={ <Moleskine /> } />

    </Routes>
  
    

  
  
  
  
  
  
  </>
  
  
  );
}

export default App;
