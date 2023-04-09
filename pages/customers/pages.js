import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Pages() {
  return (
    <>
    <Layout title = 'Pages'/>
      <h1>Pages</h1>
      Page Style Menu List
    </>
  )
}
