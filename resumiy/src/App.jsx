import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-teal-700 to-slate-900 h-max pb-8">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
