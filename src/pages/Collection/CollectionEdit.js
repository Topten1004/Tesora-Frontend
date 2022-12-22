import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetEditCollection } from '../../redux/actions/getData';

import EditCollectionForm from '../../components/Collection/CollectionEdit';

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

const EditCollection = (props) => {

    const {
        GetEditCollection,
        collection
    } = props;

    const classes = useStyles();

    const { collection_id } = useParams();

    useEffect(() => {
        GetEditCollection(collection_id)
    }, [])

    return (
        <Box className={classes.root}>
            <EditCollectionForm collection={collection} />
        </Box>
    )
}

const mapStateToProps = state => ({
    collection: state.editCollection.collection
})

const mapDispatchToProps = {
    GetEditCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCollection);