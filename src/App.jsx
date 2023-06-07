import { useState } from "react";

// import Cards from "./Cards/Cards";
import { initialDb } from "./db/db";
import { CrudProvider } from "./context/CrudContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import CrudForm from "./components/Form/CrudForm";
import Products from "./components/Cards/Products";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {/* <button onClick={handleShowForm}>Crear nueva factura</button> */}
      {/* {showForm && (
        <InvoiceForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      )} */}

      {/* <InvoiceList/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CrudForm />} />
        <Route path="/products" element={<Products/>} />

      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
