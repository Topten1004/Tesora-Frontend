import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { CreateAuction } from 'redux/actions/actions';
import { GetItemViewItem } from 'redux/actions/getData';

import CloseIcon from '@mui/icons-material/Close';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import {
    Button,
    TextField,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    Box,
    MenuItem,
    Select,
    Grid
} from '@mui/material';

import { makeStyles, styled } from '@mui/styles';
import axios from 'axios';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({

    "& .MuiPaper-root": {
        width: '600px',
        borderRadius: '16px',

        "& .MuiOutlinedInput-root": {
            height: '40px'
        }
    },
    '& .MuiDialogTitle-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
    "& .MuiButton-root": {
        height: '50px',
        borderRadius: '12px',
        marginTop: '50px'
    }
}));

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiDialogContent-root": {
            color: 'black'
        }
    },
    itemInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px'
    },
    image: {
        display: 'flex',
        "& img": {
            width: '50px',
            height: '50px',
            marginRight: '20px'
        }
    },
    balanceInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid lightgrey',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px'
    },
    balance: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    balanceName: {
        display: 'flex',
        alignItems: 'center',
        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        }
    },
    floorPrice: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const BidDialog = (props) => {

    const {
        open,
        handleClose,
        itemInfo,
        CreateAuction,
        GetItemViewItem,
        filterCurrency
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [offerAmount, setOfferAmount] = useState('');
    const [currency, setCurrency] = useState('eth');

    const handleChangeAmount = (e) => {
        setOfferAmount(e.target.value)
    }

    const handleChangeCurrency = (e) => {
        setCurrency(e.target.value)
    }

    const handleCreateAuction = async () => {
        setLoading(true)
        await CreateAuction(offerAmount, currency, itemInfo.item_id);
        await GetItemViewItem(itemInfo.item_id, filterCurrency)
        setLoading(false)
        handleClose()
        // const res = axios.get("https://api.coinbase.com/v2/exchange-rates?currency=ETH");
        // console.log(res)
    }

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            className={classes.root}
        >
            <DialogTitle id="customized-dialog-title">
                <Box></Box>

                Place a bid

                <IconButton onClick={() => handleClose()}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>

                <Box className={classes.itemInfo}>
                    <Box className={classes.image}>
                        <img src={itemInfo?.mediaIpfs} />
                        <Box>
                            {itemInfo?.name} <br />
                            {itemInfo.collection_id?.name}
                        </Box>
                    </Box>
                    <Box>
                        {itemInfo?.price} {itemInfo.collection_id?.contract_symbol}
                    </Box>
                </Box>

                <Box className={classes.balanceInfo}>
                    <Box className={classes.balance}>
                        <Box className={classes.balanceName}>
                            <AccountBalanceWalletOutlinedIcon />
                            Balance
                        </Box>
                        <Box>
                            0 ETH
                        </Box>
                    </Box>
                    <Box className={classes.floorPrice}>
                        <Box>
                            Floor price
                        </Box>
                        1.1 ETH
                    </Box>
                    <Box className={classes.floorPrice}>
                        <Box>
                            Best offer
                        </Box>
                        1.03 ETH
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type='number'
                            placeholder='Amount'

                            onChange={handleChangeAmount}
                            value={offerAmount}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            fullWidth

                            value={currency}
                            onChange={handleChangeCurrency}
                        >
                            <MenuItem value={'eth'} > ETH </MenuItem>
                            <MenuItem value={'usd'} > USD </MenuItem>
                            <MenuItem value={'eur'} > EUR </MenuItem>
                        </Select>
                    </Grid>
                </Grid>

                <Button
                    variant='contained'
                    fullWidth
                    onClick={() => handleCreateAuction()}
                    disabled={loading}
                >
                    Place bid
                </Button>
            </DialogContent>
        </BootstrapDialog>
    );
}

const mapStateToProps = state => ({
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    CreateAuction,
    GetItemViewItem
}

export default connect(mapStateToProps, mapDispatchToProps)(BidDialog);