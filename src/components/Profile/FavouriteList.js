import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { ClearItems, GetMyFavorites } from 'redux/actions/getData';

import { useStyles } from './StyleDiv/OffersInfoStyleDiv';
import Loading from '../Common/Loading';

import {
    Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

const favouriteHead = [
    {
        name: 'Collection',
        width: '80px',
    },
    {
        name: 'Category',
        width: '80px',
    },
    {
        name: 'Item',
        width: '50px',
    },
    {
        name: 'Description',
        width: '140px',
    },
    {
        name: 'Item Image',
        width: '140px',
    },
]

const FavouriteList = (props) => {

    const {
        GetMyFavorites,
        favouriteInfo,
    } = props;

    const classes = useStyles();

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getMyFavourite() {
            await GetMyFavorites();
            setLoading(false);
        }

        getMyFavourite()

        return () => {
            ClearItems()
        }
    }, [])

    return (
        <Box className={classes.root}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                favouriteHead?.map((element, index) => {
                                    return (
                                        <TableCell key={index} sx={{ minWidth: element.width }}>
                                            {element.name}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            favouriteInfo && favouriteInfo.map((element, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {element.collection}
                                        </TableCell>
                                        <TableCell>
                                            {element.category}
                                        </TableCell>
                                        <TableCell>
                                            {element.item}
                                        </TableCell>
                                        <TableCell>
                                            {element.description}
                                        </TableCell>
                                        <TableCell>
                                            <Box component={'img'}
                                                src={element.mediaIpfs}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {
                loading &&
                <Loading />
            }
        </Box>
    )
}

const mapStateToProps = state => ({
    favouriteInfo: state.profile.favouriteInfo
})

const mapDispatchToProps = {
    GetMyFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteList);