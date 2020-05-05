import React, { useEffect, useState } from 'react';

export const useUsers = (fetchList, addUsers, users, totalUsers) => {
    const [page, setPage] = useState(1);
    const disabled = users.length === totalUsers;

    const handleAdd = () => {
        let p = disabled ? 1 : page + 1;
        setPage(p);
        addUsers(p, 6);
    };

    useEffect(() => {
        fetchList();

    }, []);
    return { disabled, handleAdd };
};
