import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '900px',
        border: '1px solid lightgrey',
        borderRadius: '8px',
        margin: '100px auto',

        "& .MuiInputLabel-root": {
            marginBottom: '10px'
        },
        "& .MuiListItem-root": {
            justifyContent: 'space-between',
            borderBottom: '1px solid grey',
            paddingLeft: '0px',
            paddingRight: '0px',
            marginBottom: '20px'
        },
        "& .MuiList-root": {
            marginBottom: '10px'
        },
        "& .MuiFormLabel-root": {
            marginBottom: '10px'
        },
        "& .MuiButton-root": {
            width: '200px',
            textTransform: 'none',
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
    onAuction: {
        display: 'flex',
        flexDirection: 'row !important',
        alignItems: 'center',

        "& input": {
            width: '180px',
            height: '25px',
        },

        "@media (max-width:600px)": {
            flexDirection: 'column !important'
        },
    },
    fileInput: {
        minHeight: '300px',
        display: 'flex !important',
        alignSelf: 'center',
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
    addBtn: {
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(32, 129, 226)',
        borderRadius: '8px',
        cursor: 'pointer',
        padding: '10px',

        "& .MuiSvgIcon-root": {
            color: 'white'
        }
    },
    propertyCard: {
        background: 'rgba(21, 178, 229, 0.06)',
        border: '1px solid rgb(21, 178, 229)',
        borderRadius: '6px',
        textAlign: 'center',
        padding: '10px',
        margin: '5px',
    },
    propertyType: {
        color: 'rgb(21, 178, 229)',
        fontSize: '11px',
        textTransform: 'uppercase'
    },
    propertyName: {
        color: 'rgb(53, 56, 64)',
        fontSize: '15px',
        lineHeight: '30px',
        overflow: 'hidden',
        textOverflow: 'elipsis',
        whiteSpace: 'noWrap'
    },
    submitBtn: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px'
    }
}))