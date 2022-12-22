import React, { useState, useEffect } from 'react';

import Wallet_Image from '../../assets/Home/wallet.png';
import Collections_Image from '../../assets/Home/collection.png';
import Sale_Image from '../../assets/Home/sale.png';
import BuyAndSell_Image from '../../assets/Home/buyandsell.png'

import {
    Box, Grid, useMediaQuery,
} from '@mui/material';

import { useStyles } from './StyleDiv/CreateSellStyleDiv';

const list_data = [
    {
        image: Wallet_Image,
        title: 'Setup your wallet',
        text: 'Connect to Create your wallet and start developing your NFT journey'
    },
    {
        image: Collections_Image,
        title: 'Create your collection',
        text: 'A NFT for everyone, Create, publish and share all your designs in a collaborative Blockchain'
    },
    {
        image: Sale_Image,
        title: 'Sell & Trade',
        text: 'Make your art your business, trade and sell NFTs on our marketplace'
    },
]

const CreateSell = () => {

    const classes = useStyles();
    const match1000 = useMediaQuery('(min-width : 1000px)');

    return (
        <Box className={classes.root}>

            <Box className={classes.topPannel} data-aos="zoom-in">
                <Box className={classes.title}>
                    An NFT for every need
                </Box>
                <Box className={classes.text}>
                    A state-of-the-art blockchain platform allows you to transform any  physical or digital asset, document, or resource into a certified and secured NFT
                </Box>
                <Box component={'img'} src={BuyAndSell_Image} />
            </Box>

            <Box className={classes.cardList}>
                <Grid container spacing={2}>
                    {
                        list_data.map((element, index) => {
                            return (
                                <Grid item
                                    key={index}
                                    xs={match1000 ? 4 : 12}
                                    data-aos={index === 0 ? "flip-left" : index === 1 ? "flip-up" : 'flip-right'}
                                >
                                    <Box className={classes.card}>
                                        <Box component={'img'} src={element.image} />
                                        <Box className={classes.cardName}>
                                            {element.title}
                                        </Box>
                                        <Box className={classes.cardText}>
                                            {element.text}
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Box>
    )
}
export default CreateSell;