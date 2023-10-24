import { style } from "@vanilla-extract/css";

export const trip = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr minmax(140px, max-content)",
  backgroundColor: "lightgray",
  alignItems: "center",
  justifyContent: "space-between",
  height: "50px",
  selectors: {
    "&:not(:first-child)": {
      marginTop: "8px",
    },
  },
  padding: "0 8px",
  borderRadius: "4px",
});

export const tripStatus = {
  Requested: style({ background: "lightgray" }),
  Booked: style({ background: "lightgreen" }),
  CheckedIn: style({ background: "orange" }),
};
