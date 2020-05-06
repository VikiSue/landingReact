import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { onUsersFetch } from '../reducers/onUsersFetch';
import { ADD_NEW_USER_SUCCESS } from '../types';

export const rootReducer = combineReducers({
    users: onUsersFetch,
    form: formReducer.plugin({
        registration: (state, action) => {
            switch (action.type) {
                case ADD_NEW_USER_SUCCESS:
                    return undefined;
                default:
                    return state;
            }
        },
    }),
});
