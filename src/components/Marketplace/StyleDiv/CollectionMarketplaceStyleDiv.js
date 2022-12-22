import Art_Image from '../../../assets/Marketplace/art.png'

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    topImage: {
        width: '100%',
        height: '250px',
        backgroundImage: `url(${Art_Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    mainContent: {
        width: '100%',
        padding: '32px 32px',

        '@media (max-width:600px)': {
            padding: '0px 16px'
        }
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',

        ['@media (max-width:600px)']: {
            fontSize: '20px'
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
    drawerPaper: {
        height: '100% !important',
    },
}))