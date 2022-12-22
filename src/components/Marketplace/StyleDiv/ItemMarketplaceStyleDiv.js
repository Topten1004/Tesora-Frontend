
import Art_Image from '../../../assets/Marketplace/art.png'

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',

        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    topImage: {
        width: '100%',
        height: '250px',
        overflow: 'hidden',
        backgroundImage: `url(${Art_Image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        "@media (max-width:600px)": {
            height: '100px'
        }
    },
    mainContent: {
        width: '100%',
        minHeight: 'calc(100vh - 330px)',
        padding: '0px 20px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '20px',

        ['@media (max-width:600px)']: {
            fontSize: '20px'
        },
    },
    searchDiv: {
        display: 'flex',
        alignItems: 'center',

        "& .MuiFormControl-root": {
            width: 'calc(100% - 80px)',
            marginTop: '20px',
            marginBottom: '20px',

            "& .MuiOutlinedInput-root": {
                height: '40px',
                borderRadius: '10px',
                padding: '0px 10px',
            },
            ['@media (max-width:600px)']: {
                width: '300px',
            },
        },

        ['@media (max-width:600px)']: {
            width: '300px',
            display: 'grid',
            justifyItems: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
    filterBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        marginBottom: '20px',

        "& .MuiButton-root": {
            width: '300px',
            marginLeft: '0px',

            ['@media (max-width:600px)']: {
                width: '200px',
            },
        }
    },
    resetBtn: {
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(134.69deg, #29235C 4.17%, #1D71B8 98.23%)',
        WebkitBackgroundClip: 'text',
        textFillColor: 'transparent',
        fontWeight: 800,
        cursor: 'pointer',
        marginLeft: '20px',

        "& .MuiSvgIcon-root": {
            width: '40px',
            height: '40px',
            fill: 'linear-gradient(134.69deg, #29235C 4.17%, #1D71B8 98.23%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    drawerPaper: {
        height: '100vh !important'
    }
}))