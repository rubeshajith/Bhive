import "./App.css";
import Facilities from "./components/Facilities";
import Header from "./components/Header";
import HeaderPresentation from "./components/HeaderPresentation";
import OurSpace from "./components/OurSpace";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderPresentation />
      <Facilities />
      <OurSpace />
    </div>
  );
}

export default App;
