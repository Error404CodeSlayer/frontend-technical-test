import useGetUser from "../../hooks/useGetUser";
import ConversationsList from "./ConversationsList";

interface ConversationComponentProps {
    userId: string | string[];
}

const ConversationComponent: React.FC<ConversationComponentProps> = ({
    userId
}) => {
    const year = new Date().getFullYear()

    const {user, error, isLoading} = useGetUser(userId);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <>
            <div className="p-4 flex justify-center bg-orange-400 rounded-b-2xl w-100 min-w-[250px]">
                <h1 className="text-white text-2xl">{user.nickname}</h1>
            </div>
            <main className="flex flex-1 justify-center items-center w-full p-4">
                <ConversationsList user={user}/>
            </main>
        </>
    );
}

export default ConversationComponent;