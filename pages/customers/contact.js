import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    // <>
    // <Layout title = 'Contact'/>
    //   <h1>Contact</h1>
    // </>
    <>
      <Layout title="Contact">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact form */}
          <form className="flex-grow">
            <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 border p-2 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 border p-2 rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full border-gray-300 border p-2 rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">Send</button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-lg mb-2"><strong>Address:</strong> 123 Main St, Anytown USA</p>
            <p className="text-lg mb-2"><strong>Phone:</strong> 555-123-4567</p>
            <p className="text-lg mb-2"><strong>Email:</strong> info@example.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-facebook fa-2x"></i></a>
              <a href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
