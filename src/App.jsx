import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
    
      <section>
        <Services />
      </section>

    
      <section>Parallax</section>
      <section>Protfolio1</section>
      <section>Protfolio2</section>
      <section>Protfolio3</section>
      <section>Contact</section>

     
    
    </>
  )
};

export default App;
