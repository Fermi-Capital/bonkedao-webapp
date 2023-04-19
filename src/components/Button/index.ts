import { styled } from "@app/stitches.config";

const Button = styled("button", {
  //cursor changes to pointer when hovering over button
  cursor: "pointer",

  // variants for color and size
  variants: {
    //transparent background with no border
    transparent: {
      true: {
        backgroundColor: "transparent",
      },
    },
    outlined: {
      true: {
        border: "1px solid $manatee",
        borderRadius: "$1",
        backgroundColor: "transparent",
      },
    },
    intent: {
      disabled: {
        color: "$manatee",
        "&:hover": {
          color: "$davysGray",
        },
      },
      primary: {
        color: "$calmMidnight",
        "&:hover": {
          color: "$fancyBlue",
        },
      },
      success: {
        color: "$green",
        "&:hover": {
          color: "$lightGreen",
        },
      },
      danger: {
        color: "$red",
        "&:hover": {
          color: "$lightRed",
        },
      },
    },
    size: {
      small: {
        fontSize: "$1",
        padding: "$1",
      },
      large: {
        fontSize: "$3",
        padding: "$2",
      },
    },
  },
  // default values for color and size
  defaultVariants: {
    intent: "primary",
    size: "large",
  },
});

export default Button;
