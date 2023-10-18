import { useRouter } from "next/router";
import MessagesComponent from "../../components/messages/MessagesComponent";

const Conversation = () => {
    const router = useRouter();
    const conversationId = router.query.conversationId;

    return (
        <div className="flex min-h-screen flex-col justify-center px-2 min-w-[250px]">
            <MessagesComponent conversationId={conversationId}/>
        </div>
    )
}

export default Conversation;