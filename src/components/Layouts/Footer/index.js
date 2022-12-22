import React, { useState, useEffect } from 'react';

import Logo_Image from '../../../assets/Header/nft-logo.svg'
import { useStyles } from './FooterStyleDiv';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
    Box, Button, Grid, InputAdornment, List, ListItem, TextField, useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';

const tesora_nft = [
    {
        label: 'Explore',
        link: '/marketplace'
    },
    {
        label: 'How it Works',
        link: '/howitworks'
    },
    {
        label: 'Contact Us',
        link: '/contactus'
    },
]

const support = [
    {
        label: 'Help center',
        link: '/help'
    },
    {
        label: 'Terms of service',
        link: '/terms'
    },
    {
        label: 'Legal',
        link: '/legal'
    },
    {
        label: 'Privacy policy',
        link: '/privacy'
    },
]

const Footer = () => {

    const classes = useStyles();
    const match900 = useMediaQuery('(min-width : 900px)');
    const match600 = useMediaQuery('(min-width : 600px)');

    return (
        <Box className={classes.root}>
            <Grid container spacing={4} className={classes.main}>
                <Grid item xs={match900 ? 4 : 12}>
                    <Box component={'img'} src={Logo_Image} />

                    <Box className={classes.text}>
                        Get the lastes Updates
                    </Box>

                    <TextField
                        fullWidth
                        placeholder='Your Email'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Button variant="contained"> Email Me! </Button>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                {
                    match900 &&
                    <Grid item xs={2}></Grid>
                }

                <Grid item xs={match900 ? 6 : 12}>
                    <Grid container className={classes.itemList}>
                        <Grid item xs={6}>
                            <List>
                                <ListItem className={classes.listTitle}>
                                    Tesora NFT
                                </ListItem>
                                {
                                    tesora_nft.map((element, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <Link to={element.link}>
                                                    {element.label}
                                                </Link>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Grid>

                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <List>
                                <ListItem className={classes.listTitle}>
                                    Support
                                </ListItem>
                                {
                                    support.map((element, index) => {
                                        return (
                                            <ListItem key={index}>
                                                <Link to={element.link}>
                                                    {element.label}
                                                </Link>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Box className={classes.footer}>
                <Box>
                    MyCOM Tesora. All Rights Reserved
                </Box>
                <Box className={classes.social}>
                    <a href={"https://instagram.com"} target="_blank">
                        <InstagramIcon />
                    </a>
                    <a href={"https://twitter.com"} target="_blank">
                        <TwitterIcon />
                    </a>
                    <a href={"https://telegram.com"} target="_blank">
                        <TelegramIcon />
                    </a>
                </Box>
            </Box>
        </Box>
    )
}
export default Footer;