import React, { useState,useEffect } from "react";
import CrudForm from "./components/Form/CrudForm";
import CrudTable from "./components/table/CrudTable";
import Cards from "./components/Invoices/Cards";

const initialDb = [
  {
    id: 1,
    name: "Factura de ejemplo",
    date: "1994-12-12",
    item: "MacBook Pro5",
    total: 100,
  },
  {
    id: 2,
    name: "Factura de ejemplo2",
    date: "1994-12-12",
    item: "MacBook Pro",
    total: 100,
    constellation:"como"
  },
  {
    id: 2,
    name: "Factura de ejemplo2",
    date: "1994-12-12",
    item: "MacBook Pro",
    total: 100,
    constellation:"como"
  },
  {
    id: 2,
    name: "Factura de ejemplo2",
    date: "1994-12-12",
    item: "MacBook Pro",
    total: 100,
    constellation:"como"
  },
];
const Home = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const saveToLocalStorage = (data) => {

    localStorage.setItem("data", JSON.stringify(data));
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setDb(JSON.parse(data));
      setLoaded(true);
    } else {
      setDb(initialDb);
      setLoaded(true);
    }
  }, []);
  useEffect(() => {
    if (loaded) {
      saveToLocalStorage(db);
    }
  }, [db]);
  const createData = (data) => {
    data.id = Date.now();

    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    alert("editado");
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      {/* <h2>Crud app</h2> */}
      {/* <CrudForm */}
        {/* // createData={createData}
        // updateData={updateData}
        // dataToEdit={dataToEdit}
        // setDataToEdit={setDataToEdit} */}
      {/* /> */}
     
      <Cards 
      //  data={db}
      //  deleteData={deleteData}
      //  setDataToEdit={setDataToEdit}
       />

    </div>
  );
};

export default Home;
