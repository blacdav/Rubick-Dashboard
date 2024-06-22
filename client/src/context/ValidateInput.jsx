// import React from 'react'
// import

export const ValidateInput = (login) => {
    const err = {}

    // login.addEventtListener('keyup', () => {
    if(login.username === '') {
        err.username = 'username must not be blank';
    }

    if(login.password === '') {
        err.password = 'password must not be blank';
    } else if (login.password.length < 6 || login.password.length > 16) {
        err.password = 'password must be 6 - 16 characters long';
    }
    // })

    return err;
}