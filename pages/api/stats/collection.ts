import client from "../apollo";
import { gql } from "@apollo/client";

export default async function collection(req: Request, res: Response) {
  const resp = await client.query({
    query: gql`
      query CollectionsStats(
        $slugs: [String!]
        $sortBy: String
        $page: Int
        $limit: Int
        $slugsDisplay: [String!]
      ) {
        allCollections(
          slugs: $slugs
          sortBy: $sortBy
          page: $page
          limit: $limit
          slugsDisplay: $slugsDisplay
        ) {
          total
          collections {
            slug
            statsOverall {
              floor1h
              floor24h
              floor7d
              floorPrice
              numListed
              numMints
              priceUnit
              sales1h
              sales24h
              sales7d
              volume1h
              volume24h
              volume7d
            }
            statsTSwap {
              buyNowPrice
              nftsForSale
              numMints
              priceUnit
              sales7d
              sellNowPrice
              solDeposited
              volume7d
            }
            tswapTVL
            slugMe
            meFloorPrice
            firstListDate
            name
          }
        }
      }
    `,
    variables: {
      slugsDisplay: ["doge_"],
    },
  });

  const data = resp?.data.allCollections?.collections[0].statsOverall;
  return (
    res
      // @ts-ignore
      .status(200)
      .json({ ...data, loading: resp.loading, error: resp.error })
  );
}
