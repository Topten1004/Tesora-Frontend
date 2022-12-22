import React, { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { EditProfile } from 'redux/actions/actions';

import { useStyles } from './StyleDiv/ProfileStyleDiv';
import ProfileImage from './ProfileImage';
import SettingsForm from './Setting';

import {
    Box, Button, Grid, Skeleton, Tooltip, useMediaQuery,
} from '@mui/material';

const ProfileForm = (props) => {

    const {
        userInfo,
        EditProfile,
    } = props;

    const classes = useStyles();
    const match900 = useMediaQuery('(min-width : 900px)');

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    const [selectedFile, setSelectedFile] = useState({
        preview: '',
        raw: ''
    })

    const [enableEdit, setEnableEdit] = useState(true);

    const handleSubmit = () => {
        EditProfile(selectedFile.raw)
    }

    return (
        <Box className={classes.root}>
            <ProfileImage
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                user_image={userInfo?.user_image}
            />

            <Box className={classes.profileInfo}>
                <Box className={classes.userName}>
                    {
                        userInfo ?
                            userInfo?.user_name :
                            <Skeleton variant='text' width={'320px'} />
                    }
                </Box>
            </Box>

            <Box className={classes.settingForm}>
                <Grid container spacing={5}>
                    <SettingsForm
                        userInfo={userInfo}
                        formState={formState}
                        enableEdit={enableEdit}
                        setFormState={setFormState}
                    />
                    <Grid item xs={match900 ? 6 : 12} className={classes.submitBtn}>
                        <Button variant='contained' onClick={() => setEnableEdit(false)}>
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={match900 ? 6 : 12} className={classes.submitBtn}>
                        <Button
                            variant='contained'
                            onClick={() => handleSubmit()}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
    EditProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);