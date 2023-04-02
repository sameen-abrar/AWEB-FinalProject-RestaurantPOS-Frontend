import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from './components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  return (
    <>
    <Layout title = 'Profile'/>
      <h1>Profile</h1>
      User Details //editable and Profile picture can be updated
    </>
  )
}
