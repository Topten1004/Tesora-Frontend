import React, { useState, useEffect } from 'react' ;

import CreateItemForm from '../../components/Item/CreateItem';

import {
    Box,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        marginTop : '80px',
    }
}));

const CreateItem = () => {

    const classes = useStyles() ;

    return (
        <Box className = {classes.root}>
            <CreateItemForm />
        </Box>
    )
}
export default CreateItem ;