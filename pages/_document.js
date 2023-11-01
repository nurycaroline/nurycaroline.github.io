import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>NuryCaroline Portfolio - Freelancer Developer</title>
          <meta
            name="description"
            content="NuryCaroline Portfolio - Mobile and Web Freelancer Developer - HTML CSS JavaScript React"
          />
          <meta
            name="keywords"
            content="front-end, desenvolvedor front-end, develope front end, web developer, web mobile, nury front end, nurycaroline, nury, dev, dev front-end, portfolio"
          />

          <meta name="language" content="English" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"></meta>
          <link rel="canonical" href="https://nurielly.dev" />


          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content="https://www.nurielly.dev/" />
          <meta
            property="og:title"
            content="NuryCaroline Portfolio - Freelancer Developer"
          />
          <meta
            property="og:site_name"
            content="NuryCaroline Portfolio - Freelancer Developer"
          />
          <meta
            property="og:description"
            content="NuryCaroline Portfolio - Freelancer Developer"
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/static/og-image.jpg" />
          <meta property="og:image:type" content="image/jpeg" />

          <link
            rel="shortcut icon"
            href="/static/favicon.png"
            type="image/png"
            sizes="32x32"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
