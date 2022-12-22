import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetMyCollectionViewModel } from 'redux/actions/getData';

import MyCollectionForm from 'components/Collection/MyCollection';
import Loading from 'components/Common/Loading';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        marginTop: '80px',
    }
}));

const MyCollection = (props) => {

    const {
        GetMyCollectionViewModel,
        collections
    } = props;

    const classes = useStyles();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMyCollection() {
            await GetMyCollectionViewModel()
            setLoading(false)
        }

        getMyCollection()
    }, [])

    return (
        <Box className={classes.root}>
            <MyCollectionForm collections={collections} />
            {
                loading && <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.myCollection.collections,
})

const mapDispatchToProps = {
    GetMyCollectionViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCollection);