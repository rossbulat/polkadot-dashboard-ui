import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.tsx",
  output: [
    {
      file: "dist/index.tsx",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css", ".scss"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
  external: [
    "prop-types",
    "react",
    "react-dom",
    "@fortawesome/react-fontawesome",
    "framer-motion",
  ],
};
