import { styled } from "@app/stitches.config";

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  variants: {
    intent: {
      default: {
        backgroundColor: "$transparent",
      },
      none: {
        backgroundColor: "$grey",
      },
    },
    justify: {
      spaceBetween: {
        justifyContent: "space-between",
      },
      spaceAround: {
        justifyContent: "space-around",
      },
      spaceEvenly: {
        justifyContent: "space-evenly",
      },
      center: {
        justifyContent: "center",
      },
      flexStart: {
        justifyContent: "flex-start",
      },
      flexEnd: {
        justifyContent: "flex-end",
      },
    },
    align: {
      stretch: {
        alignItems: "stretch",
      },
      center: {
        alignItems: "center",
      },
      flexStart: {
        alignItems: "flex-start",
      },
      flexEnd: {
        alignItems: "flex-end",
      },
    },
    m: {
      1: {
        margin: "$1",
      },
      2: {
        margin: "$2",
      },
      3: {
        margin: "$3",
      },
    },
    p: {
      1: {
        padding: "$1",
      },
      2: {
        padding: "$2",
      },
      3: {
        padding: "$3",
      },
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

export default Column;
