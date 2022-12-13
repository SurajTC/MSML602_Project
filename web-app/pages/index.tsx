import Head from "next/head";
import { WeatherCard } from "components/WeatherCard";
import Time from "components/Time";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather Forecasting Using Machine Learning"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Time />
        <WeatherCard />
      </main>

      <footer>
        <p>This is footer</p>
      </footer>
    </div>
  );
}

// export async function getStaticProps() {
//   console.log("hello");
//   // const posts = await getPosts()
//   return { props: {} };
// }

// function Posts(props) {
//   const { data } = useQuery('posts', getPosts, { initialData: props.posts })

//   // ...
// }
