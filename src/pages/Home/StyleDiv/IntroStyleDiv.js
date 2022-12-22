import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 0px',
        paddingLeft: '120px',

        ['@media (max-width:1250px)']: {
            paddingLeft: '60px',
        },
        ['@media (max-width:900px)']: {
            padding: '50px 20px',
        },
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column !important',
        justifyContent: 'center !important',
    },
    title: {
        fontSize: '2.8vw',
        fontWeight: 'bold',
        color: '#2D2E83',

        ['@media (max-width:900px)']: {
            fontSize: '5.5vw',
            textAlign: 'center',
        },
        ['@media (max-width:600px)']: {
            fontSize: '7vw',
            textAlign: 'center',
        },
    },
    buttonGroup: {
        marginTop: '50px',

        "& .MuiButton-root": {
            minWidth: '110px',
            height: '40px',
            fontWeight: 'bold',
            textTransform: 'unset',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '25px',
            padding: '8px 30px',
            marginRight: '20px',
        },

        ['@media (max-width:900px)']: {
            textAlign: 'center',
            marginBottom: '50px'
        }
    },
    imageContainer: {
        position: 'relative'
    },
    bannerImage: {
        marginLeft: '-100px',
        "& img": {
            width: '100%',
        },

        ['@media (max-width:900px)']: {
            marginLeft: '-50px',
        },
    }
}));