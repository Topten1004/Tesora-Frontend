import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0px 60px',
        margin: '30px auto',

        "& .MuiFormControl-root": {
        },
        "& .MuiInputLabel-root": {
            fontWeight: 'bold',
            marginBottom: '10px'
        },

        "@media (max-width:900px)": {
            padding: '0px 20px'
        }
    },
    submitBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '24px !important',

        "& .MuiButtonBase-root": {
            width: '300px',
            textDecoration: 'none',
            textTransform: 'none'
        },
    }
}))