import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
          <Route path="/" element={<Home />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
