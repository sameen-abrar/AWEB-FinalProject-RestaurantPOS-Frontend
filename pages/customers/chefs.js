import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Chefs() {
  return (
    <>
    <Layout title = 'Chefs'/>
      <h1>Chefs</h1>
      <fieldset>
        <legend>Chef 1:</legend>
        Details and Description
      </fieldset>

      <fieldset>
        <legend>Chef 2:</legend>
        Details and Description
      </fieldset>

      <fieldset>
        <legend>Chef 3:</legend>
        Details and Description
      </fieldset>

      <fieldset>
        <legend>Chef 4:</legend>
        Details and Description
      </fieldset>
    </>
  )
}
