import { Inter } from "next/font/google";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("submit: ", customerData);
      const isValid = ValidateForm();
      // console.log(isValid);
      //   debugger;
      if (isValid) {
        localStorage.setItem("customerData", JSON.stringify(customerData));

        window.location.href = "/customers/register-userpass";
        // const response = JSON.parse(localStorage.getItem("customerData"));
        // console.log("JSON: ", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;

    // name validation
    if (!customerData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (customerData.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
      isValid = false;
    } else if (!/^[A-Z]/.test(customerData.name)) {
      errors.name = "Name must start with a capital letter";
      isValid = false;
    }

    // email validation
    if (!customerData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(customerData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    // phone validation
    if (!customerData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]+$/.test(customerData.phone)) {
      errors.phone = "Phone number must be a number";
      isValid = false;
    } else if (customerData.phone.length < 4) {
      errors.phone = "Phone number must be 5 digits long";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  return (
    <>
      {/* <Layout title = 'Registration'/> */}
      <Header title={"Sign Up"}></Header>
      <fieldset>
        <legend>Registration</legend>
        <form onSubmit={handleSubmit} encType="">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={customerData.name}
              onChange={handleChange}
            />{" "}
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </label>
          <br />

          <label>
            Email:
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={customerData.email}
            />
            {formErrors.name && (
              <span className="error">{formErrors.email}</span>
            )}
          </label>
          <br />

          <label>
            Phone Number:
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              // value={customerData.phone}
            />
            {formErrors.name && (
              <span className="error">{formErrors.phone}</span>
            )}
          </label>
          <br />
          {/* need to post data to customer table if valid then set username and password */}
          <button>Next</button>
        </form>
      </fieldset>
    </>
  );
}
