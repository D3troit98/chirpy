import Head from 'next/head'
import Image from "next/image";
import axios from "axios";
import { Video } from "@/types";
import NoResults from "@/components/NoResults";
import VideoCard from "@/components/VideoCard";
interface IProps {
  videos: Video[];
}

export default function Home({ videos }: IProps) {
  console.log(videos);
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
        <div className="flex flex-col gap-10 videos h-full">
          {videos.length ? (
            videos.map((video: Video) => (
              <VideoCard post={video} key={video._id} />
            ))
          ) : (
            <NoResults text={"No Videos"} />
          )}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return { props: { videos: data } };
};
