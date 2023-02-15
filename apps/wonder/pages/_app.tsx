import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Andres Rivera - wonder!</title>
        <link rel="stylesheet" href="https://use.typekit.net/cis0lln.css"></link>
        <meta name="description" content="Sitio web creado para prueba técnica en Wonder travel, realizado por @bySebastean"></meta>
        <meta name="application-name" content="PWA App" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content="Best PWA App in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/x-icon" href="/assets/icons/logo-ico-04.jpg"/>

        <link rel="apple-touch-icon" href="/assets/icons/logo-ico-04.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/logo-ico-02.jpg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/logo-ico-01.jpg" />
        <link rel="apple-touch-icon" sizes="167x167" href="/assets/icons/logo-ico-03.jpg" />

        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/logo-ico-04.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/logo-ico-05.jpg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://wonder-peach.vercel.app/" />
        <meta name="twitter:title" content="PWA App" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta name="twitter:image" content="https://wonder-peach.vercel.app/assets/icons/logo-ico-01.jpg" />
        <meta name="twitter:creator" content="@bysebastean" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PWA App" />
        <meta property="og:description" content="Best PWA App in the world" />
        <meta property="og:site_name" content="PWA App" />
        <meta property="og:url" content="https://wonder-peach.vercel.app/" />
        <meta property="og:image" content="https://wonder-peach.vercel.app/assets/icons/logo-ico-01.jpg" />

        {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
        <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />

      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
