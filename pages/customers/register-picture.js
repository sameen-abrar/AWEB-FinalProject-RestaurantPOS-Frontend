import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";
import Header from "../components/header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterPicture() {
  return (
    // <>
    //   {/* <Layout title = 'Registration'/> */}
    //   <Header title={"SignUp"}></Header>
    //   <fieldset>
    //     <legend>Registration</legend>
    //     <form>
    //       <label>
    //         Upload picture:
    //         <input type="file" name="profilePicture" />
    //         <br />
    //         <input type="submit" value={"Confirm"} />
    //         <Link href={'/'}>Skip</Link>
    //       </label>
    //       <br />
    //     </form>
    //   </fieldset>
    // </>
    <>
      <Header title={"SignUp"}></Header>
      <fieldset className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <legend className="text-lg font-medium text-gray-800 mb-4">
          Registration
        </legend>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="profilePicture"
            >
              Upload picture:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              name="profilePicture"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:shadow-lg"
              type="submit"
              value={"Confirm"}
            />
            <Link
              href={"/"}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Skip
            </Link>
          </div>
        </form>
      </fieldset>
    </>
  );
}
