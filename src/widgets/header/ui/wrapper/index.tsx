import React, { ReactNode } from 'react';

import styles from './styled.module.scss';

type Props = {
    children: ReactNode;
};

function Wrapper(props: Props) {
    const { children } = props;
    return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
