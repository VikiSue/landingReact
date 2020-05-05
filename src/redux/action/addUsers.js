import {
    ADD_USERS_REQUEST,
    ADD_USERS_FAILURE,
    ADD_USERS_SUCCESS
} from "../../redux/types";

import {fetchUsers} from "../../servises/fetchData";


export const addUsers = (page, num) => dispatch => {
    dispatch({ type: ADD_USERS_REQUEST });
    fetchUsers(page, num)
        .then(result =>
            dispatch({
                type: ADD_USERS_SUCCESS,
                payload: { users: result.users, totalUsers: result.total_users}
            })
        )
        .catch(err => {
            dispatch({ type: ADD_USERS_FAILURE, err });
        });
};
