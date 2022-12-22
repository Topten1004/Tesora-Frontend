import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        background: 'linear-gradient(134.69deg, #29235C 4.17%, #1D71B8 98.23%)',
        padding: '50px 200px',

        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ['@media (max-width:1000px)']: {
                paddingTop: '50px !important',
            },
        },
        ['@media (max-width:1270px)']: {
            padding: '100px 50px',
        },
        ['@media (max-width:900px)']: {
            padding: '100px 100px',
        },
        ['@media (max-width:750px)']: {
            padding: '100px 20px',
        }
    },
    topPannel: {
        position: 'absolute',
        top: -243,
        left: 0,
        right: 0,
        width: '60%',
        textAlign: 'center',
        background: 'white',
        borderRadius: '25px',
        padding: '50px 10%',
        margin: 'auto',

        "& img": {
            width: '80%'
        },
        ['@media (max-width:900px)']: {
            width: '80%',
            padding: '50px 50px',
        },
        ['@media (max-width:700px)']: {
            width: '90%',
            padding: '50px 20px',
        }
    },
    title: {
        fontSize: '2.5vw',
        fontWeight: 800,
        marginBottom: '50px',

        ['@media (max-width:900px)']: {
            fontSize: '30px'
        },
        ['@media (max-width:700px)']: {
            fontSize: '26px'
        }
    },
    text: {
        fontSize: '1.5vw',
        marginBottom: '30px',

        ['@media (max-width:900px)']: {
            fontSize: '18px'
        },
        ['@media (max-width:700px)']: {
            fontSize: '16px'
        }
    },
    cardList: {
        padding: '50px 0px',
        paddingTop: '600px',

        ['@media (max-width:1300px)']: {
            paddingTop: '400px'
        },
        ['@media (max-width:900px)']: {
            paddingTop: '300px'
        }
    },
    card: {
        width: '276px',
        height: '400px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        border: '3px solid #FFFFFF',
        borderRadius: '25px',
        padding: '30px 27px',

        ['@media (max-width:400px)']: {
            width: '300px',
        },
    },
    cardName: {
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '32px',
        marginBottom: '10px'
    },
    cardText: {
        textAlign: 'center',
        fontSize: '16px',
    }
}));