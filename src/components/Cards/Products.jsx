import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./Cards.css";
const Products = () => {
  const [invoices, setInvoices] = useState([]);

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
  return (
    <>
      <div className="grid-box ">
        <h1>Products</h1>
        <div className=" grid-box bg-red-50 text-center  justify-center items-center m-12 ">
          <div className="flex flex-wrap gap-10  justify-center items-center m-12">
            {invoices.map((invoice) => {
              return (
                <Card
                  key={invoice.id}
                  id={invoice.id}
                  description={invoice.description}
                  title={invoice.title}
                  price={invoice.price}
                  image={invoice.images[0]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
