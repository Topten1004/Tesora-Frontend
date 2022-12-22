
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        minHeight: '100vh',

        "& .MuiSkeleton-root": {
            transform: 'unset'
        }
    },
    profileInfo: {
        padding: '0px 60px',

        ['@media (max-width:900px)']: {
            padding: '16px'
        },
    },
    tab: {
        padding: '0px 60px',

        ['@media (max-width:900px)']: {
            padding: '16px'
        },
        ['@media (max-width:600px)']: {
            padding: '0px'
        }
    },
    userName: {
        fontSize: '30px',
        fontWeight: 'bold',
        wordBreak: 'break-all',

        "@media (max-width:900px)": {
            fontSize: '22px'
        }
    },
    walletAddress: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',

        "& img": {
            width: '16px',
            height: '16px',
            marginRight: '5px'
        },
        "& .MuiTooltip-tooltip": {
            color: 'red',
            height: 50,
        }
    },
    optionDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px',

        "& .MuiSvgIcon-root": {
            width: '50px',
            height: '50px',
            cursor: 'pointer'
        }
    },
    settingForm: {
        padding: '0px 60px',
        margin: '30px auto',

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

        "@media (max-width:900px)": {
            marginTop: '0px !important',
        }
    }
}))