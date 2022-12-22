import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetMyCollection } from '../../redux/actions/getData';

import CollectionDetailForm from '../../components/Collection/CollectionDetail';

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

const CollectionDetail = (props) => {

    const {
        GetMyCollection,
        collection,
        items,
        categories
    } = props;

    const classes = useStyles();
    const location = useLocation();

    const [collection_id, setCollectionId] = useState(null);

    useEffect(() => {
        if (collection_id)
            GetMyCollection(collection_id)
    }, [collection_id])

    useEffect(() => {
        if (location.state) {
            setCollectionId(location.state.data)
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <CollectionDetailForm
                collection={collection}
                items={items}
                categories={categories}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    collectionInfo: state.myCollection.collectionInfo,
})

const mapDispatchToProps = {
    GetMyCollection
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionDetail);