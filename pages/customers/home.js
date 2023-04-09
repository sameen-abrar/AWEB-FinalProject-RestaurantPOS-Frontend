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
    <>
      <Layout title="Home" />
      {/* PERFORM SEARCH OPERATION */}
      <fieldset>
        <legend>Search Food</legend>
        <h1>Food that’s good for your heart.</h1>
        <form>
          <label>
            Find a Food:
            <input
              type="text"
              name="search"
              placeholder="Enter catagory of food"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
        <div>
          {data.map((item) => (
            <div>{item.Food_Name}</div>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>Browse catagory</legend>
        catagories from entites
      </fieldset>

      <fieldset>
        <legend>How it works</legend>
        Choose food and order //images and css
      </fieldset>

      <fieldset>
        <legend>Popular items</legend>
        List of all top items //images and css
      </fieldset>

      <fieldset>
        <legend>About us</legend>
        Company details and contacts
      </fieldset>

      <Link href={"./chefs"}>Chefs</Link>
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
