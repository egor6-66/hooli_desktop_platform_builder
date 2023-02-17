import React from 'react';

import { Link } from 'shared/ui';

import styles from './styled.module.scss';
import Wrapper from '../wrapper';

type Props = {};

function MainHeaderWidget(props: Props) {
    return (
        <Wrapper>
            <Link to="messages">messages</Link>
            <Link to="tasks">tasks</Link>
        </Wrapper>
    );
}

export default MainHeaderWidget;
