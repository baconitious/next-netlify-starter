import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="../components/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Hi
        </p>
      </main>
    </div>
  )
}
