
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiPaper-root": {
            maxWidth: '800px',
        },
        "& .MuiDialogTitle-root": {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid lightgrey',
            marginBottom: '20px'
        },
        "& .MuiDialogActions-root": {
            borderTop: '1px solid lightgrey',
        },
        "& .MuiButtonBase-root": {
            textTransform: 'unset'
        },
        "& .MuiOutlinedInput-root": {
            width: '500px'
        },
        "& img": {
            width: '350px',
            height: '350px',
            display: 'flex',
            margin: 'auto',
            marginBottom: '50px'
        }
    },
    title: {
        background: 'linear-gradient(134.69deg, #29235C 4.17%, #1D71B8 98.23%)',
        WebkitBackgroundClip: 'text',
        textFillColor: 'transparent',
        fontSize: '20px',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',

        "@media (max-width:900px)": {
            fontSize: '16px'
        }
    }
}));