import axios from "axios";
import { User } from "../types/user";
import { useEffect, useId, useState } from "react";

const useGetUser = (userId: string | string[]) => {
    const [user, setUser] = useState<User>(null);
    const [error, setError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (userId) {
            const fetchUser = async () => {
                try {
                    const user = await axios.get(`http://localhost:3005/users/${userId}`);
                    setUser(user.data);
                    setIsLoading(false);
                } catch(error) {
                    setError(error);
                    setIsLoading(false);
                }
            }
    
            fetchUser();
        }
    }, [userId])

    return { user, error, isLoading};
}

export default useGetUser;