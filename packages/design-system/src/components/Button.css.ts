import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  borderRadius: "5px",
  padding: "5px",
  cursor: "pointer",
  ":disabled": {
    opacity: 0.5,
  },
});

export const buttonVariantStyle = {
  regular: style({}),
  negative: style({
    color: "white",
    backgroundColor: "red",
    ":hover": {
      backgroundColor: "darkred",
    },
  }),
};
