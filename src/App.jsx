import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from './components/Projects';
import Contactme from './components/Contactme';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>



function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contactme/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App
