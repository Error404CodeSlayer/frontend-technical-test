import useGetConversation from "../../hooks/useGetConversation";
import { User } from "../../types/user";
import ConversationItem from "./ConversationItem";

interface ConversationsListProps {
  user: User;
}

const ConversationsList: React.FC<ConversationsListProps> = ({ user }) => {
  const { conversations, isLoading, error } = useGetConversation(user.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!isLoading && error) {
    return <p>Nous rencontrons actuellement un problème technique nous serons de retour dans quelques instants.</p>;
  }

  return (
    conversations && (
      <main className="flex flex-1 justify-center items-center w-full p-4">
        <div className="w-full min-w-[250px] max-w-[1200px] p-4 rounded-2xl bg-orange-50">
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              userName={user.nickname}
              conversation={conversation}
            ></ConversationItem>
          ))}
        </div>
      </main>
    )
  );
};

export default ConversationsList;
