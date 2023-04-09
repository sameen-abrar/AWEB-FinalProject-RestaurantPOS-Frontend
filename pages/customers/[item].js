import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import { useRoutes } from "react-router-dom";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Items() {
  const router = useRouter();
  const { item } = router.query;
  return (
    <>
      <Layout title={item} />
      <h1>{item}</h1>
      selected Item is {router.query.item}
    </>
  );
}
