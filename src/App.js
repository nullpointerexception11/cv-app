import "./App.css";
import Header from "./components/header/header";
import Slider from "./components/slider/slider";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Quote from "./components/quote/quote";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import PageSection from "./components/page-section/page-section";


function App() {
  return (
    <>
      <Header />
      <Slider />
      <Intro />
      <About />
      <Quote />
      <Skills />
      <Experience/>
      <Portfolio/>
      <Contact/>
      <PageSection/>
      
    </>
  );
}

export default App;
