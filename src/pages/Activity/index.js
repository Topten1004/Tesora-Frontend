import React, { useState, useEffect } from 'react' ;

import { connect } from 'react-redux';
import { GetActivityViewModel } from '../../redux/actions/getData';

import ActivityForm from '../../components/Activity';

import {
    Box ,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : '80px',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    }
}));

const Activity = (props) => {

    const {
        GetActivityViewModel,
        histories
    } = props;

    const classes = useStyles() ;

    useEffect(() => {
        GetActivityViewModel()
    }, [])

    return (
        <Box className = {classes.root}>
            <ActivityForm histories={histories}/>
        </Box>
    )
}

const mapStateToProps = state => ({
    histories : state.activity.histories
})

const mapDispatchToProps = {
    GetActivityViewModel
}

export default connect(mapStateToProps, mapDispatchToProps) (Activity) ;