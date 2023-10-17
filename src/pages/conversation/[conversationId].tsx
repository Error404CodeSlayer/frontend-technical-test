import { useRouter } from "next/router";
import MessagesList from "../../components/messages/MessagesList";

const Conversation = () => {
    const router = useRouter();
    const conversationId = router.query.conversationId;

    return (
        <div className="flex min-h-screen flex-col justify-center px-2 min-w-[250px]">
            <MessagesList conversationId={conversationId}/>
        </div>
    )
}

export default Conversation;