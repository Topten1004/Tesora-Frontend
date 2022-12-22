import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {

        "& .MuiGrid-item": {
            display: 'grid',
            justifyContent: 'center',
        },
    },
    cardList: {
        padding: '50px 0px'
    },
    card: {
        width: '250px',
        height: '250px',
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',

        "& img": {
            width: '250px',
            height: '250px',
            transition: 'transform ease-in 0.5s',

            "&:hover": {
                transform: 'scale(1.2)'
            },
            ['@media (max-width:500px)']: {
                width: '100%',
                height: '280px',
            },
        },
    },
    name: {
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: '16px'
    },
}));