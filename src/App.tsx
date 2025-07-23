import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Blogs from "./components/Blogs"; // Add this import
//import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PremiumFeatureShowcase from "./components/PremiumFeatureShowcase";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <PremiumFeatureShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
