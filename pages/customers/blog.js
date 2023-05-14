import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from "../components/layout";

const inter = Inter({ subsets: ['latin'] })

export default function Blog() {
  return (
    <>
    <Layout title = 'Blog'/>
      <h1 className="text-3xl font-bold underline">Blog</h1>
    </>
  )
}
