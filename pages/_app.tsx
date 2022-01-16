import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import getLibrary from "../getLibrary";
import "../styles/globals.css";
import { ThemeProvider, Banner, Flex, } from 'pcln-design-system'
import NavBar from "../components/NavBar";
import Link from "next/link";

function NextWeb3App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider>
        <NavBar />
        <Component {...pageProps}/>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

export default NextWeb3App;
