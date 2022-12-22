import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '800px',
        border: '1px solid lightgrey',
        borderRadius: '8px',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',

        "& .MuiButtonBase-root": {
            width: '200px',
            textDecoration: 'none',
            textTransform: 'none',
            marginTop: '50px',
        },

        ['@media (max-width:900px)']: {
            width: '500px'
        },
        ['@media (max-width:550px)']: {
            width: '340px'
        }
    },
    header: {
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        background: 'rgb(32, 129, 226)',
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        paddingLeft: '30px',
    },
    form: {
        width: '100%',
        padding: '30px',

        "& .MuiFormControl-root": {
            marginBottom: '20px',
        }
    },
    fileInput: {
        minHeight: '300px',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgb(179, 179, 179)',
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',

        "& img": {
            width: '100%',
            height: '300px'
        },
        "& .MuiSvgIcon-root": {
            width: '60px',
            height: '60px'
        },
    },
    submitBtn: {
        display: 'flex',
        justifyContent: 'center'
    }
}))