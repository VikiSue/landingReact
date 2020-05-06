import React from 'react';
import RegistrationForm from './RegistrationForm';
import { useRegistration } from './useRegistration';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/action/registerUser';
import Modal from '../Modal/Modal';

const Registration = ({ registerUser, isLoading, showModal }) => {
    const { pos } = useRegistration();
    const onSubmit = values => {
        const formData = new FormData();
        formData.append('position_id', values.position);
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.tel);
        formData.append('photo', values.photo);
        registerUser(formData);
    };

    return (
        <section className="h-100" id="form">
            {showModal && <Modal />}
            <div className="container">
                <div className="registration">
                    <h2 className="title1">Register to get a work</h2>
                    <p className="px-lg-5 px-md-0 px-sm-5 text-center">
                        Attention! After successful registration and alert, update the list of users
                        in the block from the top
                    </p>

                    <RegistrationForm onSubmit={onSubmit} pos={pos} isLoading={isLoading} />
                </div>
            </div>
        </section>
    );
};

const RegistrationContainer = connect(
    state => ({
        isLoading: state.users.isLoading,
        showModal: state.users.showModal
    }),
    { registerUser }
)(Registration);

export default RegistrationContainer;
