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

const inter = Inter({ subsets: ["latin"] });

export default function Profile({ customerData }) {
  const [id, setId] = useState();
  // const [customerData, setCustomerData] = useState();
  // const id = 24;

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // checks if the code is running on the client-side and not on the server-side.
  //     const session = sessionStorage.getItem("id");
  //     if (session) {
  //       async function fetchData() {
  //         try {
  //           // alert("are you sure?")
  //           // setId(sessionStorage.getItem("id"));
  //           console.log("id", sessionStorage.getItem("id"));
  //           const response = await axios.get(
  //             `http://localhost:3000/api/customer/` + sessionStorage.getItem("id")
  //           );
  //           const data = await response.data;

  //           setCustomerData(data);
  //         } catch (error) {
  //           console.log("Error fetching Customer data:", error);
  //         }
  //       }
  //       fetchData();
  //     }
  //   }
  // }, []);

  console.log(customerData);
  return (
    <>
      <Layout title="Profile" />
      <h1>Profile</h1>
      <Link href={"/customers/update-profile"}>Update</Link>
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

export async function getServerSideProps(context) {
  // const id = await Cookies.get("Id");
  const ParsedCookie = cookie.parse(context.req.headers.cookie);
  console.log("Parsed Cookies", ParsedCookie);
  // console.log("async func", id);
  // const id = sessionStorage.getItem("id");
  // console.log("id: ", Cookies.get("Id"));
  const response = await axios.get("http://localhost:3000/api/customer/" + ParsedCookie.Id);
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
