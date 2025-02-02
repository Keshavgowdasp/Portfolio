import Navbar from "./components/Navbar";
import About from "./components/About";
import Main from "./components/Main";
import Skills from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
  <main>
    <Navbar/>
    <Main/>
    <br/>
    <br/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </main>
  );
}

export default App;
