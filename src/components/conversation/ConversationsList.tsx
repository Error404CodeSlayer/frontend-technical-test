import useGetConversation from "../../hooks/useGetConversation";
import { Conversation } from "../../types/conversation";
import { User } from "../../types/user";
import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";

interface ConversationsListProps {
  user: User;
}

const ConversationsList: React.FC<ConversationsListProps> = ({ user }) => {
  const { conversations, isLoading, error } = useGetConversation(user.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  const getConversationIdForUser = (
    currentUser: string,
    conversations: Conversation[]
  ) => {
    const conversationsWithUserName: {
      userName: string;
      conversationId: number;
    }[] = [];

    for (const conversation of conversations) {
      if (currentUser === conversation.recipientNickname) {
        conversationsWithUserName.push({
          userName: conversation.senderNickname,
          conversationId: conversation.id,
        });
      } else {
        conversationsWithUserName.push({
          userName: conversation.recipientNickname,
          conversationId: conversation.id,
        });
      }
    }

    return conversationsWithUserName;
  };

  const conversationIdForUsers = getConversationIdForUser(
    user.nickname,
    conversations
  );

  return (
    <main className="flex flex-1 justify-center items-center w-full p-4">
      <div className="w-full min-w-[250px] max-w-[1200px] p-4 rounded-2xl bg-orange-50">
        {conversationIdForUsers.map((conversationIdForUser) => (
          <Link
            key={conversationIdForUser.conversationId}
            href={`/conversation/${conversationIdForUser.conversationId}`}
          >
            <div
              className="flex flex-raw justify-between items-center bg-orange-400 p-4 m-4 rounded-2xl"
              key={conversationIdForUser.conversationId}
            >
              <p className="text-white">{conversationIdForUser.userName}</p>
              <IconMessage color="white" width={32} height={32} />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ConversationsList;
