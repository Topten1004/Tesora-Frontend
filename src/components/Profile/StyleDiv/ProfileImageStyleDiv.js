import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '320px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px 32px',

        "& img": {
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }
    },
    profileImage: {
        width: '180px',
        height: '180px',
        display: 'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',

        "& img": {
            borderRadius: '50%'
        },

        "@media (max-width:900px)": {
            width: '120px',
            height: '120px',
        },
    },
    image: {
        margin: 'auto'
    }
}))