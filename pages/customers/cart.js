import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import * as cookie from "cookie";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Cart({ data }) {
  console.log(data)
  const [cart, setCart] = useState([]);
  const [coupons, setCoupons] = useState([]);

  // console.log("asdasd", data[0].orderedItems);

  useEffect(() => {
    async function fetchData() {
      console.log("cart with menu: ", data);
      setCart(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        // alert("are you sure?")
        const response = await axios.get(`http://localhost:3000/api/coupons`);
        const data = await response.data;

        setCoupons(data);
      } catch (error) {
        console.log("Error fetching coupons data:", error);
      }
    }
    fetchData();
  }, []);

  // console.log("the thing is that: ", coupons);

  const handleRemove = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to remove the item?");
      console.log(id);

      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/cart/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        // handle successful delete
        console.log("Item deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  // console.log("cart with menu: ",cart);
  return (
    <>
      <Layout title="Cart" />
      <h1>Cart</h1>
      {cart.map((item) => (
        <fieldset key={item.id}>
          <legend>{item.menu.Food_Name}</legend>
          {item.Gross_Price}{" "}
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </fieldset>
      ))}
      <br />
      <input type="submit" value={"Checkout"} />

      <Link href={"./coupons"}>Check coupons</Link>
    </>
  );
}

export async function getServerSideProps(context) {
  // const id = await Cookies.get("Id");
  const ParsedCookie = cookie.parse(context.req.headers.cookie);
  console.log("Parsed Cookies", ParsedCookie);
  // console.log("async func", id);
  // const id = sessionStorage.getItem("id");
  // console.log("id: ", Cookies.get("Id"));
  const response = await axios.get("http://localhost:3000/api/cart/customer/" + ParsedCookie.Id);
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}

// export async function getServerSideProps() {
//   // const id = parseInt(Cookies.get("userId"));
//   console.log("async func", id);
//   const response = await axios.get(
//     `http://localhost:3000/api/cart/customer/24`
//   );
//   const data = await response.data;

//   console.log("cart with menu: ", data);

//   return { props: { data } };
// }
