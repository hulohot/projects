import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default App;
