import "../styles/tailwind.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
