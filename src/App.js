// import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Footer from './components/Footer';

function App() {
  return (
    //<div className="App">
     <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;