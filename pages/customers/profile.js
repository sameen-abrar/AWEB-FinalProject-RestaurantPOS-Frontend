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
    // <>
    //   <Layout title="Profile" />
    //   <h1>Profile</h1>
    //   <Link href={"/customers/update-profile"}>Update</Link>{"  "}
    //   {/* <Link href={"/customers/changepassword"}>Change Password</Link> */}
    //   {customerData ? (
    //     <div>
    //       <table>
    //         <tbody>
    //           <tr>
    //             <td>Name: </td>
    //             <td>{customerData.name}</td>
    //           </tr>
 
    //           <tr>
    //             <td>Email: </td>
    //             <td>{customerData.email}</td>
    //           </tr>

    //           <tr>
    //             <td>Phone: </td>
    //             <td>{customerData.phone}</td>
    //           </tr>

    //           <tr>
    //             <td>Returns: </td>
    //             <td>{customerData.no_of_returns}</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>
    //   ) : (
    //     <div>...Loading</div>
    //   )}
    // </>
    <>
      <Layout title="Profile" />
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold underline mb-4">Profile</h1>
        <Link href={"/customers/update-profile"}>
          <p className="text-blue-500 hover:underline">Update</p>
        </Link>
        {"  "}
        {/* <Link href={"/customers/changepassword"}>Change Password</Link> */}
        {customerData ? (
          <div className="mt-4">
            <table className="table-auto">
              <tbody>
                <tr>
                  <td className="py-2 font-medium">Name: </td>
                  <td className="py-2">{customerData.name}</td>
                </tr>

                <tr>
                  <td className="py-2 font-medium">Email: </td>
                  <td className="py-2">{customerData.email}</td>
                </tr>

                <tr>
                  <td className="py-2 font-medium">Phone: </td>
                  <td className="py-2">{customerData.phone}</td>
                </tr>

                <tr>
                  <td className="py-2 font-medium">Returns: </td>
                  <td className="py-2">{customerData.no_of_returns}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-4">...Loading</div>
        )}
      </div>
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
