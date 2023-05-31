import "./App.css";
import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Tour from "./component/Tour";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Tour />
      <Footer />
    </div>
  );
}

export default App;
