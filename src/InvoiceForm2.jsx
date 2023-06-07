import React, { useState, useEffect } from "react";
import axios from "axios";
const InvoiceForm2 = () => {
  const [invoices, setInvoices] = useState([]);
  let [item, setItem] = useState("All items");

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

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    item: "",
    total: 0,
    // Otros campos de la factura
  });

  const handleChange3 = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      total: selectedProductPrice, // Actualizar el valor de total
    });
    // setError(
    //   validate({
    //     ...input,
    //     [event.target.name]: event.target.value,
    //   })
    // );
    // console.log(input)
    const selectedProduct = invoices.find(
      (el) => el.title === event.target.value
    );
    if (selectedProduct) {
      setSelectedProductPrice(selectedProduct.price);
    } else {
      setSelectedProductPrice(0);
    }
  };

  const selectProduct = (e) => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para guardar la factura
    // Actualizar el listado de facturas en el componente InvoiceList
  };

  const handleCancel = () => {
    // Lógica para cancelar la creación de la factura
  };

  return (
    <>
      <div className=" bg-violet-100 flex flex-col justify-center items-center">
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
                Nombre
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Username"
              />
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
              <h2>total :{formData.total}</h2>
              <input
                type="number"
                value={formData.total}
                onChange={handleChange}
                name="total"
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InvoiceForm2;
