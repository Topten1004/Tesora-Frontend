import React, { useState, useEffect } from 'react' ;

import CollectionActivityForm from '../../components/Collection/CollectionActivity';

import {
    Box,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : '80px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }
}));

const CollectionActivity = () => {

    const classes = useStyles() ;

    return (
        <Box className = {classes.root}>
            <CollectionActivityForm />
        </Box>
    )
}
export default CollectionActivity ;