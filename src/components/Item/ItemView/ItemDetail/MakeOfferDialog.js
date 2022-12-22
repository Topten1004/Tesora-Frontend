import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { CreateOffer } from 'redux/actions/actions';
import { GetItemViewItem } from 'redux/actions/getData';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
    Button,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    Box
} from '@mui/material';

import { makeStyles, styled } from '@mui/styles';

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

const useStyles = makeStyles(() => ({
    amount: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    balance: {
        width: 'fit-content',
        marginLeft: 'auto',
        fontSize: '12px !important',
        marginBottom: '5px',
    }
}))

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const MakeOfferDialog = (props) => {

    const {
        open,
        handleClose,
        item_id,
        CreateOffer,
        GetItemViewItem,
        filterCurrency
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();

    const [currency, setCurrency] = React.useState('eth');
    const [offerAmount, setOfferAmount] = useState('');

    const handleChangeCurrency = (e) => {
        setCurrency(e.target.value)
    }

    const handleChangeAmount = (e) => {
        setOfferAmount(e.target.value)
    }

    const handleCreateOffer = async () => {
        handleClose()
        await CreateOffer(offerAmount, currency, item_id);
        await GetItemViewItem(item_id, filterCurrency);
    }

    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
        >
            <DialogTitle id="customized-dialog-title">

                <IconButton onClick={() => handleClose()}>
                    <ArrowBackIcon />
                </IconButton>

                Make an offer

                <IconButton onClick={() => handleClose()}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Box className={classes.amount}>
                            Offer amount
                        </Box>
                    </Grid>
                    <Grid item xs={9}>
                        <InputLabel className={classes.balance}> Balance: </InputLabel>
                    </Grid>
                    <Grid item xs={3}>
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
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            type='number'
                            placeholder='Amount'

                            onChange={handleChangeAmount}
                            value={offerAmount}
                        />
                    </Grid>
                </Grid>

                <Button variant='contained' fullWidth onClick={() => handleCreateOffer()}>
                    Make offer
                </Button>
            </DialogContent>
        </BootstrapDialog>
    );
}

const mapStateToProps = state => ({
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    CreateOffer,
    GetItemViewItem
}

export default connect(mapStateToProps, mapDispatchToProps)(MakeOfferDialog);