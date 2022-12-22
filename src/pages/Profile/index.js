import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetOwnerProfile, GetProfileViewModel } from 'redux/actions/getData';
import { ProfileCleanup } from 'redux/actions/cleanup';

import ProfileForm from 'components/Profile';
import Loading from 'components/Common/Loading';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '80px 0px',
    }
}));

const Profile = (props) => {

    const {
        GetProfileViewModel,
        GetOwnerProfile,
        ProfileCleanup,
        userInfo,
        userInfoById
    } = props;

    const classes = useStyles();
    const location = useLocation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(userInfo)
        if (userInfo) {
            sessionStorage.setItem('user_id', userInfo.user_id);
            sessionStorage.setItem('user_name', userInfo.user_name);
        }
    }, [userInfo])

    useEffect(() => {
        if (location.state) {
            if (location.state.data !== 'myprofile')
                GetOwnerProfile(location.state.data);
            else {
                GetProfileViewModel()
            }
        }
    }, [location.state])

    useEffect(() => {

        async function getProfile() {
            await GetProfileViewModel()
            setLoading(false);
        }
        getProfile()

        return () => {
            ProfileCleanup()
        }
    }, [])

    return (
        <Box className={classes.root}>
            <ProfileForm
                userInfo={(!location.state?.data || location.state?.data === "myprofile") ? userInfo : userInfoById}
            />
            {
                loading && <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    userInfo: state.profile.userInfo,
    userInfoById: state.profile.userInfoById
})

const mapDispatchToProps = {
    GetProfileViewModel,
    GetOwnerProfile,
    ProfileCleanup
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);