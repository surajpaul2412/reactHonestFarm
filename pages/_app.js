import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'
import Script from "next/script"
import VideoModal from '../Components/VideoModal'
import VideoModal2 from '../Components/VideoModal2'
import ThanksModal from '../Components/ThanksModal'
import ContactFormModal from '../Components/ContactFormModal'
import ProductModal from '../Components/ProductModal'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/assets/img/favicon.svg" />
        <title>Honest Farms</title>
      </Head>
      <Component {...pageProps} />

      <VideoModal />
      <VideoModal2 />
      <ThanksModal />
      <ContactFormModal />
      <ProductModal/>

      <div className="fixed-btm-top">
        <a href="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa-solid fa-angle-up"></i></a>
      </div>

      <Script src="/static/assets/js/jquery.js" async />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-beta.2/js/bootstrap.bundle.js" defer />
      <Script src="/static/assets/js/slick.min.js" async />
      <Script src="/static/assets/js/custom.js" async />
    </>
  )
}

export default MyApp
