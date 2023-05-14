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

  console.log(customerData);
  return (
    <>
      <Layout title="Profile" />
      <h1>Profile</h1>
      <Link href={"/customers/update-profile"}>Update</Link>{"  "}
      {/* <Link href={"/customers/changepassword"}>Change Password</Link> */}
      {customerData ? (
        <div>
          <table>
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
  const response = await axios.get(
    "http://localhost:3000/api/customer/" + ParsedCookie.Id
  );
  const customerData = await response.data;

  console.log(customerData);

  return { props: { customerData } };
}
