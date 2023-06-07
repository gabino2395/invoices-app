import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

const CrudTableRow = ({ el }) => {
  let { name, date, item, id, total } = el;
  const { setDataToEdit, deleteData } = useContext(CrudContext);

  return (
    <tr className="bg-gray-800">
      <td className="p-3">{name}</td>
      <td className=" border-slate-700">{date}</td>
      <td className="p-3 border-slate-700">{item}</td>
      <td>${total}</td>
      <td>{el.images}</td>
      <td className="flex p-3 border-slate-700 rounde">
        <button onClick={() => setDataToEdit(el)}>
          <span class="material-symbols-outlined">edit</span>
        </button>

        <button onClick={() => deleteData(id)}>
          <span class="material-symbols-outlined">delete</span>
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
