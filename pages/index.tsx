import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  console.log("Apna env:", process.env.NEXT_PUBLIC_TT)
  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      Apna ENV: {process.env.NEXT_PUBLIC_TT}
    </div>
  )
}
