import {
    GET_USERS_FETCH_REQUEST,
    GET_USERS_FETCH_FAILURE,
    GET_USERS_FETCH_SUCCESS
} from "../../redux/types";

import {fetchUsers} from "../../servises/fetchData";


export const fetchList = () => dispatch => {
    dispatch({ type: GET_USERS_FETCH_REQUEST });
   fetchUsers()
        .then(result =>
            dispatch({
                type: GET_USERS_FETCH_SUCCESS,
                payload: { users: result.users, totalUsers: result.total_users}
            })
        )
        .catch(err => {
            dispatch({ type: GET_USERS_FETCH_FAILURE, err });
        });
};
