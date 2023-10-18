import { useRouter } from "next/router";
import Head from "next/head";
import MessagesContainer from "../../components/messages/MessagesContainer";

const Conversation = () => {
    const router = useRouter();
    const conversationId = router.query.conversationId;

    return (
        <div className="flex min-h-screen flex-col justify-center min-w-[250px]">
            <Head>
                <title>Frontend Technical test - Leboncoin</title>
                <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
            </Head>
            <MessagesContainer conversationId={conversationId}/>
        </div>
    )
}

export default Conversation;