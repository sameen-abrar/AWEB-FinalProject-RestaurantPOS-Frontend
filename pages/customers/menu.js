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
    // <>
    //   <Layout title="Menu" />
    //   <h1>Menu</h1>
    //   {data.map((item) => (
    //     <fieldset key={item.id}>
    //       <legend>{item.Food_Name}</legend>

    //       <Link href={`./menu/${item.id}`}>
    //         Price: {item.Price}
    //         <ul>
    //           <li>{item.Description}</li>
    //           <li>{item.Type}</li>
    //           <li>{item.SpiceLevel}</li>
    //           <li>{item.Ingredients}</li>
    //         </ul>
    //       </Link>
    //       {/* {quantity && <div>abcd</div>} */}
    //       <button onClick={() => AddToCart(item)}>Add to cart</button>
    //     </fieldset>
    //   ))}
    // </>
    <>
      <Layout title="Menu" />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Menu</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link href={`./menu/${item.id}`}>
                <div className="h-48 bg-gray-200">
                  <img
                    className="h-full w-full object-cover"
                    src={`/${item.id}.jpg`}
                    alt={item.Food_Name}
                  />
                </div>
                <div className="px-4 py-2">
                  <h2 className="text-xl font-bold mb-2">{item.Food_Name}</h2>
                  <p className="text-gray-700 text-base">{item.Description}</p>
                  <p className="text-gray-700 text-base mb-4">
                    Price: {item.Price}
                  </p>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => AddToCart(item)}
                  >
                    Add to cart
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/api/menu");
  const data = await response.data;

  console.log(data);
  return { props: { data } };
}
