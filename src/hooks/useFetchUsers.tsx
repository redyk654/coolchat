import { fetchUsers } from '@/apis/RGet';
import { CustomUser } from '@/interfaces/CustomUser';
import { useEffect, useState } from 'react'

export default function useFetchUsers() {
    // hook to fetch list of users except the current user
    const [listOfUsers, setListOfUsers] = useState<CustomUser[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        const fetchUsersList = async () => {
            setIsFetching(true);
            const data = await fetchUsers();
            setListOfUsers(data);
            setIsFetching(false);
        }

        fetchUsersList();
    }, []);

  return { listOfUsers, isFetching };
}
