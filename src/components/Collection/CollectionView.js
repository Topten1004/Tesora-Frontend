import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { ClearItems, GetEditCollection } from '../../redux/actions/getData';

import clsx from 'clsx';

import Items from '../Common/Items';
import { useStyles } from './StyleDiv/CollectionVIewStyleDiv';
import Loading from 'components/Common/Loading';
import { PRIVATE_TESORA_IMAGE_API } from 'static/constants';
import CollectionPopover from './CollectionPopover';
import SearchBar from 'components/Common/SearchBar';

import {
    Box, Button, Skeleton
} from '@mui/material';

const settingData = [
    {
        label: 'Add Item',
        link: '/item/add'
    },
    {
        label: 'Edit Collection',
        link: '/collection/edit'
    },
    {
        label: 'Delete Collection',
        link: ''
    },
    {
        label: 'Activity',
        link: '/collection/activity'
    },
]

const CollectionViewForm = (props) => {

    const {
        GetEditCollection,
        ClearItems,
        collection,
        items
    } = props;

    const [collectionData, setCollectionData] = useState(null);

    const classes = useStyles({ banner: collectionData?.banner, headerPoint: PRIVATE_TESORA_IMAGE_API });
    const anchorRef = useRef();
    const navigate = useNavigate();
    const { collection_id } = useParams();

    const [loading, setLoading] = useState(true);
    const [settingPopover, setSettingPopover] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleChangeSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSettingPopover = (type) => {
        setSettingPopover(type);
    }

    const handleAddItem = () => {
        navigate('/item/add', { state: { data: collection_id } })
    }

    useEffect(() => {
        if (collection_id) {
            async function getData() {
                await GetEditCollection(collection_id)
                setLoading(false)
            }
            getData()
        }
    }, [collection_id])

    useEffect(() => {
        setCollectionData(null)

        if (collection) {
            setCollectionData(collection)
        }
    }, [collection])

    return (
        <Box className={classes.root}>
            <Box className={classes.imageContent}>
                {
                    collectionData?.banner ?
                        <Box className={classes.backImage} />
                        : <Skeleton variant='rectangular' width={'100%'} height={'100%'} />
                }
                <Box className={classes.smallImage}>
                    {
                        collectionData?.image ?
                            <Box component={'img'}
                                src={`${PRIVATE_TESORA_IMAGE_API}${collectionData?.image}`}
                            />
                            : <Skeleton variant='circular' width={'125px'} height={'125px'} />
                    }
                </Box>
            </Box>

            <Box className={classes.optionDiv}>
                <Button variant='contained' onClick={() => handleAddItem()}>
                    Add Item
                </Button>
            </Box>

            <Box className={classes.headerDiv}>
                <Box className={classes.collectionName}>
                    {collectionData?.name}
                </Box>

                <Box className={classes.collectionInfo}>

                    <Box className={classes.item}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.item_count} </Box>
                        <Box sx={{ fontSize: '14px' }}> Items </Box>
                    </Box>

                    <Box className={clsx(classes.item, classes.borderLeft)}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.Royalties} </Box>
                        <Box sx={{ fontSize: '14px' }}> Royalties </Box>
                    </Box>

                    <Box className={clsx(classes.item, classes.borderLeft)}>
                        <Box sx={{ fontWeight: 'bold' }}> {collectionData?.volume_traded} </Box>
                        <Box sx={{ fontSize: '14px' }}> Volume Traded </Box>
                    </Box>

                </Box>
            </Box>

            <Box className={classes.itemsContent}>
                <SearchBar
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
                {
                    items ? items.length ?
                        <Items items={items} />
                        : 'empty item' : ''
                }
            </Box>

            <CollectionPopover
                open={settingPopover}
                anchorRef={anchorRef}
                handleClosePopOver={() => handleSettingPopover(false)}
                popoverData={settingData}
                collection_id={collection_id}
            />

            {/* {
                loading && <Loading />
            } */}
        </Box>
    )

}

const mapStateToProps = state => ({
    collection: state.editCollection.collection
})

const mapDispatchToProps = {
    GetEditCollection,
    ClearItems
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionViewForm);