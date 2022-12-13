import Head from "next/head";
import Image from "next/image";
import { WeatherCard } from "components/WeatherCard";
import { GetForecastData } from "hooks/OpenWeather";
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
//   const posts = await getPosts()
//   return { props: { posts } }
// }

// function Posts(props) {
//   const { data } = useQuery('posts', getPosts, { initialData: props.posts })

//   // ...
// }
