import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { PostMyItemSale } from "redux/actions/actions";

import { useStyles } from "./StyleDiv/EditItemStyleDiv";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";


const EditItem = (props) => {

    const {
        PostMyItemSale
    } = props;

    const classes = useStyles();
    const location = useLocation();
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        isValid: false,
        values: {
            saleType: 'fixed'
        },
        touched: {},
        errors: {}
    })

    const [auctionStartDate, setAuctionStartDate] = useState(null);
    const [auctionEndDate, setAuctionEndDate] = useState(null);

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox' ?
                        event.target.checked : event.target.value
            }
        }))
    }

    const handleSubmit = () => {
        if (location.state.data) {
            PostMyItemSale(
                formState.values,
                location.state.data,
                auctionStartDate,
                auctionEndDate,
                navigate
            )
        }
    }

    useEffect(() => {
        if (formState.values.saleType === 'fixed') {
            setAuctionStartDate(null);
            setAuctionEndDate(null);
            setFormState(formState => ({
                ...formState,
                values: {
                    ...formState.values,
                    reservePrice: null,
                }
            }))
        } else {
            setFormState(formState => ({
                ...formState,
                values: {
                    ...formState.values,
                    fixedPrice: null,
                }
            }))
        }
    }, [formState.values.saleType])

    return (
        <Box className={classes.root}>
            <Box className={classes.saleType}>
                <Box className={classes.title}> Sale Type </Box>

                <FormControl sx={{ gap: 5 }}>
                    <FormLabel>Sale Type</FormLabel>
                    <RadioGroup
                        row
                        name="saleType"

                        value={formState.values.saleType || ''}
                        onChange={handleChange}
                    >
                        <FormControlLabel value={'fixed'} control={<Radio />} label="Fixed" />
                        <FormControlLabel value={'auction'} control={<Radio />} label="Auction" />
                    </RadioGroup>
                </FormControl>

                <Box className={classes.fixedPrice}>
                    Fixed Price
                    <TextField
                        name='fixedPrice'
                        type={'number'}
                        placeholder="Input item price"
                        disabled={formState.values.saleType === 'auction'}

                        value={formState.values.fixedPrice || ''}
                        onChange={handleChange}
                    />
                </Box>

                <Box className={classes.reservePrice}>
                    Reserve Price
                    <TextField
                        name='reservePrice'
                        type={'number'}
                        placeholder="Input item price"
                        disabled={formState.values.saleType === 'fixed'}

                        value={formState.values.reservePrice || ''}
                        onChange={handleChange}
                    />
                </Box>

                <FormControl className={classes.onAuction}>
                    <FormLabel sx={{ marginRight: '28px' }}>On Auction</FormLabel>

                    <DatePicker
                        selected={auctionStartDate}
                        onChange={(date) => setAuctionStartDate(date)}
                        disabled={formState.values.saleType === 'fixed'}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                    <DatePicker
                        selected={auctionEndDate}
                        onChange={(date) => setAuctionEndDate(date)}
                        disabled={formState.values.saleType === 'fixed'}
                    />
                </FormControl>

                <FormControl sx={{ gap: 2 }}>
                    <FormLabel>Accept Offer</FormLabel>
                    <RadioGroup
                        row
                        name="acceptOffer"

                        value={formState.values.acceptOffer || ''}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label="True"
                        />
                        <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label="False"
                        />
                    </RadioGroup>
                </FormControl>

                <Button
                    variant='contained'
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    PostMyItemSale
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);