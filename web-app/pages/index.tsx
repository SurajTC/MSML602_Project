import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather Forecasting Using Machine Learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is Heading</h1>
      </main>

      <footer>
        <p>This is footer</p>
      </footer>
    </div>
  )
}
