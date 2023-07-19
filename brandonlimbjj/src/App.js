import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/page404";
import Privatelessons from './components/Privatelessons';



function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/privatelessons" element={<Privatelessons/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);
}

export default App;
