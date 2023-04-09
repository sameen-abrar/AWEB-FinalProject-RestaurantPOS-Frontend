import Head from "next/head";
import Image from "next/image";
import { Cookie, Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Profile({ customerData }) {
  // const [customerData, setCustomerData] = useState(null);
  const id = 24;
  // const id = Cookies.get("userId");

  // useEffect(async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/api/customer/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       const customer = await response.json();
  //       setCustomerData(customer);
  //       console.log(customer);
  //     } else {
  //       // Handle the error
  //     }
  //   } catch (error) {
  //     // Handle the error
  //   }
  // }, [id]);

  // useEffect(async () => {
  //   setCustomerData(data);
  // }, []);

  console.log(customerData);
  return (
    <>
      <Layout title="Profile" />
      <h1>Profile</h1>
      {customerData ? (
        <div>
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
                <td>{customerData.name}</td>
              </tr>

              <tr>
                <td>Email: </td>
                <td>{customerData.email}</td>
              </tr>

              <tr>
                <td>Phone: </td>
                <td>{customerData.phone}</td>
              </tr>

              <tr>
                <td>Returns: </td>
                <td>{customerData.no_of_returns}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>...Loading</div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const id = parseInt(Cookies.get("userId"));
  console.log("async func", id);
  const response = await axios.get(`http://localhost:3000/api/customer/24`);
  const customerData = await response.data;

  console.log(customerData);

  return { props: { customerData } };
}

// export async function getServerSideProps(context) {
//   const { req } = context;
//   const id = 24;
//   // const id = parseInt(c);

//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/customer/${id}`
//     );
//     const data = await response.data;
//     console.log("bang", id);

//     return { props: { data } };
//   } catch (error) {
//     console.log("Error fetching customer data:", error);
//     return { props: { data: {} } };
//   }
// }
