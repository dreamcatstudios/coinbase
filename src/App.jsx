import "./App.css";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Table />
      <ChooseUs />

      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
