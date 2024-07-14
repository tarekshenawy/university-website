import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Title from "./Components/Title/Title";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div >
      <Navbar/>
      <Background/>
      <div className="container">
        <Title subtitle="our program" title="what we offer"/>
        <Programs/>
        <About/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Gallery/>
        <Title subtitle="Testimonials" title="What Students says"/>
        <Testimonials/>
        <Title subtitle="Contacts" title="Get in Touch"/>
        <Contact/>
        <Footer/>
        

      </div>
  
    </div>
  );
}

export default App;
