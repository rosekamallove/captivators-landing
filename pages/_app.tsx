import { AppProps } from "next/app";
import ScrollObserver from "../components/scroll-observer";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <div className="m-0 p-0 font-[Raleway]">
        <Component {...pageProps} />
      </div>
    </ScrollObserver>
  );
}

export default MyApp;
