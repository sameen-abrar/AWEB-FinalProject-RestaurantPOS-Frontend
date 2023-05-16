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
  console.log(data);
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
        const response = await axios.get(`https://flagrant-part-production.up.railway.app/api/coupons`);
        const data = await response.data;

        setCoupons(data);
      } catch (error) {
        console.log("Error fetching coupons data:", error);
      }
    }
    fetchData();
  }, []);

  // console.log("the thing is that: ", coupons);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    // onUpdate({ ...item, quantity: quantity + 1 });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // onUpdate({ ...item, quantity: quantity - 1 });
    }
  };

  const handleRemove = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to remove the item?"
      );
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
    // <>
    //   <Layout title="Cart" />
    //   <h1>Cart</h1>
    //   {cart && cart.map((item) => (
    //     <fieldset key={item.id}>
    //       <legend>{item.menu.Food_Name}</legend>
    //       {item.Gross_Price}{" "}
    //       <button onClick={() => handleRemove(item.id)}>Remove</button>
    //     </fieldset>
    //   ))}
    //   <br />
    //   <input type="submit" value={"Checkout"} />

    //   <Link href={"./coupons"}>Check coupons</Link>
    // </>
    <>
      <Layout title="Cart" />
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cart ? (
        cart.map((item) => (
          <fieldset
            key={item.id}
            className="border border-gray-300 rounded-lg p-4 mb-4"
          >
            <legend className="text-lg font-medium mb-2">
              {item.menu.Food_Name}
            </legend>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {quantity !== null && (
                  <span className="text-gray-600">
                    {item.menu.Price * quantity}
                  </span>
                )}
              </span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-300 text-white rounded-md"
                onClick={handleDecrement}
              >
                -
              </button>
              <p className="mx-2">{quantity}</p>
              <button
                className="px-2 py-1 bg-gray-300 text-white rounded-md"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </fieldset>
        ))
      ) : (
        <p>Cart is Empty</p>
      )}
      <br />
      <input
        type="submit"
        value={"Checkout"}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      />

      <Link href={"./coupons"} className="text-blue-500 hover:underline">
        Check coupons
      </Link>
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
  const response = await axios.get(
    "https://flagrant-part-production.up.railway.app/api/cart/customer/" + ParsedCookie.Id
  );
  const data = await response.data;

  // const cart = data.forEach(element => {
  //   if(!element.transactionId)

  // });

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
