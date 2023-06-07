import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CrudContext from "../../context/CrudContext";
// import { validate } from "../utils/Validations";
const initailForm = {
  name: "",
  date: "",
  item: "",
  id: null,
  total: 0,
};
const CrudForm = () =>
  // { createData, updateData, dataToEdit, setDataToEdit }
  {
    const {
      createData,
      updateData,
      dataToEdit,
      setDataToEdit,
      setDisable,
      disable,
      validate
    } = useContext(CrudContext);
    const [invoices, setInvoices] = useState([]);
    let [item, setItem] = useState("All items");
    const [error, setError] = useState({});
    const [formData, setFormData] = useState(initailForm);

   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products");
          setInvoices(response.data.products);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }, []);
    const [selectedProductPrice, setSelectedProductPrice] = useState(0);

    useEffect(() => {
      if (dataToEdit) {
        setFormData(dataToEdit);
      } else {
        setFormData(initailForm);
      }
    }, [dataToEdit]);
    const handleChange = (event) => {
      const selectedProduct = invoices.find(
        (el) => el.title === event.target.value
      );
      const selectedProductPrice = selectedProduct ? selectedProduct.price : 0;

      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        total: selectedProductPrice,
      });
      setError(
        validate({
          ...formData,
          [event.target.name]: event.target.value,
        })
      );
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setError(validate(formData));
      const errorSave = validate(formData);
      if (Object.values(errorSave).length !== 0) {
        alert("Please, fullfil the required camps.");
      } else {
        // if (!formData.name) {
        //   alert("Datos incompletos");
        //   return;
        // }
        if (formData.id === null) {
          createData(formData);
        } else {
          updateData(formData);
        }
        // setFormData({
        //   name: "",
        //   date: "",
        //   item: "",
        //   id: null,
        //   total: 0,
        // });
        handleReset();
      }

      // Lógica para guardar la factura
      // Actualizar el listado de facturas en el componente InvoiceList
    };

    const handleReset = (e) => {
      setFormData(initailForm);
      setDataToEdit(null);
    };

    return (
      <div className=" bg-violet-100 flex flex-col justify-center items-center">
        <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>

        <h1>Formulario de Factura</h1>
        <div class="w-full max-w-[600px]">
          <form
            onSubmit={handleSubmit}
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nombre completo
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Martin Perez"
              />
              {error.name && <p className="error-form">{error.name}</p>}
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Fecha
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.date}
                name="date"
                onChange={handleChange}
                id="date"
                type="date"
                placeholder="******************"
              />
              {error.date && <p className="error-form">{error.date}</p>}
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="date"
              >
                Producto
              </label>
              <select
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
                name="item"
                value={formData.item}
                onChange={handleChange}
                names="All items"
              >
                <option value="All items">Producto</option>

                {invoices.map((el) => (
                  <option key={el.id} value={el.title}>
                    {el.title}
                  </option>
                ))}
              </select>
              <h2>total : $ {formData.total}</h2>
              {error.item && <p className="error-form">{error.item}</p>}
            </div>
            <div class="flex items-center justify-between">
              {disable ? (
                ""
              ) : (
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Agregar factura
                </button>
              )}
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <input type="reset" value="Limpiar" onClick={handleReset} />
          </form>
        </div>
      </div>
    );
  };

export default CrudForm;