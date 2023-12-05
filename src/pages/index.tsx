import Banner from "@/components/Home/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner />
        <div className="flex w-[96%] mx-auto my-1">

        </div>
      </div>
    </>
  );
}
