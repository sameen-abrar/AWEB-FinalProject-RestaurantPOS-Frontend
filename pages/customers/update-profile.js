import Head from "next/head";
import Image from "next/image";
import { Cookie, Inter } from "next/font/google";
import * as cookie from "cookie";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Route, Router } from "react-router-dom";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function UpdateProfile(props) {
  // const [customerData, setCustomerData] = useState();
  console.log("8392764: ", props.customerData.id);
  const [updateData, setUpdateData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        //       const id = parseInt(Cookies.get("userId"));
        //       console.log("async func", id);
        //       const response = await axios.get(
        //         `http://localhost:3000/api/customer/24`
        //       );
        //       const customer = await response.data;

        //       console.log(customer);
        //       setCustomerData(customer);
        setUpdateData(props.customerData);
      } catch (error) {
        console.log("Error fetching customer data:", error);
      }
    }
    fetchData();
  }, []);
  // const id = 24;

  //   setCustomerData(customer);
  //   console.log(customerData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const isValid = ValidateForm();
      //   debugger;
      if (isValid) {
        const confirmed = window.confirm(
          "Are you sure you want to Update changes?"
        );
        // console.log(id);

        if (confirmed) {
          console.log("updated data: ", updateData);
          const res = await fetch(
            "http://localhost:3000/api/customer/update/" +
              props.customerData.id,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateData),
            }
          );

          if (!res.ok) {
            throw new Error("Something went wrong");
          }

          // handle successful delete
          //   console.log("Item  deleted successfully");
          // Router.pus("/customers/profile");
          window.location.href = "/customers/profile";
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const ValidateForm = () => {
    let errors = {};
    let isValid = true;

    // name validation
    if (!updateData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    } else if (updateData.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
      isValid = false;
    } else if (!/^[A-Z]/.test(updateData.name)) {
      errors.name = "Name must start with a capital letter";
      isValid = false;
    }

    // email validation
    if (!updateData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(updateData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    // phone validation
    if (!updateData.phone) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]+$/.test(updateData.phone)) {
      errors.phone = "Phone number must be a number";
      isValid = false;
    } else if (updateData.phone.length < 4) {
      errors.phone = "Phone number must be 5 digits long";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  return (
    <>
      <Layout title="Profile Update" />
      <h1>Profile</h1>
      {updateData ? (
        <div>
          <form onSubmit={handleSubmit}>
            <table>
              {/* <thead>
              <tr>
                <button >Edit Profile</button>
                <button>Delete Account</button>
              </tr>
            </thead> */}
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={updateData.name}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    {formErrors.name && (
                      <span className="error">{formErrors.name}</span>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Email: </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={updateData.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    {" "}
                    {formErrors.email && (
                      <span className="error">{formErrors.email}</span>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Phone: </td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      value={updateData.phone}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    {formErrors.phone && (
                      <span className="error">{formErrors.phone}</span>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>Returns: </td>
                  <td>{props.customerData.no_of_returns}</td>
                </tr>
              </tbody>
            </table>
            <button>Confirm Changes</button>
          </form>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  // const id = await Cookies.get("Id");
  const ParsedCookie = cookie.parse(context.req.headers.cookie);
  console.log("Parsed Cookies", ParsedCookie);
  // console.log("async func", id);
  // const id = sessionStorage.getItem("id");
  // console.log("id: ", Cookies.get("Id"));
  const response = await axios.get(
    "http://localhost:3000/api/customer/" + ParsedCookie.Id
  );
  const customerData = await response.data;

  console.log(customerData);

  return { props: { customerData } };
}

// export async function getServerSideProps() {
//   const id = parseInt(Cookies.get("userId"));
//   console.log("async func", id);
//   const response = await axios.get(`http://localhost:3000/api/customer/24`);
//   const customerData = await response.data;

//   console.log(customerData);

//   return { props: { customerData } };
// }
