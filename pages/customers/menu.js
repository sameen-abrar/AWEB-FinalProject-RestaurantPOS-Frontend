import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Menu({ data }) {
  console.log({ data });
  return (
    <>
      <Layout title="Menu" />
      <h1>Menu</h1>
    {
      data.map((item)=>(
        <fieldset>
          <legend>{item.Food_Name}</legend>
          {item.Description}
        </fieldset>
      ))
    }
      
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/menu");
  const data = await response.data;

  console.log(data);
  return { props: { data } };
}
