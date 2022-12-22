import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';
import { GetMarketPlaceViewModel } from 'redux/actions/getData';

import { validate } from 'validate.js';

import { useStyles } from './StyleDiv/CreateItemStyleDiv';
import CreateItemDiv from './CreateItemForm';
import AddPropertyDialog from './AddPropertyDialog';

import {
    Box, Paper
} from '@mui/material';

const schema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    description: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 300,
        },
    },
    categoryId: {
        presence: { allowEmpty: false, message: 'is required' }
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
        numericality: { noString: true, message: 'must be number' }
    },
    reservePrice: {
        numericality: { noString: true, message: 'must be number' }
    },
    auction: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    offer: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    media: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    status: {
        presence: { allowEmpty: false, message: 'is required' },
    }
};

const CreateItemForm = (props) => {

    const {
        GetMarketPlaceViewModel,
        categories,
    } = props;

    const classes = useStyles();
    const location = useLocation();

    const [collectionId, setCollectionId] = useState(null);
    const [propertyOpen, setPropertyOpen] = useState(false);
    const [levelOpen, setLevelOpen] = useState(false);
    const [statOpen, setStatOpen] = useState(false);
    const [auctionStartDate, setAuctionStartDate] = useState('');
    const [auctionEndDate, setAuctionEndDate] = useState('');

    const [propertyList, setPropertyList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });
    const [levelList, setLevelList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });
    const [statList, setStatList] = useState({
        isValid: false,
        values: [],
        touched: {},
        errors: {}
    });

    const [selectedThumb, setSelectedThumb] = useState({
        preview: "",
        raw: ""
    });
    const [selectedMedia, setSelectedMedia] = useState({
        preview: "",
        raw: ""
    });
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    })

    const handleChange = event => {
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'file'
                        ? event.target.files[0]
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            }
        }))
    }

    const handleChangeThumb = e => {
        if (e.target.files[0]) {
            handleChange(e);
            setSelectedThumb({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleChangeMedia = e => {
        if (e.target.files[0]) {
            handleChange(e);
            setSelectedMedia({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            })
        }
    }

    const handleAddPropertiesOpen = (type) => {
        setPropertyOpen(type)
    }

    const handleAddLevelsOpen = (type) => {
        setLevelOpen(type)
    }

    const handleAddStatsOpen = (type) => {
        setStatOpen(type)
    }

    useEffect(() => {
        console.log(formState)
        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));

        if (formState.values.auction === 'false') {
            setAuctionEndDate('');
            setAuctionStartDate('');
        }

    }, [formState.values]);

    useEffect(() => {
        GetMarketPlaceViewModel()
    }, [])

    useEffect(() => {
        if (location.state)
            setCollectionId(location.state.data)
    }, [location.state])

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <Box className={classes.root}>
            <Paper>
                <Box className={classes.header}>
                    Add Your Item
                </Box>
                <CreateItemDiv
                    classes={classes}
                    selectedThumb={selectedThumb}
                    selectedMedia={selectedMedia}
                    formState={formState}
                    handleChange={handleChange}
                    handleChangeThumb={handleChangeThumb}
                    handleChangeMedia={handleChangeMedia}
                    hasError={hasError}
                    handleAddPropertiesOpen={() => handleAddPropertiesOpen(true)}
                    handleAddLevelsOpen={() => handleAddLevelsOpen(true)}
                    handleAddStatsOpen={() => handleAddStatsOpen(true)}
                    propertyList={propertyList}
                    levelList={levelList}
                    statList={statList}
                    categories={categories}
                    collectionId={collectionId}
                    auctionStartDate={auctionStartDate}
                    setAuctionStartDate={setAuctionStartDate}
                    auctionEndDate={auctionEndDate}
                    setAuctionEndDate={setAuctionEndDate}
                />
            </Paper>

            <AddPropertyDialog
                open={propertyOpen}
                handleClose={() => handleAddPropertiesOpen(false)}
                setAttributeList={setPropertyList}
            />

            <AddPropertyDialog
                open={levelOpen}
                handleClose={() => handleAddLevelsOpen(false)}
                setAttributeList={setLevelList}
            />

            <AddPropertyDialog
                open={statOpen}
                handleClose={() => handleAddStatsOpen(false)}
                setAttributeList={setStatList}
            />
        </Box>
    )
}

const mapStateToProps = state => ({
    categories: state.marketPlace.categories,
})

const mapDispatchToProps = {
    GetMarketPlaceViewModel
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemForm);