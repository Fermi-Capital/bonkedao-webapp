import { FC, useMemo, useState } from "react";
import Image from "next/image";
import { Center, Flex, Text, Title } from "@mantine/core";

import { Header } from "@app/src/components";
import { CollectionStats } from "./components";
import { useStyles } from "./styles";

const Home: FC = () => {
  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const { classes } = useStyles();

  const renderVideo = useMemo(() => {
    if (!videoHasEnded) {
      return (
        <video
          onEnded={() => setVideoHasEnded(true)}
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          autoPlay
          playsInline
          muted
          src={require("../../../public/mp4s/bonkedao-intro.mp4")}
        />
      );
    }
    return (
      <Center className={classes.slideIn}>
        <Flex direction="column" w={550} m={16}>
          <Center>
            <Image
              alt="Bonkedao"
              src="/images/bonkedao-white-paw.png"
              width={100}
              height={100}
            />
          </Center>
          <Title order={4} mb={20}>
            {`Welcome to Solana Bonk Business (BonkeDAO), where limitless community potential flourishes within a collaborative atmosphere. Through the innovative trait based subDAO structure, esteemed Bonkes collaborate to shape the project's future. Embracing the Bonk spirit and guided by the motto "Culture > Caviar," we prioritize cultural values over profits, crafting a collaborative and inclusive environment. By providing a haven for those who have been wronged or scammed, we unite to foster collective growth and create a lasting, positive impact on Bonk Culture and the Solana Ecosystem.`}
          </Title>
          <CollectionStats />
        </Flex>
      </Center>
    );
  }, [classes.slideIn, videoHasEnded]);

  return (
    <main>
      <Header />
      {renderVideo}
      {/* <Image alt="Bonkedao" src="/images/bonkedao-white-black.jpeg" fill /> */}
    </main>
  );
};

export default Home;
