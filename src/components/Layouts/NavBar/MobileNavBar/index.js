import React, { useContext, useState } from 'react';

import { connect } from 'react-redux';

import { useStyles } from '../StyleDiv/MobileNavBarStyleDiv';
import FilterSide from '../FilterSide';

import CloseIcon from '@mui/icons-material/Close';

import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
} from '@mui/material';

const MobileNavbar = (props) => {

    const classes = useStyles();

    const {
        handleClose
    } = props;

    return (
        <List>
            <ListItem>
                <Box className={classes.title}>
                    Filter
                </Box>
                <IconButton onClick={() => handleClose()}>
                    <CloseIcon />
                </IconButton>
            </ListItem>
            <FilterSide />
        </List>
    )
}

const mapStateToProps = state => ({
})
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);