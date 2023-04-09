import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import { useHref } from "react-router-dom";

const inter = Inter({ subsets: ["latin"] });

export default function Cart() {
  return (
    <>
      <Layout title="Cart" />
      <h1>Cart</h1>
      all the items user selected will be stored here before checkout
      <br />
      <input type="submit" value={"Checkout"} />
    </>
  );
}
