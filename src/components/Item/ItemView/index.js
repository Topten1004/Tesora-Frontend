import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetItemViewItem, GetItems, GetProfile } from 'redux/actions/getData';
import { ItemViewCleanup } from 'redux/actions/cleanup';

import { useStyles } from '../StyleDiv/ItemViewStyleDiv';
import Modal from './ImageModal';
import Loading from 'components/Common/Loading';
import AccordionGroup from './AccordionGroup';
import ItemDetail from './ItemDetail';
import { formatDBDate } from 'utils/helper';
import { ItemCard } from 'shared/ui';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import GridOnIcon from '@mui/icons-material/GridOn';

import {
    Box,
    Grid,
    useMediaQuery,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Link,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';

const tradeHead = [
    {
        name: 'Event',
        width: '80px'
    },
    {
        name: 'Price',
        width: '100px'
    },
    {
        name: 'From',
        width: '80px'
    },
    {
        name: 'To',
        width: '80px'
    },
    {
        name: 'Transaction Hash',
        width: '120px'
    },
    {
        name: 'CreatedDate',
        width: '120px'
    },
]

const ItemView = (props) => {

    const {
        GetItemViewItem,
        GetItems,
        ItemViewCleanup,
        itemInfo,
        items,
        filterCurrency
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    const { item_id } = useParams();
    const match1000 = useMediaQuery('(min-width : 1000px)');
    const match600 = useMediaQuery('(min-width : 600px)');

    const [offerInfo, setOfferInfo] = useState([]);
    const [auctionInfo, setAuctionInfo] = useState([]);
    const [historyInfo, setHistoryInfo] = useState([]);
    const [openImage, setOpenImage] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleOpenImage = () => {
        setOpenImage(true);
    }

    const handleCloseImage = () => {
        setOpenImage(false);
    }

    useEffect(() => {
        if (item_id && filterCurrency) {
            async function makeRequest() {
                await GetItemViewItem(item_id, filterCurrency)
                setLoading(false);
            }
            makeRequest();
        }
    }, [item_id, filterCurrency])

    useEffect(() => {
        if (itemInfo) {
            GetItems(itemInfo.collection_id?.collection_id, filterCurrency);
            setOfferInfo(itemInfo?.offers);
            setAuctionInfo(itemInfo?.auctions);
            setHistoryInfo(itemInfo?.histories);
        }
    }, [itemInfo])

    useEffect(() => {

        return () => {
            ItemViewCleanup()
        }
    }, [])

    return (
        <Box className={classes.root}>
            <Grid container spacing={match1000 ? 2 : 0} sx={{ width: '100%', marginLeft: '0px' }}>
                <Grid item xs={match1000 ? 5 : 12} sx={{ pl: 0 + ' !important' }}>
                    <Box
                        onClick={itemInfo?.mediaIpfs && handleOpenImage}
                        className={classes.imageContent}
                    >
                        <Box component={'img'}
                            src={itemInfo?.mediaIpfs}
                            className={classes.image}
                        />
                    </Box>
                    {
                        match1000 &&
                        <AccordionGroup
                            classes={classes}
                            itemInfo={itemInfo}
                        />
                    }
                </Grid>
                <Grid item xs={match1000 ? 7 : 12} className={classes.detail}>
                    <ItemDetail
                        itemInfo={itemInfo}
                        offerInfo={offerInfo}
                        auctionInfo={auctionInfo}
                    />
                </Grid>
            </Grid>

            <Accordion className={classes.tradeHistory}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <SwapVertIcon />
                    Trade History
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {
                                        tradeHead.map((element, index) => {
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
                                    historyInfo?.map((element, index) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    {element.history_type}
                                                </TableCell>
                                                <TableCell>
                                                    {element.price}
                                                </TableCell>
                                                <TableCell>
                                                    <Link href="#">
                                                        {element.from_user.user_name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link href="#">
                                                        {element.to_user.user_name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <a href={`https://goerli.etherscan.io/address/${element.transaction_hash}`}>
                                                        {element.transaction_hash.substring(0, 6) + "..." + element.transaction_hash.substring(element.transaction_hash.length - 4)}
                                                    </a>
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

            <Accordion className={classes.priceHistory}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <GridOnIcon />
                    More from this collection
                </AccordionSummary>
                <AccordionDetails>
                    {
                        items && items.map((element, index) => {
                            return (
                                <Box key={index} sx={{ minWidth: match1000 ? '24%' : match600 ? '49%' : '100%' }}>
                                    <ItemCard
                                        asset_img={element.media}
                                        item_name={element.name}
                                        collection_name={element.collection?.name}
                                        cat_name={element.category?.category_title}
                                        price={element.price}
                                        accept_offer={element.acceptOffer}
                                        enable_auction={element.enableAuction}
                                        itemEvt={{ to: `/item/view/${element.itemId}` }}
                                        collectionEvt={{ to: `/marketplace/collection`, data: element.collection.collection_id }}
                                        catEvt={{ to: `/marketplace`, data: element.category.category_id }}
                                        priceDisplay={element.priceDisplay}
                                    />
                                </Box>
                            )
                        })
                    }
                </AccordionDetails>
            </Accordion>
            {
                loading &&
                <Loading />
            }

            <Modal isOpen={openImage} closeModal={handleCloseImage}>
                <Box component={'img'} src={itemInfo?.mediaIpfs} className={classes.image} />
            </Modal>
        </Box>
    )
}

const mapStateToProps = state => ({
    itemInfo: state.itemView.itemInfo,
    items: state.itemView.items,
    filterCurrency: state.filter.filterCurrency
})

const mapDispatchToProps = {
    GetItemViewItem,
    GetItems,
    ItemViewCleanup
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemView);