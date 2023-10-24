import { style } from "@vanilla-extract/css";

export const deleteTripStyle = style({
  backgroundColor: "red",
  color: "white",
  borderRadius: "5px",
  padding: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "darkred",
  },
  ":disabled": {
    opacity: 0.5,
  },
});
