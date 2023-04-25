import { createStyles, keyframes } from "@mantine/core";

// Export animation to reuse it in other components
export const slideInRight = keyframes({
  "0%": {
    transform: "translateY(100%)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 100,
  },
});

export const useStyles = createStyles(() => ({
  slideIn: {
    animation: `${slideInRight} 1.5s ease-in-out`,
  },
}));
