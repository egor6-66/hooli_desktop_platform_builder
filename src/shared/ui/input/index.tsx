import cn from 'classnames';
import cnBind from 'classnames/bind';
import React from 'react';

import styles from './input.module.scss';

type Props = {
    isLoading?: boolean;
    isError?: boolean;
};

function Input(props: Props) {
    const { isLoading, isError } = props;

    const cx = cnBind.bind(styles);

    const btnClass = cn(
        cx('input', {
            loading: isLoading,
            error: isError,
        })
    );

    return <input className={btnClass} />;
}

export default Input;
