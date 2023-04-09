import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Checkout() {
  return (
    <>
    <Layout title = 'Checkout'/>
      <h1>Checkout</h1>
      all the items user selected to order with their bill calculated
    </>
  )
}
