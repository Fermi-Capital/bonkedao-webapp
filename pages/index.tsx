import Head from "next/head";

import Image from "next/image";
import { Header, Row, Text } from "@app/src/components";

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
      <main>
        <Header>
          <div>
            <a
              style={{ marginRight: "10px" }}
              href="https://twitter.com/BonkeDAO"
            >
              <Image
                style={{ verticalAlign: "middle" }}
                alt="twitter"
                src="/images/twitter.svg"
                width={25}
                height={25}
              />
            </a>
            <a href="https://discord.gg/bonkedao">
              <Image
                style={{ verticalAlign: "middle" }}
                alt="discord"
                src="/images/discord.svg"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div>
            <Text px={2} size={"h5"}>
              Join
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
