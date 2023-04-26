import { useQuery } from "@apollo/client";
import { GET_COLLECTION_STATS } from "@app/graphql/collectionStats";
import { BarChartIcon } from "@radix-ui/react-icons";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Progress,
  SimpleGrid,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { isUndefined } from "lodash";
import { FC, useMemo } from "react";

const CollectionStats: FC = () => {
  const { data, loading, error } = useQuery(GET_COLLECTION_STATS, {
    variables: {
      slugsDisplay: ["doge_"],
    },
  });

  const renderStats = useMemo(() => {
    if (!isUndefined(data)) {
      const { floorPrice, floor24h, volume24h, sales24h, numListed, numMints } =
        data?.allCollections?.collections[0].statsOverall;
      return (
        <Box
          p={6}
          style={{
            background:
              "linear-gradient(280deg, rgba(16, 111, 52, 0.3) 20%, rgba(13, 74, 36, 0.2) 40%)",
          }}
        >
          <Flex align="center" justify="space-between">
            <Title order={3}>Collection Stats</Title>
            <Button
              mb={4}
              color="green"
              variant="light"
              component="a"
              href="https://www.tensor.trade/trade/doge_"
              rightIcon={<BarChartIcon />}
            >
              Trade
            </Button>
          </Flex>
          <Divider />

          <SimpleGrid cols={2}>
            <Text fw={700}>Floor Prcie:</Text>
            <Text fw={700} align="right">
              {/* <Badge size="lg" color={floor24h >= 0 ? "green" : "red"}>
                {(floor24h * 100).toFixed(2)}%
              </Badge>{" "} */}
              {(floorPrice / LAMPORTS_PER_SOL).toFixed(2)} SOL
            </Text>
            <Text fw={700}>Listed:</Text>
            <Text fw={700} align="right">
              {/* <Badge size="lg" color={floor24h >= 0 ? "green" : "red"}>
                {(floor24h * 100).toFixed(2)}%
              </Badge>{" "} */}
              {numListed}/{numMints} (
              {((numListed / numMints) * 100).toFixed(2)}%)
            </Text>
            <Text fw={700}>24hr Volume:</Text>
            <Text fw={700} align="right">
              {(volume24h / LAMPORTS_PER_SOL).toFixed(2)} SOL
            </Text>
            <Text fw={700}>24hr Sales:</Text>
            <Text fw={700} align="right">
              {sales24h}
            </Text>
          </SimpleGrid>
        </Box>
      );
    }
  }, [data]);
  return (
    <>
      {loading && (
        <>
          <Skeleton height={50} mb="lg" />
          <Skeleton height={50} radius="xl" />
          <Skeleton height={50} mt={6} radius="xl" />
          <Skeleton height={51} mt={6} width="70%" radius="xl" />
        </>
      )}
      {renderStats}
    </>
  );
};

export default CollectionStats;
