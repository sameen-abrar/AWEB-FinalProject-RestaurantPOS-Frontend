// import Image from "next/image";
// import Header from "./header";
// import Link from "next/link";

// export default function Layout(props) {
//   return (
//     <>
//       <Header title={props.title} />
//       <nav>
//         <Image
//           src="/feed hunger logo b.png"
//           alt="me"
//           width="200"
//           height="120"
//         />
//         <Link href="./home"> |Home|</Link>
//         <Link href="./menu"> |Menu|</Link>
//         <Link href={"./chefs"}>|Chefs|</Link>
//         <Link href="./pages"> |Pages|</Link>
//         <Link href="./blog"> |Blog|</Link>
//         <Link href="./contact"> |Contact US|</Link>
//         <Link href="./profile"> |My Profile|</Link>
//         <Link href="./cart"> |Cart|</Link>
//       </nav>
//       {/* <Image src="/ico.png" alt="me" width="64" height="64" /> */}
//       <main></main>

//       {/* <footer>
//         <div style={{ position: "", bottom: -100, width: "100%" }}>
//         FeedHunger @copyright (c) all rights reserved.
//         </div>
//       </footer> */}
//     </>
//   );
// }

import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav className="bg-red-500">
        <div className="flex justify-center items-center gap-4 py-4">
          <Link href="./home">
            <Image
              src="/feed hunger logo b.png"
              alt="me"
              width="200"
              height="120"
            />
          </Link>
          <Link href="./home">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Home
            </p>
          </Link>
          <Link href="./menu">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Menu
            </p>
          </Link>
          <Link href="./chefs">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Chefs
            </p>
          </Link>
          <Link href="./pages">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Pages
            </p>
          </Link>
          <Link href="./blog">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Blog
            </p>
          </Link>
          <Link href="./contact">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Contact Us
            </p>
          </Link>
          <Link href="./profile">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              My Profile
            </p>
          </Link>
          <Link href="./cart">
            <p className="text-white font-semibold hover:text-gray-300 transition duration-300 ease-in-out">
              Cart
            </p>
          </Link>
        </div>
      </nav>
      <main>{props.children}</main>
      {/* Add your footer here */}
    </>
  );
}
