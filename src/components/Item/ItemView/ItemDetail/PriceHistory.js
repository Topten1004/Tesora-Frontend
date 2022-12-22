import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { useStyles } from "../../StyleDiv/ItemViewStyleDiv";
import { formatDBDate } from "../../../../utils/helper";

import TimelineIcon from '@mui/icons-material/Timeline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";

const priceHead = [
    {
        name: 'Price',
        width: '80px',
    },
    {
        name: 'User',
        width: '140px',
    },
    {
        name: 'Created Date',
        width: '200px',
    },
]

const PriceHistory = (props) => {

    const {
        historyInfo,
    } = props;

    const classes = useStyles();

    return (
        <Accordion className={classes.priceHistory}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <TimelineIcon />
                Price History
            </AccordionSummary>
            <AccordionDetails>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    priceHead.map((element, index) => {
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
                                historyInfo && historyInfo.map((element, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {element.price}
                                            </TableCell>
                                            <TableCell>
                                                {element.user_id}
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
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceHistory);