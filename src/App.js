import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About'
import Skills from './components/Skills';
import Certificate   from './components/CertificatePage';
import {ProjectPage} from './components/ProjectPage';
import Services from './components/Services'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Body></Body>
    <About></About>
    <Skills></Skills>
    <ProjectPage></ProjectPage>
    <Certificate  ></Certificate>
    <Services></Services>
    <Contact></Contact>
    <Footer></Footer>
    </div>
  );
}

export default App;
