import cn from 'classnames';
import cnBind from 'classnames/bind';
import React, { InputHTMLAttributes, forwardRef, createRef } from 'react';

import styles from './styles.module.scss';

type Props = {
    isLoading?: boolean;
    isError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { isLoading, isError, ...other } = props;

    const cx = cnBind.bind(styles);

    const classes = cn(
        cx('input', {
            loading: isLoading,
            error: isError,
        })
    );

    return <input ref={ref} className={classes} {...other} />;
});

export default Input;
