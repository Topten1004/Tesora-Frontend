import React, { useState, useEffect } from 'react';

import { useStyles } from './StyleDiv/CollectionActivityStyleDiv';
import TransactionInfo from '../Common/TransactionInfo';
import Sculpture_Image from '../../assets/Home/sculpture.jpg';
import Dfgadfrds_Image from '../../assets/Home/dfgadfrds.jpg';

import {
    Box
} from '@mui/material';

const mockHead = [
    {
        name: 'Item',
        width: '80px',
    },
    {
        name: 'Event',
        width: '80px',
    },
    {
        name: 'Price',
        width: '50px',
    },
    {
        name: 'From',
        width: '80px',
    },
    {
        name: 'To',
        width: '80px',
    },
    {
        name: 'Transaction Hash',
        width: '100px',
    },
    {
        name: 'Created Date',
        width: '140px',
    },
]

const mockData = [
    {
        item: Sculpture_Image,
        event: 'Minted',
        price: '0.0001 ETH',
        from: '',
        to: 'James Abbas',
        transactionHash: '0x76c642ed278930849ab990c42068067c5a17750f7f1536e54e31a62fff26239',
        createdDate: 'January 10, 2022'
    },
    {
        item: Dfgadfrds_Image,
        event: 'Minted',
        price: '0.001 ETH',
        from: '',
        to: 'James Abbas',
        transactionHash: '0xf6b2b6e92058b462aff0c748c246e2c3549d417f2af758445e267a6a051b994',
        createdDate: 'December 13, 2021'
    },
]

const CollectionActivityForm = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <TransactionInfo
                transactionHead={mockHead}
                histories={mockData}
            />
        </Box>
    )
}
export default CollectionActivityForm;