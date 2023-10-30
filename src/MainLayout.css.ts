import { style } from "@vanilla-extract/css";

export const mainLayout = style({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

export const header = style({
  display: "flex",
  height: "80px",
  backgroundColor: "powderblue",
  alignItems: "center",
  padding: "0 16px",
  flexShrink: 0,
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: "0 16px",
});
