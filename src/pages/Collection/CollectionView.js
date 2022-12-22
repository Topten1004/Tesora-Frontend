import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { ClearItems, GetItems } from 'redux/actions/getData';

import CollectionViewForm from 'components/Collection/CollectionView';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginTop: '80px',
    }
}));

const CollectionView = (props) => {

    const {
        GetItems,
        items,
        filterCurrency,
    } = props;

    const classes = useStyles();
    const { collection_id } = useParams();

    useEffect(() => {
        if (collection_id) {
            GetItems(collection_id, filterCurrency)
        }
    }, [collection_id, filterCurrency])

    useEffect(() => {
        return () => {
            ClearItems()
        }
    }, [])

    return (
        <Box className={classes.root}>
            <CollectionViewForm
                items={items}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    items: state.itemView.items,
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    GetItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionView);