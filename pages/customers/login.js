import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import Header from "../components/header";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import * as cookie from "cookie";
import { json } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  console.log(username);

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      UserName: username,
      Password: password,
    };

    // Make the API request to login and get the user data
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const user = await response.json();

      console.log("The user is: ", user[0].customer.id);
      const customerId = user[0].customer.id;
      // Save the user ID in a cookie
      Cookies.set("Id", customerId);

      localStorage.setItem("loggedUser", JSON.stringify(user[0].customer));
      // sessionStorage.setItem("id", customerId);

      // Continue with the login process
      window.location.href = "/customers/home";
    } else {
      // Handle the login error
    }
  };

  return (
    <>
      {/* <Layout title = 'Login'/> */}
      <Header title={"Login"}></Header>
      <fieldset>
        <legend>Login page</legend>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              name="uname"
              placeholder="e.g. Rob_Tillman"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder=""
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <input type="submit" value="Login" />
        </form>
        <Link href={"./register"}>Don't have an account?</Link>
      </fieldset>
    </>
  );
}

// export async function getServerSideProps(data) {
//   const response = await axios.get(
//     "http://localhost:3000/api/user/login",
//     data
//   );
//   // const data = await response.data;
//   console.log(response.data);
//   // return { props: { data } };
// }
