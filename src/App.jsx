import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/NavbarBanner/NavbarBanner";
import NumberCounter from "./components/NumberCounter/NumberCounter";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
    </main>
  );
}

export default App;
