import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetProfileViewModel } from '../../redux/actions/getData';

import SettingsForm from '../../components/Profile/Setting';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
    }
}));

const Settings = (props) => {

    const {
        userInfo,
        GetProfileViewModel
    } = props;

    const classes = useStyles();

    useEffect(() => {
        GetProfileViewModel()
    }, [])

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <Box className={classes.root}>
            <SettingsForm userInfo={userInfo} />
        </Box>
    )
}

const mapStateToProps = state => ({
    userInfo: state.profile.userInfo,
})

const mapDispatchToProps = {
    GetProfileViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);