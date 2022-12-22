

import React, { useState, useEffect } from 'react';

import Categories from '../../components/Common/Categories';
import Metaverso_Image from '../../assets/Home/metaverso.jpg';
import Sculpture_Image from '../../assets/Home/sculpture.jpg';
import Certificates_Image from '../../assets/Home/certificates.jpg';
import Painters_Image from '../../assets/Home/painters.png';
import Photography_Image from '../../assets/Home/photography.png';
import Modern_Image from '../../assets/Home/modern.png';

import {
    Box, Grid, useMediaQuery,
} from '@mui/material';

import { useStyles } from './StyleDiv/BrowseCategoryStyleDiv';

const collection = [
    {
        image: Metaverso_Image,
        name: 'METAVERSO',
        ethPrice: 0.0001,
        usdPrice: ''
    },
    {
        image: Sculpture_Image,
        name: 'PRIMARY SCULPTURE ARTISTS',
        ethPrice: 2.6,
        usdPrice: ''
    },
    {
        image: Certificates_Image,
        name: 'CERTIFICATES-UTILITY',
        ethPrice: 0.04,
        usdPrice: ''
    },
    {
        image: Painters_Image,
        name: 'PRIMARY PAINTERS ARTISTS',
        ethPrice: 0.3,
        usdPrice: ''
    },
    {
        image: Photography_Image,
        name: 'PHOTOGRAPHY',
        ethPrice: 5,
        usdPrice: ''
    },
    {
        image: Modern_Image,
        name: 'MODERN',
        ethPrice: 0.0001,
        usdPrice: ''
    },
]

const BrowseCategory = (props) => {

    const {
        categories
    } = props;

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Browse by category
            </Box>

            <Categories
                categories={categories}
            />
        </Box>
    )
}
export default BrowseCategory;