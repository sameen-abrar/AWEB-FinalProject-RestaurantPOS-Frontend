import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "./components/layout";
import Link from "next/link";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header title="Index" />
      <h1>Index</h1>

      <ol>
        <li>
          <Link href="/login"> |Login|</Link>
        </li>

        <li>
          <Link href="/register"> |Register|</Link>
        </li>

        <li>
          <Link href="/register-userpass"> |register userpass|</Link>
        </li>

        <li>
          <Link href="/register-picture"> |Upload picture|</Link>
        </li>

        <li>
          <Link href="/home"> |Home|</Link>
        </li>

        <li>
          <Link href="/menu"> |Menu|</Link>
        </li>

        <li>
          <Link href={"/chefs"}>|Chefs|</Link>
        </li>

        <li>
          <Link href="/pages"> |Pages|</Link>
        </li>

        <li>
          <Link href="/blog"> |Blog|</Link>
        </li>

        <li>
          <Link href="/contact"> |Contact US|</Link>
        </li>

        <li>
          <Link href="/profile"> |My Profile|</Link>
        </li>

        <li>
          <Link href="/cart"> |Cart|</Link>
        </li>

        <li>
          <Link href="/checkout"> |Checkout|</Link>
        </li>
      </ol>
    </>
  );
}
