// // using tensor graphql api, pull all listed nfts for slug _doge and format to

// import { gql } from "@apollo/client";
// import client from "../apollo";

// // return the highest price for each nft trait in the collection
// export default async function handler(req, res) {
//   const { slug } = req.query;
//   const { data } = await client.query({
//     query: gql`
//       query GetCollection($slug: String!) {
//         collection(slug: $slug) {
//           nfts {
//             name
//             tokenId
//             traits {
//               traitType
//               value
//             }
//             orders(first: 1, orderBy: "currentPrice", orderDirection: desc) {
//               currentPrice {
//                 amount
//               }
//             }
//           }
//         }
//       }
//     `,
//     variables: {
//       slug,
//     },
//   });
//   const nfts = data.collection.nfts;
//   const traits = {};
//   nfts.forEach((nft) => {
//     nft.traits.forEach((trait) => {
//       if (!traits[trait.traitType]) {
//         traits[trait.traitType] = [];
//       }
//       traits[trait.traitType].push({
//         name: nft.name,
//         tokenId: nft.tokenId,
//         value: trait.value,
//         price: nft.orders[0].currentPrice.amount,
//       });
//     });
//   });
//   const highestPrice = {};
//   Object.keys(traits).forEach((traitType) => {
//     const traitValues = traits[traitType];
//     traitValues.sort((a, b) => b.price - a.price);
//     highestPrice[traitType] = traitValues[0];
//   });
//   res.status(200).json(highestPrice);
// }
