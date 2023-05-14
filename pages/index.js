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
    // <>
    //   <Header title="Index" />
    //   <h1>Index</h1>

    //   <ol>
    //     <li>
    //       <Link href="/customers/login"> |Login|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/register"> |Register|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/register-userpass"> |register userpass|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/register-picture"> |Upload picture|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/home"> |Home|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/menu"> |Menu|</Link>
    //     </li>

    //     <li>
    //       <Link href={"/customers/chefs"}>|Chefs|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/pages"> |Pages|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/blog"> |Blog|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/contact"> |Contact US|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/profile"> |My Profile|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/cart"> |Cart|</Link>
    //     </li>

    //     <li>
    //       <Link href="/customers/checkout"> |Checkout|</Link>
    //     </li>
    //   </ol>
    // </>
    <>
    <Header title="Index" />
    <h1 className="text-center text-3xl font-bold mt-8 mb-4">Index</h1>

    <ul className="flex flex-col items-center space-y-2">
      <li>
        <Link href="/customers/login">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Login</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/register">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Register</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/register-userpass">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Register Userpass</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/register-picture">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Upload Picture</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/home">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Home</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/menu">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Menu</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/chefs">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Chefs</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/pages">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Pages</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/blog">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Blog</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/contact">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Contact Us</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/profile">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">My Profile</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/cart">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Cart</p>
        </Link>
      </li>

      <li>
        <Link href="/customers/checkout">
          <p className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">Checkout</p>
        </Link>
      </li>
    </ul>
  </>
  );
}
