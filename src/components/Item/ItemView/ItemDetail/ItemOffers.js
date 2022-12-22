import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { AcceptMyOffer, RejectOffer, RescindOffer } from "../../../../redux/actions/actions";

import { useStyles } from "../../StyleDiv/ItemViewStyleDiv";
import MakeOfferDialog from "./MakeOfferDialog";
import { formatDBDate } from "../../../../utils/helper";
import Loading from "components/Common/Loading";

import ListIcon from '@mui/icons-material/List';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Box,
} from "@mui/material";
import { GetItemViewItem } from "redux/actions/getData";
import { LoadingButton } from "@mui/lab";

const offerHead = [
    {
        name: 'Sender',
        width: '80px'
    },
    {
        name: 'Receiver',
        width: '80px'
    },
    {
        name: 'Price',
        width: '80px'
    },
    {
        name: 'CreatedDate',
        width: '200px'
    },
    {
        name: 'Action',
        width: '100px'
    },
]

const ItemOffers = (props) => {

    const {
        itemInfo,
        offerInfo,
        AcceptMyOffer,
        RejectOffer,
        RescindOffer,
        GetItemViewItem,
        filterCurrency
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [disableAccept, setDisableAccept] = useState(null);
    const [disableReject, setDisableReject] = useState(null);
    const [disableRescind, setDisableRescind] = useState(null);
    const [openOfferDialog, setOpenOfferDialog] = useState(false);

    const handleMakeOfferDialog = (type) => {
        setOpenOfferDialog(type)
    }

    const handleAcceptOffer = async (element) => {
        setLoading(true);
        setDisableAccept(element.offer_id);
        await AcceptMyOffer(element.offer_id)
        await GetItemViewItem(element.item_id, filterCurrency)
        setDisableAccept(null);
        setLoading(false);
    }

    const handleRejectOffer = async (element) => {
        setDisableReject(element.offer_id);
        await RejectOffer(element.offer_id)
        await GetItemViewItem(element.item_id, filterCurrency)
        setDisableReject(null);
        setLoading(false);
    }

    const handleRescindOffer = async (element) => {
        setDisableRescind(element.offer_id);
        await RescindOffer(element.offer_id, navigate)
        await GetItemViewItem(element.item_id, filterCurrency)
        setDisableRescind(null);
        setLoading(false);
    }

    return (
        <>
            <Accordion className={classes.priceHistory}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListIcon />
                    Offers
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        offerHead.map((element, index) => {
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
                                    offerInfo && offerInfo.map((element, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {element.sender.user_name}
                                                </TableCell>
                                                <TableCell>
                                                    {element.receiver.user_name}
                                                </TableCell>
                                                <TableCell>
                                                    {element.price}
                                                </TableCell>
                                                <TableCell>
                                                    {formatDBDate(element.create_date)}
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        itemInfo.current_owner?.user_id === parseInt(sessionStorage.getItem('user_id')) ?
                                                            <Box sx={{ display: 'flex', gap: 2 }}>
                                                                <LoadingButton
                                                                    variant="contained"
                                                                    loading={disableAccept === element.offer_id}
                                                                    loadingIndicator="Loading…"
                                                                    onClick={() => handleAcceptOffer(element)}
                                                                >
                                                                    Accept
                                                                </LoadingButton>
                                                                <LoadingButton
                                                                    variant="contained"
                                                                    loading={disableReject === element.offer_id}
                                                                    loadingIndicator="Loading…"
                                                                    onClick={() => handleRejectOffer(element)}
                                                                >
                                                                    Reject
                                                                </LoadingButton>
                                                            </Box>
                                                            :
                                                            element.sender.user_name === sessionStorage.getItem('user_name') &&
                                                            <LoadingButton
                                                                variant="contained"
                                                                loading={disableRescind === element.offer_id}
                                                                loadingIndicator="Loading…"
                                                                onClick={() => handleRescindOffer(element)}
                                                            >
                                                                Rescind
                                                            </LoadingButton>
                                                    }
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>

            <MakeOfferDialog
                open={openOfferDialog}
                handleClose={() => handleMakeOfferDialog(false)}
                item_id={itemInfo?.item_id}
            />
        </>
    )
}

const mapStateToProps = state => ({
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    AcceptMyOffer,
    RejectOffer,
    RescindOffer,
    GetItemViewItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemOffers);