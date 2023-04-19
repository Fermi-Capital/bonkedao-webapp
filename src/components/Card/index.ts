import { styled } from "../../../stitches.config";

const Card = styled("div", {
  // card for basic layout
  display: "flex",
  alignItems: "center",
  backgroundColor: "$yellow",
  padding: "$6",
  variants: {
    rounded: {
      true: {
        borderRadius: "$3",
      },
    },
    column: {
      true: {
        flexDirection: "column",
      },
    },
    row: {
      true: {
        flexDirection: "row",
      },
    },
  },
  defaultVariants: {
    column: true,
  },
});

export default Card;
