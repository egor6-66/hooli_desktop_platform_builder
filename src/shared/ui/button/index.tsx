import cn from 'classnames';
import cnBind from 'classnames/bind';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import Spinner from '../spinner';

type Props = {
    children: ReactNode;
    isDisabled?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    size?: 's' | 'm' | 'l' | 'xl';
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
    const { children, isDisabled, isLoading, isError, size, ...other } = props;

    const cx = cnBind.bind(styles);

    const classes = cn(
        cx('button', {
            disabled: isDisabled,
            loading: isLoading,
            error: isError,
            size,
        })
    );

    return (
        <button className={classes} {...other}>
            {isLoading ? <Spinner /> : children}
        </button>
    );
}

export default Button;
