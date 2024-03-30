import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      strict: true,
      name: "i7h.js",
      sourcemap: true,
      exports: "auto",
      plugins: [terser()],
    },
    {
      file: "dist/index.mjs",
      format: "esm",
      strict: true,
      name: "i7h.js",
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      strict: true,
      name: "i7h.js",
      sourcemap: true,
      plugins: [terser()],
    },
    {
      file: "dist/index.js",
      format: "umd",
      strict: true,
      name: "i7h.js",
      sourcemap: false,
    },
    {
      file: "dist/index.min.js",
      format: "umd",
      strict: true,
      name: "i7h.js",
      sourcemap: false,
      plugins: [
        terser({
          module: true,
        }),
      ],
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
