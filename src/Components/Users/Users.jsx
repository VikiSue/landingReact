import React from 'react';
import User from './User';
import { useUsers } from './useUsers';
import { connect } from 'react-redux';
import { fetchList } from '../../redux/action/fetchList';
import { addUsers } from '../../redux/action/addUsers';

const Users = ({ fetchList, addUsers, users, totalUsers, isLoading }) => {
    const { disabled, handleAdd } = useUsers(fetchList, addUsers, users, totalUsers);
    return (
        <section className="users">
            <div className="container">
                <h2 className="title1">Our cheerful users</h2>
                <p>Attention! Sorting users by registration date</p>
                <ul className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3  row-cols-1 list-unstyled mt-xl-5 mt-lg-5 mt-md-5 mt-sm-3 mt-3">
                    {users.map(item => (
                        <li className="user col" key={item.id}>
                            <User item={item} />
                        </li>
                    ))}
                </ul>
                <button
                    className={disabled ? 'hidden' : 'button users__button'}
                    disabled={isLoading}
                    onClick={handleAdd}
                >
                    Show more
                </button>
            </div>
        </section>
    );
};

const UsersContainer = connect(
    state => ({
        users: state.users.users,
        totalUsers: state.users.totalUsers,
        isLoading: state.users.isLoading,
    }),
    { fetchList, addUsers }
)(Users);
export default UsersContainer;
