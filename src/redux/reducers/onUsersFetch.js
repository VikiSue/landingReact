import {
    GET_USERS_FETCH_REQUEST,
    GET_USERS_FETCH_FAILURE,
    GET_USERS_FETCH_SUCCESS,
    ADD_USERS_REQUEST,
    ADD_USERS_FAILURE,
    ADD_USERS_SUCCESS,
    ADD_NEW_USER_REQUEST,
    ADD_NEW_USER_FAILURE,
    ADD_NEW_USER_SUCCESS,
    HIDE_MODAL,
} from '../../redux/types';

const initialValue = {
    totalUsers: '',
    totalPages: '',
    users: [],
    isLoading: false,
    showModal: false,
};
export const onUsersFetch = (state = initialValue, action) => {
    switch (action.type) {
        case GET_USERS_FETCH_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_USERS_FETCH_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                totalUsers: action.payload.totalUsers,
                isLoading: false,
            };
        case GET_USERS_FETCH_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case ADD_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_USERS_SUCCESS:
            const oldUsers = [...state.users];
            const newUsers = [...oldUsers, ...action.payload.users];
            return {
                ...state,
                users: [...newUsers],
                totalUsers: action.payload.totalUsers,
                isLoading: false,
            };
        case ADD_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case ADD_NEW_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_NEW_USER_SUCCESS:
            return {
                ...state,
                users: action.payload.users,
                totalUsers: action.payload.totalUsers,
                isLoading: false,
                showModal: true,
            };
        case ADD_NEW_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case HIDE_MODAL: {
            return {
                ...state,
                showModal: false,
            };
        }
        default:
            return state;
    }
};
