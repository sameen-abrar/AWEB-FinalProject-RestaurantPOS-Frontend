import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "../components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function NotFound() {
  return (
    <>
    <Layout title = 'Page Not Found'/>
      <h1>404 Not Found</h1>
      Please make sure the route is correct
    </>
  )
}
