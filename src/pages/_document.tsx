import Document, { Html, Head, Main, NextScript } from "next/document";

export const MyDocument = () => {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
