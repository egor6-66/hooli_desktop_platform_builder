import cn from 'classnames';
import cnBind from 'classnames/bind';
import React, { ReactNode } from 'react';

import styles from './button.module.scss';

type Props = {
    children: ReactNode;
    isLoading?: boolean;
    isError?: boolean;
};

function Button(props: Props) {
    const { children, isLoading, isError } = props;

    const cx = cnBind.bind(styles);

    const btnClass = cn(
        cx('button', {
            loading: isLoading,
            error: isError,
        })
    );

    return <button className={btnClass}>{children}</button>;
}

export default Button;
