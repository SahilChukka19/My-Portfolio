import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechLab from './components/TechLab'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Accomplishments from "./components/Accomplishments";

function App() {
    return (
        <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-cyan-500/30">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <div id="skills">
                <TechLab />
            </div>
            <Projects />
            <Accomplishments />
            <Contact />
            <Footer />
        </div>
    );
}

export default App