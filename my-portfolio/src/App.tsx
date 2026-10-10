import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
export default function App() {
  return (
    <div id="top" className="portfolio-app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
