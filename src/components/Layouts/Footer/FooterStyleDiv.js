import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid #E3E1E3',

        "& .MuiOutlinedInput-root": {
            height: '40px',
            borderRadius: '10px',
            paddingRight: '0px',

            "& .MuiInputAdornment-root": {
            },

            "& .MuiButton-root": {
                width: '120px',
                height: '40px',
                borderRadius: '10px'
            }
        },
        "& a": {
            color: '#2D2E36',
            textDecoration: 'unset'
        }
    },
    main: {
        padding: '30px 200px',

        ['@media (max-width:1200px)']: {
            padding: '30px 100px'
        },
        ['@media (max-width:600px)']: {
            padding: '30px 20px'
        }
    },
    text: {
        fontWeight: 600,
        marginTop: '10px',
        marginBottom: '27px'
    },
    listTitle: {
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '15px'
    },
    footer: {
        height: '100px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight: 'bold',
        borderTop: '1px solid #E3E1E3',
        padding: '0px 200px',

        "& .MuiSvgIcon-root": {
            margin: '10px'
        },

        ['@media (max-width:1200px)']: {
            padding: '0px 100px'
        },
        ['@media (max-width:600px)']: {
            display: 'grid',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '30px 20px'
        }
    },
    social: {
        "& a": {
            color: '#2D2E36'
        }
    }
}));