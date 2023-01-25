import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Rsvp from "./Components/RSVP";
import Registry from "./Components/Registry";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/registry" element={<Registry />}></Route>
        <Route path="/rsvp" element={<Rsvp />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
