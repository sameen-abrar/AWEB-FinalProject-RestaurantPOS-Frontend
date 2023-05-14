import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import * as cookie from "cookie";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Menu({ data }) {
  console.log({ data });
  const [quantity, setQuantity] = useState(false);
  const [cart, setCart] = useState({
    customerId: "",
    Amount: 1,
    menuId: "",
  });

  const AddToCart = async (item) => {
    try {
      // event.preventDefault();
      const confirmed = window.confirm(`Add ${item.Food_Name} to cart`);
      console.log("cart id 123: ", item);

      if (confirmed) {
        cart.customerId = Cookies.get("Id");
        cart.menuId = item.id;
        console.log(cart);

        const response = await fetch("http://localhost:3000/api/cart/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        });
      }
    } catch {
      console.error(error);
    }
  };

  return (
    <>
      <Layout title="Menu" />
      <h1>Menu</h1>
      {data.map((item) => (
        <fieldset key={item.id}>
          <legend>{item.Food_Name}</legend>

          <Link href={`./menu/${item.id}`}>
            Price: {item.Price}
            <ul>
              <li>{item.Description}</li>
              <li>{item.Type}</li>
              <li>{item.SpiceLevel}</li>
              <li>{item.Ingredients}</li>
            </ul>
          </Link>
          {/* {quantity && <div>abcd</div>} */}
          <button onClick={() => AddToCart(item)}>Add to cart</button>
        </fieldset>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/menu");
  const data = await response.data;

  console.log(data);
  return { props: { data } };
}
