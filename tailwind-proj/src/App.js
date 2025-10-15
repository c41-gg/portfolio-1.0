import React from "react";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Gallery from "./components/Gallery.tsx";



function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Gallery />
    </div>
  );
}

export default App;
