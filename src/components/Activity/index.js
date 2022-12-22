import React, { useState, useEffect } from 'react';

import {
    Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

import { useStyles } from './ActivityStyleDiv';
import TransactionInfo from '../Common/TransactionInfo';

const mockHead = [
    {
        name: 'Collection',
        width: '80px',
    },
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

const ActivityForm = (props) => {

    const {
        histories
    } = props;

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <TransactionInfo
                transactionHead={mockHead}
                histories={histories}
            />
        </Box>
    )
}

export default ActivityForm;