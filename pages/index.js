import Head from 'next/head'
import script from "next/script"
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
      <Header/>

      <Layout/>

      <Footer/>
    </>
  )
}
