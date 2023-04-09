import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterPicture() {
  return (
    <>
      {/* <Layout title = 'Registration'/> */}
      <Header title={"SignUp"}></Header>
      <fieldset>
        <legend>Registration</legend>
        <form>
          <label>
            Upload picture:
            <input type="file" name="profilePicture" />
            <br />
            <input type="submit" value={"Confirm"} />
            <Link href={'/'}>Skip</Link>
          </label>
          <br />
        </form>
      </fieldset>
    </>
  );
}
