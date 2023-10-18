import type { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConversationComponent from '../components/conversation/ConversationComponent'
import { getLoggedUserId } from '../utils/getLoggedUserId'

const Home = ():ReactElement => {
  const userId: number = getLoggedUserId();
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
      <ConversationComponent userId={userId.toString()}/>
    </div>
  )
}

export default Home