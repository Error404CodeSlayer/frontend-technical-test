import axios from "axios";
import { User } from "../types/user";
import { useEffect, useState } from "react";

const useGetUser = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await axios.get('http://localhost:3005/users');
                setUsers(users.data);
                setIsLoading(false);
            } catch(error) {
                setError(error);
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, [])

    return { users, error, isLoading};
}

export default useGetUser;