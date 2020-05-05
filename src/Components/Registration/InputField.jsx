import React from 'react';

export const InputField = ({ placeholder, type, assistiveText, input, meta }) => {
    const isFieldInvalid = meta.touched && meta.invalid;

    return (
        <div className="inputGroup">
            <input
                {...input}
                placeholder={placeholder}
                type={type}
                className={isFieldInvalid ? 'inputGroup__input   error' : 'inputGroup__input'}
            />
            <p className={isFieldInvalid ? 'inputGroup__error' : 'inputGroup__assistiveText'}>
                {isFieldInvalid ? meta.error : assistiveText}
            </p>
        </div>
    );
};

export const RadioInputField = ({ id, num, input, meta }) => {
    const isFieldInvalid = meta.touched && meta.invalid;

    return (
        <>
            <div className="inputGroup">
                <input {...input} type="radio" className="inputGroup__inputRadio" />
                <div className="inputGroup__checkmark "></div>
            </div>
            <p className={id === num ? 'inputGroup__checkmarkError' : 'hidden'}>
                {isFieldInvalid ? meta.error : null}
            </p>
        </>
    );
};

export const FieldFileInput = ({ input, meta, ...props }) => {
    const { value, onBlur } = input;
    const onChange = e => {
        const { onChange } = input;
        onChange(e.target.files[0]);
        onBlur(e.target.files[0]);
    };

    const isFieldInvalid = meta.touched && meta.invalid;
    const classes = isFieldInvalid ? 'inputGroup__input  error' : 'inputGroup__input';
    console.log(isFieldInvalid);
    return (
        <div className="inputGroup input-group mb-5">
            <div className="w-100">
                <div className="custom-file d-block">
                    <input
                        type="file"
                        className={`custom-file-input  h-100 ${classes}`}
                        id="inputGroupFile02"
                        onChange={onChange}
                        accept="image/jpeg, image/jpg"
                    />
                    <label
                        className={`custom-file-label ${classes}`}
                        htmlFor="inputGroupFile02"
                        aria-describedby="inputGroupFileAddon02"
                    >
                        {isFieldInvalid ? 'No file chosen' : 'Upload your photo'}
                    </label>
                </div>
            </div>

            <p
                className={
                    isFieldInvalid
                        ? 'inputGroup__assistiveText inputGroup__error '
                        : 'inputGroup__assistiveText'
                }
            >
               {isFieldInvalid ? meta.error : value.name}
            </p>
        </div>
    );
};
