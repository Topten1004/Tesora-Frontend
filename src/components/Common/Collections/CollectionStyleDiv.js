

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    cardList: {
        padding: '20px 0px'
    },
    card: {
        width: '100%',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',
        transition: 'all 0.3s ease 0s',

        "&:hover": {
            background: 'white',
        },

        ['@media (max-width:450px)']: {
            width: '280px',
        },
    },
    cardImage: {
        position: 'relative',
        fontSize: '16px',
    },
    bannerImage: {
        width: '100%',
        height: '250px',

        ['@media (max-width:450px)']: {
            width: '280px',
            height: '160px',
        },
    },
    desc: {
        textAlign: 'center',
        padding: '10px',
        marginTop: '30px'
    },
    collectionName: {
        fontWeight: 'bold',
    },
    collectionImage: {
        position: 'absolute',
        bottom: -28,
        left: 0,
        right: 0,
        width: '64px !important',
        height: '64px !important',
        border: '3px solid ivory',
        borderRadius: '50%',
        margin: 'auto',
    }
}));