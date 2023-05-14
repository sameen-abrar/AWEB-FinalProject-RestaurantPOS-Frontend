// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Layout from "../components/layout";

// const inter = Inter({ subsets: ['latin'] })

// export default function Blog() {
//   return (
//     <>
//     <Layout title = 'Blog'/>
//       <h1 className="text-3xl font-bold underline">Blog</h1>
//     </>
//   )
// }

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Layout title="Blog" />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold underline my-8">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/blogger-taking-picture-delicious-grilled-260nw-1726361857.webp"
              alt="Blog Post 1"
              width={400}
              height={250}
              objectFit="cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold mb-2">Blog Post Title 1</h2>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eleifend enim et lobortis fringilla. Duis pretium ante augue,
                vitae posuere tellus pharetra ac. Vivamus pulvinar, metus eget
                gravida consectetur, mi augue vestibulum urna, sit amet
                facilisis magna quam ut massa.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/brand_identity.webp"
              alt="Blog Post 2"
              width={400}
              height={250}
              objectFit="cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold mb-2">Blog Post Title 2</h2>
              <p className="text-gray-700 text-base">
                Sed laoreet aliquam metus ac iaculis. Vestibulum hendrerit augue
                ac massa mollis, vel tincidunt nisi lobortis. Nullam euismod
                quam eu aliquet vestibulum. Aenean vitae nisl at tellus
                malesuada pellentesque.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images.jpeg"
              alt="Blog Post 3"
              width={400}
              height={250}
              objectFit="cover"
            />
            <div className="px-4 py-2">
              <h2 className="text-xl font-bold mb-2">Blog Post Title 3</h2>
              <p className="text-gray-700 text-base">
                Proin eget tellus vestibulum, ultrices ex non, commodo mauris.
                Fusce sed tincidunt justo, sit amet tincidunt quam. Maecenas
                lacinia magna eu sem consequat, vel pulvinar tellus dictum. Sed
                elementum velit vel ullamcorper faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
