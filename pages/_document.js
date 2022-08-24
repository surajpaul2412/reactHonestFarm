import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css" />
          <link rel="stylesheet" href="/static/assets/css/all.css" />
          <link rel="stylesheet" href="/static/assets/css/themify-icons.css" />
          <link rel="stylesheet" href="/static/assets/css/animate.css" />
          <link rel="stylesheet" href="/static/assets/css/slick.css" />
          <link rel="stylesheet" href="/static/assets/css/slick-theme.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        </Head>
        <body id="top-header">
          <Main />
          <NextScript />
          
        </body>
      </Html>
    )
  }
}

export default MyDocument