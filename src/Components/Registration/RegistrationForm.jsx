import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { InputField, FieldFileInput, RadioInputField } from './InputField';

import {
    required,
    textLength,
    emailtLength,
    isRegExEmail,
    isRegExPhone,
    validateImageWeight,
    requiredRadio,
} from '../../servises/validation';
import Loader from "../Loader/Loader";

const RegistrationForm = props => {

    return (
        <form onSubmit={props.handleSubmit} className="registrationForm">
            <div className="registrationForm__group">
                <label className="registrationForm__label">Name</label>
                <Field
                    component={InputField}
                    name="name"
                    type="text"
                    placeholder="Your name"
                    validate={[required, textLength]}
                />
            </div>
            <div className="registrationForm__group">
                <label className="registrationForm__label">Email</label>
                <Field
                    component={InputField}
                    name="email"
                    type="email"
                    placeholder="Your email"
                    validate={[required, emailtLength, isRegExEmail]}
                />
            </div>
            <div className="registrationForm__group">
                <label className="registrationForm__label">Phone number</label>
                <Field
                    component={InputField}
                    name="tel"
                    type="tel"
                    placeholder="+380 XX XXX XX XX"
                    validate={[required, isRegExPhone]}
                    assistiveText="Еnter phone number in open format"

                />
            </div>
            <div className="registrationForm__group">
                <label className="registrationForm__label d-block">Select your position</label>
                {props.pos.map((item, index) => (
                    <div className="registrationForm__radioGroup d-block" key={item.id}>
                        <label className="registrationForm__radio  inputGroup__wrap d-block">
                            <Field
                                component={RadioInputField}
                                name="position"
                                type="radio"
                                value={`${item.id}`}
                                validate={[requiredRadio]}
                                num={index === props.pos.length - 1 ? item.id : null}
                                id={item.id}
                            />
                            {item.name}
                        </label>
                    </div>
                ))}
            </div>
            <div className="registrationForm__group">
                <label className="registrationForm__label">Photo</label>
                <Field
                    name="photo"
                    component={FieldFileInput}
                    validate={[required, validateImageWeight]}
                />
            </div>
            {props.isLoading ? <Loader/> :   <button className="button registrationForm__button" type="submit">
                Sing up now
            </button>}
        </form>
    );
};

const RegistrationFormRedux = reduxForm({ form: 'registration' })(RegistrationForm);

const RegistrationFormContainer = connect()(RegistrationFormRedux);
export default RegistrationFormContainer;
