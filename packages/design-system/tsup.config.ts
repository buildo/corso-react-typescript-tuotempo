import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

export default defineConfig({
  entryPoints: ["src/index.ts", "src/components/*"],
  format: "esm",
  sourcemap: true,
  splitting: true,
  clean: true,
  bundle: true,
  dts: true,
  // @ts-ignore
  esbuildPlugins: [vanillaExtractPlugin()],
});
