import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import listAPI from "../utils/requests";

export default function Home({ props }) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>First Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      listAPI[genre]?.url || listAPI.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: JSON.parse(JSON.stringify(request)),
    },
  };
}
