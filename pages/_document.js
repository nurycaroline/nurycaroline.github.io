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
        <title>NuryCaroline</title>
        <meta name="description" content="Nurielly\'s portfolio" />
        <meta
          name="keywords"
          content="NURY, NURIELLY, NURYCAROLINE, DEVELOPER, FRONT, FRONT-END, DESENVOLVIMENTO, MOBILE, REACT, JAVASCRIPT, REACT NATIVE, RN, HTML, CSS, JS"
        />
        <meta name="language" content="English" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://nurielly.dev/" />
        <meta property="og:title" content="Nurielly Caroline Brizola" />
        <meta property="og:site_name" content="NuryCaroline" />
        <meta property="og:description" content="Nurielly's portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/static/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />

        <meta property="og:type" content="article" />
        <meta property="article:author" content="nurycaroline" />
        <meta property="article:section" content="Nurielly's portfolio" />
        <meta property="article:tag" content="NURY, NURIELLY, NURYCAROLINE, DEVELOPER, FRONT, FRONT-END, DESENVOLVIMENTO, MOBILE, REACT, JAVASCRIPT, REACT NATIVE, RN, HTML, CSS, JS" />
        <meta property="article:published_time" content="date_time" />

        <Head>
          <link
            rel="shortcut icon"
            href="/static/favicon.png"
            type="image/png"
            sizes="32x32"
          />
          <script>
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1578346,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          </script>
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
