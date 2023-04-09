import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Cart({ data }) {
  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState([]);

  console.log("asdasd", data[0].orderedItems);

  useEffect(() => {
    async function fetchData() {
      setCart(data[0].orderedItems);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/api/coupons`);
        const data = await response.data;

        setCoupons(data);
      } catch (error) {
        console.log("Error fetching coupons data:", error);
      }
    }
    fetchData();
  }, []);

  console.log("the thing is that: ", coupons);
  return (
    <>
      <Layout title="Cart" />
      <h1>Cart</h1>
      {cart.map((item) => (
        <fieldset>
          <legend>{item.Amount}</legend>
          {item.Gross_Price}
        </fieldset>
      ))}
      <br />
      <input type="submit" value={"Checkout"} />
      
      <Link href={'./coupons'}>Check coupons</Link>
    </>
  );
}

export async function getServerSideProps() {
  const id = parseInt(Cookies.get("userId"));
  console.log("async func", id);
  const response = await axios.get(
    `http://localhost:3000/api/customer/cart/24`
  );
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}
