import { styled } from "@app/stitches.config";

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignContent: "center",
  flexWrap: "wrap",
  width: "100%",

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
    mb: {
      1: {
        marginBottom: "$1",
      },
      2: {
        marginBottom: "$2",
      },
      3: {
        marginBottom: "$3",
      },
    },
    mr: {
      1: {
        marginRight: "$1",
      },
      2: {
        marginRight: "$2",
      },
      3: {
        marginRight: "$3",
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

export default Row;
