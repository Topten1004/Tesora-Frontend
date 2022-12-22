import React, { useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

import Routing from './Routes';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css';

import {
    Box
} from '@mui/material';

import { makeStyles } from '@mui/styles';

AOS.init({
    once: true,
    duration: 2000,
});

const useStyles = makeStyles((theme) => ({
    root: {
        overflowX: 'auto',
        overflowY: 'hidden'
    }
}))

const Main = (props) => {
    const classes = useStyles();

    const location = useLocation();

    useEffect(() => {
        if (location.pathname) {
            window.scrollTo(0, 0)
        }
    }, [location.pathname])

    return (
        <Box className={classes.root}>

            <Header />
            <Routing />
            <Footer />
        </Box>
    )
}

Main.propTypes = {
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);