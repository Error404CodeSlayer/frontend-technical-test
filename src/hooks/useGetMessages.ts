import axios from "axios";
import { Message } from "../types/message";
import { useEffect, useState } from "react";

const useGetMessages = (conversationId: string | string[], message: string) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchConversation = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 0.0000000000001));

                const conversation = await axios.get(`http://localhost:3005/messages/${conversationId}`);
                setMessages(conversation.data);
                setIsLoading(false);
            } catch(error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchConversation();
    }, [message, conversationId])

    return {messages, isLoading, error};
}

export default useGetMessages;