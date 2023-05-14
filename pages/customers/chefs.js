import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

const chefs = [
  {
    name: "Head Chef",
    imgSrc: "/chef1.jpg",
    description:
      "Introducing Chef Brian Landek, the culinary genius behind our restaurant's delicious creations. With over 20 years of experience and a love for locally-sourced ingredients, he crafts unique and unforgettable flavors that will leave you wanting more. From seafood to desserts, his expertise shines through in every dish. Come and savor the magic of Chef Landek's cuisine today.",
  },
  {
    name: "Sous Chef 1",
    imgSrc: "/chef2.jpg",
    description:
      "Sous Chef Stacy Madison - A culinary genius with a passion for flavors and creativity. Her innovative approach to cooking is evident in every dish she creates, leaving diners amazed and satisfied.",
  },
  {
    name: "Sous Chef 2",
    imgSrc: "/chef3.jpg",
    description:
      "Introducing our Sous Chef, Philip Mathews. With his years of experience and a keen eye for detail, he brings his unique flair to every dish he creates. His culinary expertise and dedication to quality ensure that each meal is a masterpiece. Come taste his creations and experience the magic of his culinary talents.",
  },
];

export default function Chefs() {
  return (
    // <>
    //   <Layout title="Chefs" />
    //   <h1>Chefs</h1>
    //   <fieldset>
    //     <legend>Chef 1:</legend>
    //     Details and Description
    //   </fieldset>

    //   <fieldset>
    //     <legend>Chef 2:</legend>
    //     Details and Description
    //   </fieldset>

    //   <fieldset>
    //     <legend>Chef 3:</legend>
    //     Details and Description
    //   </fieldset>

    //   <fieldset>
    //     <legend>Chef 4:</legend>
    //     Details and Description
    //   </fieldset>
    // </>
    <>
      <Layout title="Chefs" />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-8 mb-16">Chefs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {chefs.map((chef) => (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={chef.imgSrc}
                alt={chef.name}
              />
              <div className="px-4 py-2">
                <h2 className="text-xl font-bold mb-2">{chef.name}</h2>
                <p className="text-gray-700 text-base">{chef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
