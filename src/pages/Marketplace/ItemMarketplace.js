import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetItems, GetMarketPlaceItems } from '../../redux/actions/getData';

import Loading from '../../components/Common/Loading';
import Test_Image from '../../assets/Home/test.jpg';
import Trend_Image from '../../assets/Home/trend.png';
import Unique_Image from '../../assets/Home/unique.png';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';

import ItemMarketplaceForm from '../../components/Marketplace/ItemMarketplace';

import {
    Box,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '80px',
    }
}));

const ItemMarketplace = (props) => {

    const {
        GetItems,
        GetMarketPlaceItems,
        items,
        filterSortBy,
        filterPrice,
        filterCategory,
    } = props;

    const classes = useStyles();
    const location = useLocation();

    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (location.state) {
    //         async function getItems() {
    //             await GetItems(location.state.data)
    //             // await GetMarketPlaceItems(filterSortBy, filterPrice, filterCategory)
    //             setLoading(false)
    //         }
    //         getItems()
    //     }
    // }, [location.state, filterSortBy, filterPrice, filterCategory])

    return (
        <Box className={classes.root}>
            <ItemMarketplaceForm
                // items={items}
                collection_id={location.state?.data}
            />
            {
                loading &&
                <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    items: state.itemView.items,
    filterSortBy: state.filter.filterSortBy,
    filterPrice: state.filter.filterPrice,
    filterCategory: state.filter.filterCategory,
})

const mapDispatchToProps = {
    GetItems,
    GetMarketPlaceItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemMarketplace);