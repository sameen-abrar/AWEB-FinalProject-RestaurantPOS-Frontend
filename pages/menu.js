import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Menu() {
  return (
    <>
    <Layout title = 'Menu'/>
      <h1>Menu</h1>

      <fieldset>
        <legend>Item 1:</legend>
        Details and Description
      </fieldset>
      
      <fieldset>
        <legend>Item 2:</legend>
        Details and Description
      </fieldset>

      <fieldset>
        <legend>Item 3:</legend>
        Details and Description
      </fieldset>

      <fieldset>
        <legend>Item 4:</legend>
        Details and Description
      </fieldset>
      
    </>
  )
}
