import * as yup from 'yup';

export const todoSchema = yup.object().shape({
    todo: yup.string().required('This field is required').max(20, 'Max length is 20'),
});