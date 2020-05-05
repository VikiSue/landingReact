import {
    ADD_NEW_USER_REQUEST,
    ADD_NEW_USER_FAILURE,
    ADD_NEW_USER_SUCCESS
} from "../../redux/types";

import {fetchNewUsers} from "../../servises/fetchData";


export const registerUser = (data) => dispatch => {
    dispatch({ type: ADD_NEW_USER_REQUEST });

    fetchNewUsers(data)
        .then(result =>
            dispatch({
                type: ADD_NEW_USER_SUCCESS,
                payload: { users: result.users, totalUsers: result.total_users}
            })
        )
        .catch(err => {
            dispatch({ type: ADD_NEW_USER_FAILURE, err });
        });
};
