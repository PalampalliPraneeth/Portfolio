import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import SocialMediaIcons from "./components/socialMediaIcons/MediaIcons";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import Certfications from "./components/certifications/Certifications";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Education/>
       <Skills/>
       <Certfications/>
       <Testimonials/>
       <Contact/>
     </div>
     <SocialMediaIcons/>
    </div>
  );
}

export default App;
