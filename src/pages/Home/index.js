import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetMarketPlaceViewModel } from '../../redux/actions/getData';

import Loading from '../../components/Common/Loading'
import Intro from './Intro';
import Trending from './Trending';
import CreateSell from './CreateSell';
import BrowseCategory from './BrowseCategory';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
    }
}));

const Home = (props) => {

    const {
        GetMarketPlaceViewModel,
        collections,
        categories
    } = props;

    const classes = useStyles();

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getCollections() {
            setLoading(true);
            await GetMarketPlaceViewModel()
            setLoading(false)
        }
        getCollections()
    }, [])

    return (
        <Box className={classes.root}>
            <Intro />
            <Trending
                categories={categories}
                collections={collections}
            />
            <CreateSell />
            <BrowseCategory categories={categories} />
            {
                loading && <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    collections: state.marketPlace.collections,
    categories: state.marketPlace.categories
})

const mapDispatchToProps = {
    GetMarketPlaceViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);