import React, { useState, useEffect, useRef } from 'react';

import { useStyles } from './StyleDiv/ProfileImageStyleDiv';

import EditIcon from '@mui/icons-material/Edit';

import {
    Box, InputLabel,
} from '@mui/material';
import { PRIVATE_TESORA_IMAGE_API } from 'static/constants';

const ProfileImage = (props) => {

    const {
        selectedFile,
        setSelectedFile,
        user_image
    } = props;

    const classes = useStyles();
    const fileInput = useRef();

    const handleChangeUrl = e => {
        if (e.target.value) {
            setSelectedFile({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleSelectedFile = () => {
        fileInput.current.click();
    }

    return (
        <Box className={classes.root}>
            <InputLabel disabled className={classes.profileImage} onClick={handleSelectedFile}>
                {
                    selectedFile.preview ?
                        <img src={selectedFile.preview} /> :
                        user_image ?
                            <Box component={'img'} src={`${PRIVATE_TESORA_IMAGE_API}${user_image}`} />
                            : <Box component={'img'} src={'https://storage.googleapis.com/opensea-static/opensea-profile/19.png'} />
                }
            </InputLabel>

            <input
                type='file'
                onChange={handleChangeUrl}
                style={{ display: 'none' }}
                ref={fileInput}
            />
        </Box>
    )
}
export default ProfileImage;