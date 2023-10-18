import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
