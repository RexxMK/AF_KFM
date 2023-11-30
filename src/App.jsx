import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoritside from "./pages/Favoritside";
import KoebBoeger from "./pages/KoebBoeger";
import MustRead from "./pages/MustRead";
import Tilbud from "./pages/Tilbud";
import Nye from "./pages/Nye";
import Signerede from "./pages/Signerede";
import Laseklub from "./pages/Laseklub";
import Skonlitteratur from "./pages/Skonlitteratur";
import Biografier from "./pages/Biografier";
import Lyrik from "./pages/Lyrik";
import Spanding from "./pages/Spanding";
import Fagboger from "./pages/Fagboger";
import Borneboger from "./pages/Borneboger";
import Gavekort from "./pages/Gavekort";
import Moleskine from "./pages/Moleskine";

import VenstreBokse from "./components/VenstreBokse";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<KoebBoeger />} />
        <Route path="/favoritside" element={<Favoritside />} />
        <Route path="/mustread" element={<MustRead />} />
        <Route path="/ugenstilbud" element={<Tilbud />} />
        <Route path="/nyegodeboeger" element={<Nye />} />
        <Route path="/signeredeboeger" element={<Signerede />} />
        <Route path="/laeseklubbenlaeser" element={<Laseklub />} />
        <Route path="/skoenlitteratur" element={<Skonlitteratur />} />
        <Route path="/biografier" element={<Biografier />} />
        <Route path="/lyrik" element={<Lyrik />} />
        <Route path="/spaending" element={<Spanding />} />
        <Route path="/fagboeger" element={<Fagboger />} />
        <Route path="/boerneboeger" element={<Borneboger />} />
        <Route path="/gavekort" element={<Gavekort />} />
        <Route path="/moleskine" element={<Moleskine />} />
      </Routes>

      <VenstreBokse />
    </>
  );
}

export default App;
