import { PRIVATE_TESORA_IMAGE_API } from 'static/constants';
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',

        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    imageContent: {
        position: 'relative',
        width: '100%',
        height: '250px',
    },
    backImage: {
        width: '100%',
        height: '100%',
        backgroundImage: props => `url(${props.headerPoint}${props.banner})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    smallImage: {
        position: 'absolute',
        bottom: -62,
        left: 0,
        right: 0,
        width: '125px',
        height: '125px',
        borderRadius: '50%',
        margin: 'auto',

        "& img": {
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        }
    },
    optionDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '20px',

        "@media (max-width : 600px)": {
            justifyContent: 'center',
            margin: '50px',
            marginTop: '100px',
        },

        "& .MuiButton-root": {
            width: '130px'
        }
    },
    headerDiv: {
        textAlign: 'center'
    },
    itemsContent: {
        padding: '0px 300px',
        "@media (max-width:1500px)": {
            padding: '0px 200px'
        },
        "@media (max-width:1100px)": {
            padding: '0px 100px'
        },
        "@media (max-width:900px)": {
            padding: '0px 50px'
        },
        "@media (max-width:600px)": {
            padding: '0px 20px'
        }
    },
    collectionName: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    collectionInfo: {
        width: '332px',
        display: 'flex',
        border: '1px solid #e7e7e7',
        borderRadius: '15px',
        margin: '15px auto'
    },
    item: {
        display: 'grid',
        width: '110px',
        padding: '15px 0px',
        alignItems: 'flex-end'
    },
    borderLeft: {
        borderLeft: '1px solid #e7e7e7',
    },
}))