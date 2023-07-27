import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Classes from "./components/Classes";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/page404";
import PrivateLessons from './components/PrivateLessons';



function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/classes" element={<Classes/>} />
      <Route path="/privatelessons" element={<PrivateLessons/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);
}

export default App;
