import Head from 'next/head'
import script from "next/script"
import styles from '../styles/Home.module.css'
import Header from '../Components/Header'
import Layout from '../Components/Layout'
import Footer from '../Components/Footer'
import ProductModal from '../Components/ProductModal'

export default function Home() {
  return (
    <>
      <Header/>

      <Layout/>

      <Footer/>

      <ProductModal/>
    </>
  )
}
