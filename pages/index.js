import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Layout from "./components/layout";
import Link from "next/link";
// import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./customers/blog";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title="Index" />
      <h1>Index</h1>

      <ol>
        <li>
          <Link href="/customers/login"> |Login|</Link>
        </li>

        <li>
          <Link href="/customers/register"> |Register|</Link>
        </li>

        <li>
          <Link href="/customers/register-userpass"> |register userpass|</Link>
        </li>

        <li>
          <Link href="/customers/register-picture"> |Upload picture|</Link>
        </li>

        <li>
          <Link href="/customers/home"> |Home|</Link>
        </li>

        <li>
          <Link href="/customers/menu"> |Menu|</Link>
        </li>

        <li>
          <Link href={"/customers/chefs"}>|Chefs|</Link>
        </li>

        <li>
          <Link href="/customers/pages"> |Pages|</Link>
        </li>

        <li>
          <Link href="/customers/blog"> |Blog|</Link>
        </li>

        <li>
          <Link href="/customers/contact"> |Contact US|</Link>
        </li>

        <li>
          <Link href="/customers/profile"> |My Profile|</Link>
        </li>

        <li>
          <Link href="/customers/cart"> |Cart|</Link>
        </li>

        <li>
          <Link href="/customers/checkout"> |Checkout|</Link>
        </li>
      </ol>
    </>
  );
}
