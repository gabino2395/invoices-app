import React, { useContext } from "react";
import CrudTableRow from "../CrudTableRow";
import CrudContext from "../../context/CrudContext";
import "./crudTable.css";
const CrudTable = () =>
  // { data, setDataToEdit, deleteData }
  {
    const { db: data, setDataToEdit, deleteData } = useContext(CrudContext);

    return (
      <>
        <h3>Tabla de Datos</h3>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible">
              <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-800 text-gray-500">
                  <tr>
                    <th className="p-3">Nombre</th>
                    <th className="p-3 text-left">Fecha</th>
                    <th className="p-3 text-left">Producto</th>
                    <th className="p-3 text-left">Total</th>
                    {/* <th className="p-3 text-left">Acciones</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((el) => (
                      <CrudTableRow
                        key={el.id}
                        el={el}
                        setDataToEdit={setDataToEdit}
                        deleteData={deleteData}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3">Sin datos</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };

export default CrudTable;
