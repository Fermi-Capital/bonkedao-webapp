import { Box, Button, Flex, Group, SimpleGrid, Title } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";

const Borrowing: FC = () => {
  return (
    <Box
      p={6}
      mb={12}
      style={{
        background:
          "linear-gradient(280deg, rgba(34, 139 ,230, 0.3) 20%, rgba(34, 139 ,230, 0.1) 40%)",
      }}
    >
      <Flex align="center" justify="space-between">
        <Title order={3}>Borrowing Options</Title>
        <Group>
          <Button
            mb={4}
            color="blue"
            variant="light"
            component="a"
            href="https://app.frakt.xyz/borrow"
            rightIcon={
              <Image
                alt="frakt-nft-lending"
                src="/images/frakt.svg"
                width={20}
                height={20}
              />
            }
          >
            Frakt
          </Button>
          <Button
            mb={4}
            color="blue"
            variant="light"
            component="a"
            href="https://sharky.fi/borrow"
            rightIcon={
              <Image
                alt="frakt-nft-lending"
                src="/images/sharky.svg"
                width={20}
                height={20}
              />
            }
          >
            Sharky
          </Button>
        </Group>
      </Flex>

      <SimpleGrid cols={2}></SimpleGrid>
    </Box>
  );
};

export default Borrowing;
