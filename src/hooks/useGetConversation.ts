import axios from "axios";
import { Conversation } from "../types/conversation";
import { useEffect, useState } from "react";

const useGetConversation = (userId: number) => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [error, setError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchConversation = async () => {
            try {
                const conversation = await axios.get(`http://localhost:3005/conversations/${userId}`);
                setConversations(conversation.data);
                setIsLoading(false);
            } catch(error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchConversation();
    }, [])

    return {conversations, isLoading, error};
}

export default useGetConversation;