import React, { useState, useEffect } from 'react';
import { fetchData, postData } from '../../servises/fetchData';

export const useRegistration = () => {
    const [pos, setPos] = useState([]);

    const posUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/positions';
    const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
    const userUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

    useEffect(() => {
        fetchData(posUrl)
            .then(res => setPos(res.positions))
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSignUp = async data => {
        const resp = await fetchData(tokenUrl);

        return await postData(userUrl, data, resp.token);
    };

    return { pos, handleSignUp };
};
