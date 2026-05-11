import "./App.css";
import { AboutMe } from "./pages/AboutMe";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Hero } from "./pages/Hero";
import React from "react";

function App() {
  return (
    <>
      <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
}

export default App;
