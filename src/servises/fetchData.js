
export const fetchUsers = (page = 1, num = 6) => {
    return fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${num}`
    ).then(response => response.json());
};

export const fetchData = url => {
    return fetch(url).then(response => response.json());;
};

// REGISTRATION FORM
const tokenUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/token';
const userUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

export const postData = (url, data, token) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            Token: token,
        },
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
        });
};


export const registerNewUser = async data => {
    const resp = await fetchData(tokenUrl);

    return await postData(userUrl, data, resp.token);
};

export const fetchNewUsers = async data => {
    await registerNewUser(data);

    return await fetchUsers();
};
