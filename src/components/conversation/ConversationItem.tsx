import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";
import { Conversation } from "../../types/conversation";

interface ConversationItemProps {
    userName: string;
    conversation: Conversation;
}

const ConversationItem:React.FC<ConversationItemProps> = ({ 
    userName,
    conversation 
}) => {
  return (
    <Link key={conversation.id} href={`/conversation/${conversation.id}`}>
      <div className="flex flex-raw justify-between items-center bg-orange-400 p-4 m-4 rounded-2xl">
        <p className="text-white">
          {userName === conversation.recipientNickname
            ? conversation.senderNickname
            : conversation.recipientNickname}
        </p>
        <IconMessage color="white" width={32} height={32} />
      </div>
    </Link>
  );
};

export default ConversationItem;
