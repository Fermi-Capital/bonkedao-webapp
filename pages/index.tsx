import Head from "next/head";

import Image from "next/image";
import { Header, Row, Text } from "@app/src/components";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>A Movement</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Bonkedao NFT" />
        {/* og */}
        <meta property="og:title" content="Bonkedao NFT" />
        {/* <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        /> */}
        <meta property="og:image" content="/images/bonkedao-orange.png" />
        {/* // twitter */}
        <meta name="twitter:card" content="Bonkedao movement" />
        <meta name="twitter:site" content="@BonkeDAO" />
        <meta name="twitter:title" content="Bonkedao" />
        <meta name="twitter:description" content="A movement" />
        <meta name="twitter:image" content="/images/bonkedao-orange.png" />
        {/* <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        /> */}
        <title>Bonkedao</title>
        <meta name="bonkedao" content="noindex,nofollow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header>
          <a href="https://twitter.com/BonkeDAO">
            <Image
              alt="twitter"
              src="/images/twitter.svg"
              width={25}
              height={25}
            />
          </a>
          <div>
            <Text px={2} size={"h5"}>
              Join the movement
            </Text>
            <a
              style={{ marginRight: "5px" }}
              href="https://www.tensor.trade/trade/doge_"
            >
              <Image
                style={{ verticalAlign: "middle" }}
                alt="tensor"
                src="/images/tensor.svg"
                width={25}
                height={25}
              />
            </a>
            <a href="https://magiceden.io/marketplace/doge_?checkoutTab=buy">
              <Image
                style={{ verticalAlign: "middle" }}
                alt="magic-eden"
                src="/images/magiceden.svg"
                width={25}
                height={25}
              />
            </a>
          </div>
        </Header>
        <div>
          <video
            style={{ width: "100vw", height: "100vh" }}
            autoPlay
            playsInline
            muted
            src={require("../public/mp4s/bonkedao-intro.mp4")}
          />
        </div>
        {/* <Image alt="Bonkedao" src="/images/bonkedao-white-black.jpeg" fill /> */}
      </main>
    </>
  );
};

export default HomePage;
