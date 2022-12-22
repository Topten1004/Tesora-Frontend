import React, { useState, useEffect, useRef } from 'react';

import {
    Grid, InputLabel, TextField, useMediaQuery,
} from '@mui/material';

const SettingsForm = (props) => {

    const {
        userInfo,
        formState,
        setFormState,
        enableEdit
    } = props;

    const match900 = useMediaQuery('(min-width : 900px)');


    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }


    useEffect(() => {
        if (userInfo) {
            setFormState(formState => ({
                ...formState,
                values: userInfo
            }))
        }
    }, [userInfo])

    return (
        <>

            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> Username </InputLabel>
                <TextField
                    fullWidth
                    name='user_name'
                    placeholder='Enter username'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.user_name || ''}
                />
            </Grid>
            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> Email </InputLabel>
                <TextField
                    fullWidth
                    name='email'
                    placeholder='Enter email'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.email || ''}
                />
            </Grid>
            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> Last Name </InputLabel>
                <TextField
                    fullWidth
                    name='last_name'
                    placeholder='Enter lastname'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.last_name || ''}
                />
            </Grid>
            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> First Name </InputLabel>
                <TextField
                    fullWidth
                    name='first_name'
                    placeholder='Enter firstname'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.first_name || ''}
                />
            </Grid>
            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> Password </InputLabel>
                <TextField
                    fullWidth
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.password || ''}
                />
            </Grid>
            <Grid item xs={match900 ? 6 : 12}>
                <InputLabel> Confirm Password </InputLabel>
                <TextField
                    fullWidth
                    type='password'
                    name='confirm_password'
                    placeholder='Enter confirm password'
                    disabled={enableEdit}

                    onChange={handleChange}
                    value={formState.values.confirm_password || ''}
                />
            </Grid>
        </>
    )
}

export default SettingsForm;