import Image from "next/image";
import Header from "./header";
import Link from "next/link";

export default function Layout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Image
          src="/feed hunger logo b.png"
          alt="me"
          width="200"
          height="120"
        />
        <Link href="./home"> |Home|</Link>
        <Link href="./menu"> |Menu|</Link>
        <Link href={"./chefs"}>|Chefs|</Link>
        <Link href="./pages"> |Pages|</Link>
        <Link href="./blog"> |Blog|</Link>
        <Link href="./contact"> |Contact US|</Link>
        <Link href="./profile"> |My Profile|</Link>
        <Link href="./cart"> |Cart|</Link>
      </nav>
      {/* <Image src="/ico.png" alt="me" width="64" height="64" /> */}
      <main>
      </main>
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        FeedHunger @copyright (c) all rights reserved.
      </div>
    </>
  );
}
