import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { GetItemsByCategoryId } from 'redux/actions/getData';

import { useStyles } from './StyleDiv/TrendingStyleDiv';
import Items from 'components/Common/Items';
import Loading from 'components/Common/Loading';

import {
    Box, Button
} from '@mui/material';


const Trending = (props) => {

    const {
        categories,
        GetItemsByCategoryId,
        itemsByCatId,
        filterCurrency,
    } = props;

    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);

    const handleChangeCategoryId = async (categoryId) => {
        setCategoryId(categoryId)
        await GetItemsByCategoryId(categoryId, filterCurrency)

    }

    useEffect(() => {
        if (categories && filterCurrency) {
            async function getItems() {
                await GetItemsByCategoryId(categoryId, filterCurrency)
                setLoading(false);
            }

            getItems()
        }
    }, [categories, filterCurrency])

    return (
        <Box className={classes.root}>
            <Box className={classes.title} data-aos="zoom-in">
                Trending
            </Box>
            <Box className={classes.buttonGroup}>
                {
                    categories &&
                    <Button
                        variant={categoryId === 0 ? "contained" : "outlined"}
                        onClick={() => handleChangeCategoryId(0)}
                        data={"All"}
                    >
                        {categoryId === 0 ? "All" : ""}
                    </Button>
                }
                {
                    categories && categories.map((element, index) => {
                        return (
                            <Button key={index}
                                variant={categoryId === element.category_id ? "contained" : "outlined"}
                                onClick={() => handleChangeCategoryId(element.category_id)}
                                data={element.title}
                            >
                                {categoryId === element.category_id ? element.title : ""}
                            </Button>
                        )
                    })
                }
            </Box>

            <Items
                items={itemsByCatId}
            />

            {
                loading && <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    itemsByCatId: state.itemView.itemsByCatId,
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    GetItemsByCategoryId
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);