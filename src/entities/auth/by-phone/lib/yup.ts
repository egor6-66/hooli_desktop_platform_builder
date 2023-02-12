import * as yup from 'yup';

import { errors } from 'shared/constanst';
import { regex } from 'shared/lib';

export const sendCodeSchema = yup.object({
    phone: yup.string().required(errors.required).matches(regex.phone, errors.invalidPhoneNumber),
});
export type SendCodeType = yup.InferType<typeof sendCodeSchema>;

export const loginSchema = yup.object({
    phone: yup.string().required(errors.required).matches(regex.phone, errors.invalidPhoneNumber),
    code: yup
        .string()
        .required(errors.required)
        .matches(regex.areTheyNumbers, 'Код должен состоять из цифр')
        .min(4, 'Код должен быть не короче 4х цифр')
        .max(4, 'Код должен быть не длиннее 4х цифр'),
});
export type LoginType = yup.InferType<typeof loginSchema>;
