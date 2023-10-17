import useGetUser from "../hooks/useGetUsers";
import { IconUserCircle, IconChevronRight } from '@tabler/icons-react';

const ContactList = () => {
    const {users, error, isLoading} = useGetUser();

    if (isLoading) {
        <p>Loading...</p>
    }

    if (error) {
        <p>{error}</p>
    }

    return (
        <div className="w-full bg-orange-50 rounded-2xl p-4 min-w-[200px] max-w-[1200px]">
            {users.map((user) => (
             <div className="flex flex-raw justify-between items-center bg-orange-400 p-4 m-4 rounded-2xl" key={user.id}> 
                <IconUserCircle  color="white" width={32} height={32}/>
                <p className="text-white">{user.nickname}</p>
                <IconChevronRight color="white" width={32} height={32}/>
             </div>     
            ))}
        </div>
    );
}

export default ContactList;