import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";
// optional: you can provide your cache as a first argument in createStylesServer function
const stylesServer = createStylesServer();

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.cdnfonts.com/css/sf-ui-display"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // Add your app specific logic here

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }
}
