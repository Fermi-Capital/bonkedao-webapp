import { Center, Flex, Grid, Title, useMantineTheme } from "@mantine/core";
import { theme } from "@app/src/styles/mantine-theme";
import Image from "next/image";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <Grid
      justify="center"
      align="center"
      px={8}
      style={{
        borderBottom: `1px solid ${theme.colors.gray[8]}`,
        margin: "auto 0",
      }}
    >
      <Grid.Col span={4}>
        <a style={{ marginRight: "10px" }} href="https://twitter.com/BonkeDAO">
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
      </Grid.Col>

      <Grid.Col span={4}>
        <Flex justify="center" align="center">
          <Title order={1}>BonkeDAO</Title>
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}>
        <Flex justify="flex-end" align="center">
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
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default Header;
