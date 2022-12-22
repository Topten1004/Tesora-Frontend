

import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '50px 200px',

        ['@media (max-width:1250px)']: {
            padding: '100px 50px',
        },
        ['@media (max-width:900px)']: {
            padding: '100px 100px',
        },
        ['@media (max-width:750px)']: {
            padding: '100px 20px',
        }
    },
    title: {
        fontSize: '36px',
        fontWeight: 'bold',
        marginBottom: '10px',

        ['@media (max-width:900px)']: {
            textAlign: 'center',
            fontSize: '46px',
        },
        ['@media (max-width:600px)']: {
            fontSize: '36px',
        },
        ['@media (max-width:450px)']: {
            fontSize: '28px',
        }
    },
    cardList: {
        padding: '50px 0px'
    },
    card: {
        width: '400px',
        height: '420px',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #e7e7e7',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',
    },
    cardImage: {
        fontSize: '16px',
        "& img": {
            width: '400px',
            height: '350px',
        }
    },
    imageName: {
        fontWeight: 'bold',
    },
}));