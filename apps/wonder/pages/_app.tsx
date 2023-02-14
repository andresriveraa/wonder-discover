import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andres Rivera - wonder!</title>
        <link rel="stylesheet preload" href="https://use.typekit.net/cis0lln.css"></link>
        <meta name="description" content="Sitio web creado para prueba técnica en Wonder travel, realizado por @bySebastean"></meta>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
