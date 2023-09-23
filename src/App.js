import './App.css';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
// import {NewsLetter} from './components/NewsLetter';
import Projects from './components/Projects';
import Skills from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      {/* <NewsLetter /> */}
      <Footer />
    </>
  );
}

export default App;