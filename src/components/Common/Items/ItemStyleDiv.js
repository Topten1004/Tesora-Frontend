

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {

        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    cardList: {
        padding: '50px 0px'
    },
    card: {
        position: 'relative',
        width: '100%',
        borderRadius: '10px',
        boxShadow: '0 5px 20px 0 #cccccc',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    cardImage: {
        height: '233px',
        overflow: 'hidden',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',

        "@media (max-width:600px)": {
            height: '180px'
        }
    },
    media: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform ease-in 0.5s',

        "&:hover": {
            transform: 'scale(1.3)',
        },
        "@media (max-width:600px)": {
            height: '180px'
        }
    },
    itemEdit: {
        height: '233px',
        position: 'absolute !important',
        backdropFilter: 'blur(10px)',
        opacity: 0.8,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.8s',
    },
    name: {
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: 'bold',
        cursor: 'pointer',

        "@media (max-width:600px)": {
            fontSize: '12px'
        }
    },
    option: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        "@media (max-width:600px)": {
            fontSize: '12px'
        }
    },
    acceptOffer: {
        width: '16px',
        height: '16px',
        background: '#fff695',
        border: '1px solid lightgrey',
        borderRadius: '4px',
    },
    onAuction: {
        width: '16px',
        height: '16px',
        background: '#ed00ad',
        border: '1px solid lightgrey',
        borderRadius: '4px',
    }
}));