import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Register() {
  return (
    <>
      {/* <Layout title = 'Registration'/> */}
      <Header title={"SignUp"}></Header>
      <fieldset>
        <legend>Registration</legend>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <br />

          <label>
            Email:
            <input type="text" />
          </label>
          <br />

          <label>
            Phone Number:
            <input type="text" />
          </label>
          <br />
          {/* need to post data to customer table if valid then set username and password */}
          <input type="submit" value={"Next"} />
        </form>
      </fieldset>
    </>
  );
}
