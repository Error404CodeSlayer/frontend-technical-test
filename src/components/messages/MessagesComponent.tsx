import MessagesList from "./MessagesList";

interface MessagesComponentProps {
  conversationId: string | string[];
}

const MessagesComponent: React.FC<MessagesComponentProps> = ({
  conversationId,
}) => {
  return (
    <>
      <div className="p-4 flex justify-center bg-orange-400 rounded-b-2xl w-100 min-w-[250px]">
        <h1 className="text-white text-2xl">Mes messages</h1>
      </div>
      <main className="flex flex-1 justify-center items-start w-full p-4">
        <MessagesList conversationId={conversationId} />
      </main>
    </>
  );
};

export default MessagesComponent;
