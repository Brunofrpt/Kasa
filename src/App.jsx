import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/index";
import Annonce from "./pages/Annonce"
import Apropos from "./pages/Apropos/index";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonce/:id" element={<Annonce />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;