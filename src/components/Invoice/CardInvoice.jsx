import React, { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import "./CardInvoice.css";
const CardInvoice = ({ el }) => {
  let { name, date, item, id, total } = el;
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  return (
    <div className="card-container">
      <div className="name-field-invoice name">
        {/* Nombre: */}
        <p> {name}</p>
      </div>
      <div>
        <div className="name-field-invoice">
         <h2> {date}</h2>
        </div>
      </div>
      <div className="name-field-invoice">
        <p> ${total}</p>
      </div>
      <div className="name-field-invoice">
        <button onClick={() => setDataToEdit(el)}>
          <span class="material-symbols-outlined edit-icon">edit</span>
        </button>

        <button onClick={() => deleteData(id)}>
          <span class="material-symbols-outlined delete-icon">delete</span>
        </button>
      </div>
    </div>
  );
};

export default CardInvoice;
