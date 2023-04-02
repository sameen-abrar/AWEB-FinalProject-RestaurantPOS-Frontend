import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Layout title="index" />
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
          <input type="submit" value="Submit" />
        </form>
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

      <Link href={"/chefs"}>Chefs</Link>
    </>
  );
}
