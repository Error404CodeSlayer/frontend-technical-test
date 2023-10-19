import type { ReactElement } from 'react'
import Head from 'next/head'
import ConversationContainer from '../components/conversation/ConversationContainer'

const Home = ():ReactElement => {
  
  return (
    <div className="flex min-h-screen flex-col justify-center min-w-[250px]">
      <Head>
        <title>Liste des Conversations - Leboncoin</title>
        <meta name="description" content="Liste des conversations sur leboncoin.fr"></meta>
      </Head>
      <ConversationContainer/>
    </div>
  )
}

export default Home