
import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { BuyItem } from "redux/actions/actions";
import { GetItemViewItem } from "redux/actions/getData";

import { useStyles } from "components/Item/StyleDiv/ItemViewStyleDiv";
import MakeOfferDialog from "./MakeOfferDialog";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SellIcon from '@mui/icons-material/Sell';

import {
    Box,
    Button,
    Grid,
    useMediaQuery
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

const FixedPrice = (props) => {

    const {
        itemInfo,
        BuyItem,
        GetItemViewItem,
        filterCurrency
    } = props;

    const classes = useStyles();
    const match600 = useMediaQuery('(min-width : 600px)');

    const [buyLoading, setBuyLoading] = useState(false);
    const [openOfferDialog, setOpenOfferDialog] = useState(false);

    const handleBuyItem = async () => {
        setBuyLoading(true);
        await BuyItem(itemInfo.item_id)
        await GetItemViewItem(itemInfo.item_id, filterCurrency)
        setBuyLoading(false);
    }

    const handleMakeOfferDialog = (type) => {
        setOpenOfferDialog(type)
    }

    return (
        <Box className={classes.currentPrice}>
            Current Price
            <Box className={classes.price}>
                {
                    parseFloat(itemInfo?.priceDisplay) +
                    String(itemInfo?.priceDisplay).substring(String(itemInfo?.priceDisplay).length - 4)
                }
            </Box>
            {
                itemInfo.current_owner?.user_id !== parseInt(sessionStorage.getItem('user_id')) &&
                <Grid container spacing={3}>
                    <Grid item xs={match600 ? 6 : 12}>
                        <LoadingButton
                            variant='contained'
                            startIcon={<AccountBalanceWalletIcon />}
                            loading={buyLoading}
                            loadingPosition="start"
                            fullWidth
                            onClick={() => handleBuyItem()}
                            className={classes.buyBtn}
                        >
                            Buy now
                        </LoadingButton>
                    </Grid>
                    {
                        itemInfo?.accept_offer &&
                        <Grid item xs={match600 ? 6 : 12}>
                            <Button
                                variant="outlined"
                                data="Make offer"
                                fullWidth
                                onClick={() => handleMakeOfferDialog(true)}
                                className={classes.offerBtn}
                            >
                                <SellIcon />
                            </Button>
                        </Grid>
                    }
                </Grid>
            }

            <MakeOfferDialog
                open={openOfferDialog}
                handleClose={() => handleMakeOfferDialog(false)}
                item_id={itemInfo?.item_id}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    favouriteInfo: state.profile.favouriteInfo,
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    BuyItem,
    GetItemViewItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedPrice);