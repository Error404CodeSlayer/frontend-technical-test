import type { ReactElement } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ConversationContainer from '../components/conversation/ConversationContainer'

const Home = ():ReactElement => {
  
  return (
    <div className="flex min-h-screen flex-col justify-center px-2 min-w-[250px]">
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
      <ConversationContainer/>
    </div>
  )
}

export default Home