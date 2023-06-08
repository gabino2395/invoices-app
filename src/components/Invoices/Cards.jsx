import React, { useContext } from "react";
import CardInvoice from "../Invoice/CardInvoice";
import CrudContext from "../../context/CrudContext";
import "./Cards.css";
const Cards = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <div className="first-box"></div>
      <h3 className="invoices-title">Tus Facturas</h3>
      <div className="cards-invoices-container">
        <img className="invoice-img" src="./img/Invoice.svg" alt="" />
        <div className="subject-container">
          <ul className="invoices-subjects">
            <li>Nombre</li>
            <li>Fecha</li>
            <li>Total</li>
            <li className="item-none"></li>
          </ul>
          <div className="data">
            {data.length > 0 ? (
              data.map((el) => <CardInvoice key={el.id} el={el} />)
            ) : (
              <p>No hay datos en la tabla</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
