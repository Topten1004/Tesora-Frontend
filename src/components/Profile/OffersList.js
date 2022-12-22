import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetMyOffers, GetItemViewItem } from 'redux/actions/getData';
import { AcceptMyOffer, RejectOffer } from "redux/actions/actions";

import { useStyles } from './StyleDiv/OffersInfoStyleDiv';
import Loading from '../Common/Loading';

import {
    Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const offerHead = [
    {
        name: 'Item',
        width: '80px',
    },
    {
        name: 'Sender',
        width: '80px',
    },
    {
        name: 'Price',
        width: '80px',
    },
    {
        name: 'Actions',
        width: '80px',
    },
]

const OffersInfo = (props) => {

    const {
        GetMyOffers,
        AcceptMyOffer,
        RejectOffer,
        offersInfo,
        GetItemViewItem
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true)
    const [disableAccept, setDisableAccept] = useState(null);
    const [disableReject, setDisableReject] = useState(null);

    useEffect(() => {
        async function getMyOffer() {
            await GetMyOffers();
            setLoading(false);
        }

        getMyOffer()
    }, [])

    const handleAcceptOffer = async (element) => {
        setDisableAccept(element.offerId);
        await AcceptMyOffer(element.offerId)
        await GetItemViewItem(element.itemId)
        setDisableAccept(null);
    }

    const handleRejectOffer = async (element) => {
        setDisableReject(element.offerId);
        await RejectOffer(element.offerId)
        await GetItemViewItem(element.itemId)
        setDisableReject(null);
    }

    return (
        <Box className={classes.root}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {
                                offerHead?.map((element, index) => {
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
                            offersInfo && offersInfo.map((element, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <Tooltip title={element.name} placement="bottom" arrow
                                                PopperProps={{ sx: { "& .MuiTooltip-tooltip": { fontSize: '16px' } } }}
                                            >
                                                <Box component={'img'}
                                                    src={element.imageIpfs}
                                                    className={classes.itemImage}
                                                    onClick={() => navigate(`/item/view/${element.itemId}`)}
                                                />
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell>
                                            {element.bidder}
                                        </TableCell>
                                        <TableCell>
                                            {element.price}
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                                                <LoadingButton
                                                    variant="contained"
                                                    loading={disableAccept === element.offerId}
                                                    loadingIndicator="Loading…"
                                                    onClick={() => handleAcceptOffer(element)}
                                                >
                                                    Accept
                                                </LoadingButton>
                                                <LoadingButton
                                                    variant="contained"
                                                    loading={disableReject === element.offerId}
                                                    loadingIndicator="Loading…"
                                                    onClick={() => handleRejectOffer(element)}
                                                >
                                                    Reject
                                                </LoadingButton>
                                            </Box>
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
    offersInfo: state.offer.offersInfo,
})

const mapDispatchToProps = {
    GetMyOffers,
    AcceptMyOffer,
    RejectOffer,
    GetItemViewItem
}

export default connect(mapStateToProps, mapDispatchToProps)(OffersInfo);