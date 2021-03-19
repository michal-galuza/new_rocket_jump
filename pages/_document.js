import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/favicon/safari-pinned-tab.svg"
            color="#333333"
          />
          <meta name="msapplication-TileColor" content="#333333" />
          <meta name="theme-color" content="#333333" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
