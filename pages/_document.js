import Document, { Html, Head, Main, NextScript } from 'next/document'
import script from "next/script"
import VideoModal from '../Components/VideoModal'
import ThanksModal from '../Components/ThanksModal'
import ContactFormModal from '../Components/ContactFormModal'

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
          <link rel="icon" href="/static/assets/img/favicon.svg" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/css/bootstrap.css" />
          <link rel="stylesheet" href="/static/assets/css/all.css" />
          <link rel="stylesheet" href="/static/assets/css/themify-icons.css" />
          <link rel="stylesheet" href="/static/assets/css/animate.css" />
          <link rel="stylesheet" href="/static/assets/css/slick.css" />
          <link rel="stylesheet" href="/static/assets/css/slick-theme.css" />
          <link rel="stylesheet" href="/static/assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/static/assets/css/owl.theme.default.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        </Head>
        <body id="top-header">
          <Main />
          <NextScript />
          <VideoModal />
          <ThanksModal />
          <ContactFormModal />

          <div className="fixed-btm-top">
            <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa-solid fa-angle-up"></i></a>
          </div>

          <script src="/static/assets/js/jquery.js" async />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.js" defer />
          <script src="/static/assets/js/waypoint.js" defer />

          <script src="/static/assets/js/jquery.counterup.min.js" defer />
          <script src="/static/assets/js/slick.min.js" async />
          <script src="/static/assets/js/owl.carousel.min.js" async />
          <script src="/static/assets/js/contact.js" async />
          <script src="/static/assets/js/script.js" async />
          <script src="/static/assets/js/custom.js" async />
        </body>
      </Html>
    )
  }
}

export default MyDocument