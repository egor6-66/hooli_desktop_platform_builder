import cn from 'classnames';
import cnBind from 'classnames/bind';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

import styles from './button.module.scss';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    isError?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: Props) {
    const { children, isLoading, isError, ...rest } = props;

    const cx = cnBind.bind(styles);

    const btnClass = cn(
        cx('button', {
            loading: isLoading,
            error: isError,
        })
    );

    return (
        <button {...rest} className={btnClass}>
            {children}
        </button>
    );
}

export default Button;
