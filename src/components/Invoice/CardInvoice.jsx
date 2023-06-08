import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CrudContext from "../../context/CrudContext";
import "./CardInvoice.css";
import { Toaster, toast } from "sonner";
const CardInvoice = ({ el }) => {
  const navigate = useNavigate();
  let { name, date, item, id, total } = el;
  const { setDataToEdit, deleteData, toast } = useContext(CrudContext);
  const editItem = () => {
    navigate("/create");
  };
  return (
    <div className="card-container">
      <div className="name-field-invoice name">
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
        <Toaster position="top-right" richColors />

        <button onClick={() => setDataToEdit(el)}>
          <span onClick={editItem} class="material-symbols-outlined edit-icon">
            edit
          </span>
        </button>
        <Toaster position="top-right" richColors />
        <button onClick={() => deleteData(id)}>
          <span class="material-symbols-outlined delete-icon">delete</span>
        </button>
      </div>
    </div>
  );
};

export default CardInvoice;
