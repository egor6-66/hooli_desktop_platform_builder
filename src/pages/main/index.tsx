import React from 'react';

import { tokens } from 'shared/lib';

import { Button } from '../../shared/ui';

function MainPage() {
    return (
        <div>
            <Button onClick={tokens.remove}>logout</Button>
            <div>{tokens.getFromLocalStorage()?.access_token}</div>
            <div>{tokens.getFromCookies()?.access_token}</div>
            <p>s</p>
            <div>{tokens.getFromLocalStorage()?.refresh_token}</div>
            <div>{tokens.getFromCookies()?.refresh_token}</div>
        </div>
    );
}

export default MainPage;
