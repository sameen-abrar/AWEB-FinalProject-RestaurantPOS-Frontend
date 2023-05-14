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
  const [coupons, setCoupons] = useState([]);
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
    // <>
    //   <Layout title="Coupons" />
    //   <h1>Coupons</h1>
    //   {coupons.map((item) => (
    //     <fieldset>
    //       <legend>{item.Code}</legend>
    //       Discount: {item.Percentage}%
    //     </fieldset>
    //   ))}
    //   <br />
    // </>

    <>
      <Layout title="Coupons" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Coupons</h1>
        <div className="space-y-4">
          {coupons.map((item) => (
            <div
              key={item.Code}
              className="bg-white rounded-md shadow-md p-6 flex items-center justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.Code}</h2>
                <p className="text-gray-500">Discount: {item.Percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const id = parseInt(Cookies.get("userId"));
  console.log("async func", id);
  const response = await axios.get(`http://localhost:3000/api/coupons`);
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}
