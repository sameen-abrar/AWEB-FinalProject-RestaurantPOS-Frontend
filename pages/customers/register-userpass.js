import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterUserPass() {
  return (
    <>
      {/* <Layout title = 'Registration'/> */}
      <Header title={"SignUp"}></Header>
      <fieldset>
        <legend>Registration</legend>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />

          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />

          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <br />
          {/* Post data to user table then route to profile pic upload */}
          <input type="submit" value={"Next"} />
        </form>
      </fieldset>
    </>
  );
}
