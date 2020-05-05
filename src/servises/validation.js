export const required = value => (value ? undefined : 'The field is required');
export const requiredRadio = value => (value ? undefined : 'Select the position');

export const textLength = value =>
    value && value.length >= 2 && value.length <= 60
        ? undefined
        : `Must be from 2 to 60  characters long`;

export const emailtLength = value =>
    value && value.length >= 2 && value.length <= 100
        ? undefined
        : `Must be from 2 to 100  characters long`;

export const isRegExEmail = value =>
    value &&
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
        value.trim()
    )
        ? undefined
        : 'Invalid email address';
export const isRegExPhone = value =>
    value && /^[\+]{0,1}380([0-9]{9})$/.test(value.trim()) ? undefined : 'Invalid phone number';

const maxWeight = 5000000;
export const validateImageWeight = value =>
    value && value.size > maxWeight ? `Image size must be less or equal to 5mb` : undefined;

export const validateImageSizes = value =>
    (value && value.width < 70) || (value && value.height < 70)
        ? `Image width must be at least 70x70px`
        : null;
