
import React, { useRef, useState } from 'react';

import { connect } from 'react-redux';

import { useStyles } from './StyleDiv/NavBarStyleDiv';
import FilterSide from './FilterSide';

import {
    Box,
} from '@mui/material';

const NavBar = (props) => {

    const borderRadius = 50;
    const classes = useStyles({ borderRadius: borderRadius });

    return (
        <Box className={classes.root}>
            <FilterSide />
        </Box>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);