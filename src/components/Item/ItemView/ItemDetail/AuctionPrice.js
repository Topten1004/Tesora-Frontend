
import React, { useState } from "react";

import { connect } from "react-redux";
import { GetItemViewItem } from "redux/actions/getData";

import { useStyles } from "components/Item/StyleDiv/ItemViewStyleDiv";
import BidDialog from "./BidDialog";

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import {
    Box,
    Button,
} from "@mui/material";

const AuctionPrice = (props) => {

    const {
        itemInfo,
    } = props;

    const classes = useStyles();

    const [openBidDialog, setOpenBidDialog] = useState(false);

    const handlePlaceBid = (type) => {
        setOpenBidDialog(type)
    }

    return (
        <Box className={classes.currentPrice}>
            Minimum bid -- Reserve price not met
            <Box className={classes.price}>
                {itemInfo?.auction_reserve} {itemInfo.collection_id?.contract_symbol}&nbsp;
            </Box>
            {
                itemInfo.current_owner?.user_id !== parseInt(sessionStorage.getItem('user_id')) &&
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handlePlaceBid(true)}
                    className={classes.bidBtn}
                >
                    <AccountBalanceWalletIcon />
                    Place bid
                </Button>
            }

            <BidDialog
                open={openBidDialog}
                handleClose={() => handlePlaceBid(false)}
                itemInfo={itemInfo}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    GetItemViewItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionPrice);