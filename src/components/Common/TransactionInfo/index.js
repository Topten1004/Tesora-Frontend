import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Activity_Image from '../../../assets/Activity/activities.svg';

import {
    Box, Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

import { useStyles } from './TransactionInfoStyleDiv';

const TransactionInfo = (props) => {

    const {
        transactionHead,
        histories
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const handleNavigateChange = (element, type) => {

        if (type === 'collection') {
            navigate('/collection/detail', { state: { data: element.collection.collection_id } });
        }
        if (type === 'item') {
            navigate(`/item/view/${element.item["item_id"]}`);
        }
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Activity
                <Box component={'img'}
                    src={Activity_Image}
                />
            </Box>

            <Box className={classes.tableContent}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    transactionHead?.map((element, index) => {
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
                                histories?.map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            {
                                                element.collection &&
                                                <TableCell>
                                                    <Box component={'img'} src={element.collection.image} className={classes.collectionImage} onClick={() => handleNavigateChange(element, "collection")} />
                                                </TableCell>
                                            }
                                            <TableCell>
                                                <Box component={'img'} src={element.item.media} className={classes.itemImage} onClick={() => handleNavigateChange(element, "item")} />
                                            </TableCell>
                                            <TableCell>
                                                {element.history_type}
                                            </TableCell>
                                            <TableCell>
                                                {element.price}
                                            </TableCell>
                                            <TableCell>
                                                <Link href="#">
                                                    {element.from.user_name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link href="#">
                                                    {element.to.user_name}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link href="#">
                                                    {String(element.transaction_hash).substring(0, 4)}
                                                    {element.transaction_hash && "..."}
                                                    {String(element.transaction_hash).substring(String(element.transaction_hash).length - 4)}
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                {element.created_date}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}
export default TransactionInfo;