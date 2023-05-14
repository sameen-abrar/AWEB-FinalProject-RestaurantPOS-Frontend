import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage({ data }) {
  const [search, setSearch] = useState();
  return (
    // <>
    //   <Layout title="Home" />
    //   {/* PERFORM SEARCH OPERATION */}
    //   <fieldset>
    //     <legend>Search Food</legend>
    //     <h1>Food that’s good for your heart.</h1>
    //     <form>
    //       <label>
    //         Find a Food:
    //         <input
    //           type="text"
    //           name="search"
    //           placeholder="Enter catagory of food"
    //         />
    //       </label>
    //       <input
    //         type="submit"
    //         value="Submit"
    //         onChange={(e) => {
    //           setSearch(e.target.value);
    //         }}
    //       />
    //     </form>
    //     <div>
    //       {data.map((item) => (
    //         <div>{item.Food_Name}</div>
    //       ))}
    //     </div>
    //   </fieldset>

    //   <fieldset>
    //     <legend>Browse catagory</legend>
    //     catagories from entites
    //   </fieldset>

    //   <fieldset>
    //     <legend>How it works</legend>
    //     Choose food and order //images and css
    //   </fieldset>

    //   <fieldset>
    //     <legend>Popular items</legend>
    //     List of all top items //images and css
    //   </fieldset>

    //   <fieldset>
    //     <legend>About us</legend>
    //     Company details and contacts
    //   </fieldset>

    //   <Link href={"./chefs"}>Chefs</Link>
    // </>
    <>
      <Layout title="Home" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center my-8">
          <div className="w-full max-w-sm">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h2 className="mb-2 text-2xl font-bold">Search Food</h2>
              <h3 className="text-lg mb-6">
                Food that’s good for your heart.
              </h3>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Find a Food:
                </label>
                <input
                  type="text"
                  name="search"
                  placeholder="Enter category of food"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.Food_ID}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <Image
                // src="/Pizza-3007395.jpg"
                src={`/${item.id}.jpg`}

                alt={item.Food_Name}
                width={640}
                height={426}
              />
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {item.Food_Name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  {item.Food_Desc}
                </p>
              </div>
              <div className="px-4 py-3 sm:px-6">
                <Link
                  href={`/menu/${item.Food_ID}`}
                  className="text-base font-medium text-red-600 hover:text-red-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8 text-center">
          <Link
            href={"./chefs"}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Meet Our Chefs
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const id = parseInt(Cookies.get("userId"));
  console.log("async func", id);
  const response = await axios.get(`http://localhost:3000/api/menu`);
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}
