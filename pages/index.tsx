import Head from "next/head";

import Home from "@app/src/pages/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>BonkeDAO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Bonkedao" />
        {/* og */}
        <meta property="og:title" content="BonkeDAO" />
        <meta
          name="keywords"
          content="bonkedao, solana, blockchain, decentralized, cryptocurrency, NFTs, DAO, dao, bonk, tensor"
        ></meta>
        {/* <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        /> */}
        <meta property="og:image" content="/images/bonkedao-white-black.jpeg" />
        {/* // twitter */}
        <meta name="twitter:card" content="BonkeDAO" />
        <meta name="twitter:site" content="@BonkeDAO" />
        <meta name="twitter:title" content="BonkeDAO" />
        <meta name="twitter:description" content="" />
        <meta
          name="twitter:image"
          content="/images/bonkedao-white-black.jpeg"
        />
        {/* <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        /> */}
        <title>BonkeDAO</title>
        <meta name="BonkeDAO" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
