import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CrudForm from "./components/Form/CrudForm";
import Products from "./components/Cards/Products";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CrudForm />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
