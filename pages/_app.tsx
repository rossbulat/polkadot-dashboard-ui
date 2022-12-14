import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.scss";
import "./styles.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
