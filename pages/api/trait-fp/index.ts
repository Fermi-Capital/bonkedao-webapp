// using tensor graphql api, pull all listed nfts for slug _doge and format to

import { gql } from "@apollo/client";
import client from "../apollo";

interface TraitStats {
  [key: string]: {
    [key: string]: {
      n: number;
      p: number;
    };
  };
}

interface TraitMeta {
  [key: string]: {
    [key: string]: {
      n: number;
      img: string;
    };
  };
}

interface Trait {
  numListed: number;
  numExisting: number;
  fp: number;
  img: string;
}

// return the highest price for each nft trait in the collection
export default async function handler(req, res) {
  const { data } = await client.query({
    query: gql`
      query AllCollections($slugsDisplay: [String!]) {
        allCollections(slugsDisplay: $slugsDisplay) {
          collections {
            traits {
              numMints
              rarityAlgos
              traitActive
              traitMeta
            }
            meFloorPrice
            imageUri
            name
          }
        }
      }
    `,
    variables: {
      slugsDisplay: ["doge_"],
    },
  });
  let traits: Trait[] = [];
  const traitsListed: TraitStats =
    data.allCollections.collections[0].traits.traitActive;
  const subTraitsListed = Object.keys(traitsListed);
  const traitsMeta: TraitMeta =
    data.allCollections.collections[0].traits.traitActive;
  const subTraitsMeta = Object.keys(traitsMeta);
  console.log(traitsListed, traitsMeta);

  // create new array of traits from subTraitsMeta and add in subTraitsListed
  // to the same object in the array where they match
  for (let i = 0; i < subTraitsMeta.length; i++) {
    for (let j = 0; j < subTraitsListed.length; j++) {
      if (subTraitsMeta[i] === subTraitsListed[j]) {
        traits.push({
          numListed: 34, // subTraitsListed[j].n,
          numExisting: 432, // subTraitsMeta[i].n,
          fp: 1, // subTraitsListed[j].p,
          img: "", // subTraitsMeta[i].img,
        });
      }
    }
  }

  // sort the array by fp
  traits.sort((a, b) => (a.fp > b.fp ? -1 : 1));

  res.status(200).json(traits);
}
