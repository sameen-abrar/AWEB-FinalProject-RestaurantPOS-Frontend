import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/layout";
import Link from "next/link";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <>
      {/* <Layout title = 'Login'/> */}
      <Header title={"Login"}></Header>
      <fieldset>
        <legend>Login page</legend>
        <form>
          <label>
            Username:
            <input type="text" name="uname" placeholder="e.g. Rob_Tillman" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" placeholder="" />
          </label>
          <br />
          <input type="submit" value="Login" />
        </form>
        <Link href={'/register'}>Don't have an account?</Link>
      </fieldset>
    </>
  );
}
