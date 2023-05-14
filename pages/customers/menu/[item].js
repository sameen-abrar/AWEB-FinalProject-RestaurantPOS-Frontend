import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../components/layout";
import { useRoutes } from "react-router-dom";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Items() {
  const router = useRouter();
  const { item } = router.query;
  const id = parseInt(item);
  const [menuItem, SetMenuItem] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/menu/${id}`
        );
        const data = await response.data;

        SetMenuItem(data);

        localStorage.setItem("myState", JSON.stringify(data));
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    const storedState = localStorage.getItem("myState");
    if (storedState) {
      SetMenuItem(JSON.parse(storedState));
    }
  }, []);

  return (
    <>
      <Layout />
      {menuItem && (
        <div>
          <Header title={menuItem.Food_Name} />
          <div style={{ paddingTop: "20px" }}>
            <h1>{menuItem.Food_Name}</h1>
            <p>Price: {menuItem.Price}</p>
            <p>Ingredients: {menuItem.Ingredients}</p>
          </div>
        </div>
      )}
    </>
  );
}
