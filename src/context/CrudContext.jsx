import { createContext, useEffect, useState } from "react";
import { initialDb } from "../db/db";
import { Toaster, toast } from "sonner";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [disable, setDisable] = useState(false);

  //Se encarga de guardar los datos en el LocalStorage. Esta función se llamará cada vez que se modifiquen los datos en db. Utilizamos el método setItem del LocalStorage para guardar los datos en formato JSON.
  const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
  };
  //cargar los datos desde el LocalStorage cuando el componente se monte.
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
  // guardar los datos en el LocalStorage cada vez que el estado db cambie
  useEffect(() => {
    //verificamos si loaded es true (para evitar guardar los datos iniciales antes de que se carguen los datos del LocalStorage) y llamamos a la función saveToLocalStorage
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
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );
    toast.error("eliminado");

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };
  function validate(formData) {
    let error = {};

    if (!formData.name) {
      error.name = "Debes escribir un nombre";
    } else if (formData.name.length > 30) {
      error.name = "Escribe un nombre mas corto por favor";
    }

    if (!formData.date) {
      error.date = "Debes seleccionar una fecha";
    }
    if (!formData.item) {
      error.item = "Debes seleccionar un producto";
    }
    setDisable(true);
    if (Object.values(error).length === 0) setDisable(false);
    return error;
  }
  const data = {
    db,
    disable,
    setDisable,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
    validate,
    toast,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };
export default CrudContext;
