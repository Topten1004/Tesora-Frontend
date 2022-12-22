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

const auctionHead = [
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
]

const AuctionsList = (props) => {

    const {
        itemInfo,
        auctionInfo,
        AcceptMyOffer,
        RejectOffer,
        RescindOffer,
        GetItemViewItem
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

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
                                        auctionHead.map((element, index) => {
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
                                    auctionInfo && auctionInfo.map((element, index) => {
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
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    AcceptMyOffer,
    RejectOffer,
    RescindOffer,
    GetItemViewItem
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionsList);