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
    const response = await fetch("https://flagrant-part-production.up.railway.app/api/user/login", {
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
    // <>
    //   {/* <Layout title = 'Login'/> */}
    //   <Header title={"Login"}></Header>
    //   <fieldset>
    //     <legend>Login page</legend>
    //     <form onSubmit={handleLogin}>
    //       <label>
    //         Username:
    //         <input
    //           type="text"
    //           name="uname"
    //           placeholder="e.g. Rob_Tillman"
    //           onChange={(e) => {
    //             setUsername(e.target.value);
    //           }}
    //         />
    //       </label>
    //       <br />
    //       <label>
    //         Password:
    //         <input
    //           type="password"
    //           name="password"
    //           placeholder=""
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //         />
    //       </label>
    //       <br />
    //       <input type="submit" value="Login" />
    //     </form>
    //     <Link href={"./register"}>Don't have an account?</Link>
    //   </fieldset>
    // </>
    <>
      <Header title="Login" />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md">
          <form
            onSubmit={handleLogin}
            className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <fieldset>
              <legend className="text-center text-gray-800 font-bold mb-6 text-2xl">
                Login
              </legend>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="uname"
                  id="username"
                  placeholder="e.g. Rob_Tillman"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-lg"
                >
                  Login
                </button>

                <Link
                  href={"./register"}
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Don't have an account?
                </Link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
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
