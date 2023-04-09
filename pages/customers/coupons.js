import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Coupons({ data }) {
  const [coupons, setCoupons] = useState([])
  console.log("asdasd", data);

  useEffect(() => {
    async function fetchData() {
      setCoupons(data);
    }
    fetchData();
  }, []);

//  const coupons = data[0]

  console.log("the thing is that: ", coupons);
  return (
    <>
      <Layout title="Coupons" />
      <h1>Coupons</h1>
      {coupons.map((item) => (
        <fieldset>
          <legend>{item.Code}</legend>
          Discount: {item.Percentage}%
        </fieldset>
      ))}
      <br />
    </>
  );
}

export async function getServerSideProps() {
  const id = parseInt(Cookies.get("userId"));
  console.log("async func", id);
  const response = await axios.get(
    `http://localhost:3000/api/coupons`
  );
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}
