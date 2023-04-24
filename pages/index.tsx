import Head from 'next/head'
import Image from "next/image";
import axios from "axios";



export default function Home() {
  return (
    <>
      <Head>
        <title>Chirpy - Your Social Network for Short Messages</title>
        <meta
          name="description"
          content="Chirpy is a social network that lets you share short messages with your friends and followers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}



export const getServerSideProps = async () => {
  const response = await axios.get();
};
