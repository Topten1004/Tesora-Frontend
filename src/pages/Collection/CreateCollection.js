import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import CreateCollectionForm from '../../components/Collection/CreateCollection';

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

const CreateCollection = (props) => {

    const {
    } = props;

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <CreateCollectionForm />
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCollection);