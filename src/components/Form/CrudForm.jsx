import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CrudContext from "../../context/CrudContext";
// import { validate } from "../utils/Validations";
import "./Form.css";
import { Toaster, toast } from "sonner";


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
    const navigate = useNavigate();

    const {
      createData,
      updateData,
      dataToEdit,
      setDataToEdit,
      setDisable,
      disable,
      validate,
      toast,
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
        if (formData.id === null) {
          alert("creado");

          createData(formData);
          notifyCreate()
        } else {
          // alert("editado");
          updateData(formData);
        }
        notifyEdit();
        handleReset();
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      // Lógica para guardar la factura
      // Actualizar el listado de facturas en el componente InvoiceList
    };
    // const toastFunc = () => {
    //   alert("si");
    //   toast.success("cambios!");
    //   toast("Event has been created", {
    //     description: "Monday, January 3rd at 6:00pm",
    //     icon: "",
    //   });
    // };
    const handleReset = (e) => {
      setFormData(initailForm);
      setDataToEdit(null);
    };
    const notifyEdit = () => {
      toast.success("Factura editada con exito!");
    };
    const notifyCreate = () => {
      toast.success("Factura creada con exito!");
    };
    return (
      <>
        <div className="first-box"></div>

        <h1 className="invoices-title">Formulario de Factura</h1>
        <div className=" form-page-container">
          <img className="invoice-img" src="./img/Form.svg" alt="" />

          <div class="w-full max-w-[600px]">
            <form
              onSubmit={handleSubmit}
              class="bg-white form shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <h3 className="form-subtitle">
                {dataToEdit ? "Editar factura" : "Agregar factura"}
              </h3>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Nombre
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
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                  class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
                  <>
                    <Toaster richColors position="top-right" />
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Agregar factura
                    </button>
                    {/* <ToastContainer /> */}
                  </>
                )}

                <button
                  className="reset-click"
                  type="reset"
                  value="Limpiar"
                  onClick={handleReset}
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

export default CrudForm;
