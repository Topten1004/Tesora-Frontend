import React, { useState } from "react";

import PrivacyEn from "./PrivacyEn";
import PrivacySp from "./PrivacySp";
import PrivacyIt from "./PrivacyIt";

import { Box, MenuItem, Select, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: '100px',

        "@media (max-width : 900px)": {
            padding: '100px 20px'
        },

        "& .MuiInputBase-root": {
            display: 'flex',
            width: '120px',
            height: '40px',
            marginLeft: 'auto'
        }
    },
    title: {
        fontSize: '60px',
        fontWeight: 'bold',
        marginBottom: '50px',

        "@media (max-width : 900px)": {
            fontSize: '40px',
        },
    },
}))

const PrivacyPolicy = () => {

    const classes = useStyles();

    const [langValue, setLangValue] = useState('en');

    const handleChange = event => {
        setLangValue(event.target.value)
    }

    return (
        <Box className={classes.root}>
            <Select
                value={langValue}
                onChange={handleChange}
            >
                <MenuItem value={'en'}>
                    English
                </MenuItem>
                <MenuItem value={'sp'}>
                    Spanish
                </MenuItem>
                <MenuItem value={'it'}>
                    Italian
                </MenuItem>
            </Select>
            <div className={classes.title}>
                Privacy Policy
            </div>
            {
                langValue === 'en' && <PrivacyEn /> ||
                langValue === 'sp' && <PrivacySp /> ||
                langValue === 'it' && <PrivacyIt />
            }
        </Box>
    )
}

export default PrivacyPolicy;