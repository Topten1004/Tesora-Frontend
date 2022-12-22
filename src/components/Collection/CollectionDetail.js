import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './StyleDiv/CollectionDetailStyleDiv';

import clsx from 'clsx';

import SearchIcon from '@mui/icons-material/Search';

import {
    Box, TextField, InputAdornment, Select, MenuItem
} from '@mui/material';

const CollectionDetailForm = (props) => {

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [collectionData, setCollectionData] = useState('');
    const [searchText, setSearchText] = useState('');

    const handleItemView = () => {
        const tempData = {
            image: collectionData.item,
            ethPrice: collectionData.ethPrice,
            usdPrice: collectionData.usdPrice
        }

        navigate('/item/view', { state: { data: tempData } })
    }

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    useEffect(() => {
        if (location.state) {
            setCollectionData(location.state.data);
        }
    }, [location.state])

    return (
        <Box className={classes.root}>
            <Box className={classes.imageContent}>
                <Box component={'img'} src={collectionData.collection} className={classes.backImage} />
                <Box component={'img'} src={collectionData.collection} className={classes.smallImage} />
            </Box>

            <Box className={classes.headerDiv}>
                <Box className={classes.collectionName}>
                    {collectionData.name}
                </Box>
                <Box className={classes.collectionInfo}>
                    <Box className={classes.item}>
                        <Box className={classes.collectionValue}> 1 </Box>
                        <Box className={classes.collectionLabel}> Items </Box>
                    </Box>
                    <Box className={clsx(classes.item, classes.borderLeft)}>
                        <Box className={classes.collectionValue}> 10% </Box>
                        <Box className={classes.collectionLabel}> Royalties </Box>
                    </Box>
                    <Box className={clsx(classes.item, classes.borderLeft)}>
                        <Box className={classes.collectionValue}> 0 </Box>
                        <Box className={classes.collectionLabel}> Volume Traded </Box>
                    </Box>
                </Box>
            </Box>

            <Box className={classes.deploy}>
                <Box className={classes.searchDiv}>
                    <TextField
                        placeholder='Search Item Here'
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}

                        value={searchText}
                        onChange={(e) => handleChangeSearch(e)}

                    />

                    <Select defaultValue={'listed'}>
                        <MenuItem value={'listed'}> Recently Listed </MenuItem>
                        <MenuItem value={'minted'}> Newly Minted </MenuItem>
                        <MenuItem value={'auction'}> On Auction </MenuItem>
                    </Select>
                </Box>
                <Box className={classes.list}>
                    Recently Listed
                </Box>

                <Box className={classes.card} onClick={() => handleItemView()}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {collectionData.ethPrice} {'ETH'}
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.list}>
                    Newly Minted
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {collectionData.ethPrice} {'ETH'}
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.list}>
                    On Auction
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.cardImage}>
                        <Box component={'img'} src={collectionData.item} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Box className={classes.imageName}>
                            Apee
                        </Box>
                        <Box className={classes.imagePrice}>
                            {collectionData.ethPrice} {'ETH'}
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default CollectionDetailForm;