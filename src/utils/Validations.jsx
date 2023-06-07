// import { useContext } from "react";
// import CrudContext from "../context/CrudContext";

// const {
 
//   setDisable,

// } = useContext(CrudContext);
// export   function validate(formData) {
//   let error = {};

//   if (!formData.name) {
//     console.log("escribi");
//     error.name = "write a nmae.";
//   } else if (formData.name.length > 30) {
//     error.name = "Please write a shorter name";
//   }

//   if (!formData.date) {
//     error.date = "This field is required date.";
//   }
//   if (!formData.item) {
//     error.item = "This field is required item.";
//   }
//   setDisable(true);
//   if (Object.values(error).length === 0) setDisable(false);
//   return error;
// }