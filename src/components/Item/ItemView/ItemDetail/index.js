import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { AddFavourite, AcceptMyOffer, RemoveFavourite, BuyItem } from "redux/actions/actions";
import { GetItemViewItem, GetMyFavorites } from "redux/actions/getData";

import { useStyles } from "../../StyleDiv/ItemViewStyleDiv";
import AccordionGroup from "../AccordionGroup";
import PriceHistory from "./PriceHistory";
import ItemOffers from "./ItemOffers";
import FixedPrice from "./FixedPrice";
import AuctionPrice from "./AuctionPrice";
import AuctionsList from "./AuctionsList";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import {
    Box,
    Link,
    useMediaQuery,
    Stack,
} from "@mui/material";
import axios from "axios";

const ItemDetail = (props) => {

    const {
        itemInfo,
        historyInfo,
        offerInfo,
        favouriteInfo,
        AddFavourite,
        RemoveFavourite,
        GetItemViewItem,
        GetMyFavorites,
        filterCurrency
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const match1000 = useMediaQuery('(min-width : 1000px)');

    const [favourite, setFavourite] = useState(false);

    const handleChangeFavourite = async () => {
        if (!favourite) {
            let res = await AddFavourite(itemInfo.item_id, navigate)
            await GetItemViewItem(itemInfo.item_id, filterCurrency)
            if (res)
                setFavourite(!favourite)
        }
        else {
            let res = await RemoveFavourite(itemInfo.item_id, navigate)
            await GetItemViewItem(itemInfo.item_id, filterCurrency)
            if (res)
                setFavourite(!favourite)
        }
    }

    const getNowTime = async (date) => {
        // const res = await axios.get('https://nftapplication.api.mycom.world/api/v1/Home/GetNowTime');
        return Date.parse(date)
    }

    useEffect(() => {
        async function getFavourites() {
            await GetMyFavorites()
        }
        getFavourites()
    }, [])

    useEffect(() => {
        if (favouriteInfo) {
            favouriteInfo.forEach(element => {
                if (element.itemId === itemInfo?.item_id) {
                    setFavourite(true)
                }
            });
        }
    }, [favouriteInfo])

    return (
        <Box>
            <Box className={classes.collectionOption}>
                <Link href="/marketplace">
                    {itemInfo.category_id?.title}
                </Link>
            </Box>

            <Box className={classes.collectionName}>
                {itemInfo?.name}
            </Box>

            <Box className={classes.collectionHelper}>
                <Box className={classes.noWrap}>
                    Owned by &nbsp;
                    <Box
                        className={classes.ownedBy}
                        onClick={() => navigate('/profile', { state: { data: itemInfo.current_owner?.user_id } })}
                    >
                        {itemInfo.current_owner?.user_name}
                    </Box>
                </Box>
                <Stack direction={'row'} className={classes.noWrap}>
                    <RemoveRedEyeIcon />&nbsp;
                    {itemInfo?.view_count} views
                </Stack>
                <Stack direction={'row'} className={classes.noWrap}>
                    {
                        !favourite ?
                            <FavoriteBorderIcon onClick={() => handleChangeFavourite()} />
                            : <FavoriteIcon onClick={() => handleChangeFavourite()} sx={{ color: '#eb5757' }} />
                    }
                    {itemInfo?.like_count} favorites
                </Stack>
            </Box>

            {
                itemInfo?.enable_auction &&
                    (getNowTime(itemInfo?.start_date) < getNowTime(new Date()))
                    && (getNowTime(itemInfo?.end_date) > getNowTime(new Date())) ?
                    <AuctionPrice
                        itemInfo={itemInfo}
                    />
                    : <FixedPrice
                        itemInfo={itemInfo}
                    />
            }


            {
                !match1000 &&
                <AccordionGroup
                    classes={classes}
                    itemInfo={itemInfo}
                />
            }

            <PriceHistory
                historyInfo={historyInfo}
            />
            <ItemOffers
                itemInfo={itemInfo}
                offerInfo={offerInfo}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    favouriteInfo: state.profile.favouriteInfo,
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    AcceptMyOffer,
    AddFavourite,
    RemoveFavourite,
    BuyItem,
    GetItemViewItem,
    GetMyFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);