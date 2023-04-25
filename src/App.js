import './App.css';
import NavBar from './components/NavBar';
import Carrousel from './components/Corrousel';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrousel />
      <About />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
