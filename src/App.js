import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToasterProvider } from './components/ToastProvider';

function App() {
  return (
    <>
      <Navbar />
      <ToasterProvider />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;