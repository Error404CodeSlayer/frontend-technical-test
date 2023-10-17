import ConversationComponent from "../../components/conversation/ConversationComponent";
import { useRouter } from "next/router";

const Conversation = () => {
    const router = useRouter();
    const userId = router.query.usersId;

    return (
         <div className="flex min-h-screen flex-col justify-center px-2 min-w-[250px]">
            <ConversationComponent userId={userId}></ConversationComponent>
        </div>
    );
}

export default Conversation;