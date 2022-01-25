import React from 'react';
import styles from '../../styles/Home.module.css'
import { AudioPlayer } from "../../components/AudioPlayer"
import Head from 'next/head'
export default function Play() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Audio Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <AudioPlayer />
      </main>
    </div>
  )
}
