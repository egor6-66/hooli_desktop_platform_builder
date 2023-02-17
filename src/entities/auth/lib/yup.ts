import * as yup from 'yup';

import { errors } from 'shared/constanst';

export const loginSchema = yup.object({
    login: yup.string().required(errors.required),
    pass: yup.string().required(errors.required).min(4, 'Код должен быть не короче 4х цифр').max(30, 'Код должен быть не длиннее 4х цифр'),
});
export type LoginType = yup.InferType<typeof loginSchema>;
