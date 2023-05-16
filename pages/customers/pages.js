// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Layout from '../components/layout'

// const inter = Inter({ subsets: ['latin'] })

// export defa  ult function Pages() {
//   return (
//     <>
//     <Layout title = 'Pages'/>
//       <h1>Pages</h1>
//       Page Style Menu List
//     </>
//   )
// }

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import * as cookie from "cookie";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Pages({ data }) {
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

        const response = await fetch("https://flagrant-part-production.up.railway.app/api/cart/insert", {
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
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Menu</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Link href={`./menu/${item.id}`}>
                <p className="block hover:opacity-75 transition duration-300 ease-in-out">
                  <div className="h-48 bg-gray-200">
                    <img
                      className="h-full w-full object-cover"
                      src={`/${item.id}.jpg`}
                      alt={item.Food_Name}
                    />
                  </div>
                  <div className="px-4 py-2">
                    <h2 className="text-xl font-bold mb-2">{item.Food_Name}</h2>
                    <p className="text-gray-700 text-base">
                      {item.Description}
                    </p>
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
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://flagrant-part-production.up.railway.app/api/menu");
  const data = await response.data;

  console.log(data);
  return { props: { data } };
}
