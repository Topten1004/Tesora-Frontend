import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '330px',
        minWidth: '330px',
        overflow: 'auto',
        transition: '0.3s width',

        "& .MuiAccordionSummary-root": {
            minHeight: '50px !important',
            borderBottom: '1px solid #E3E1E3',
            padding: '0px 20px',
        },
        "& .MuiAccordionSummary-content": {
            margin: '0px !important',
        },
        "& .MuiAccordionDetails-root": {
            padding: '18px 20px',

            "& .MuiGrid-root": {
                paddingTop: '10px'
            }
        },
        "& .MuiPaper-root": {
            margin: '0px !important',

            "&::before": {
                content: 'unset'
            }
        },
        "& .MuiButton-root": {
            width: '100%',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px !important',
        },
        "& .MuiFormControl-root": {
            margin: '10px 0px',

            "& .MuiOutlinedInput-root": {
                height: '40px',
                borderRadius: '10px',
                padding: '0px 10px',
            }
        },
    },
    filter: {
        width: '100%',
        height: '64px',
        display: 'flex',
        justifyContent: 'space-between !important',
        alignItems: 'center',
        borderBottom: '1px solid lightgrey'
    },
    filterIcon: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        "& .MuiSvgIcon-root": {
            width: '30px',
            height: '30px',
        }
    },
    selectedSortBy: {
        background: '#008cff !important',
        color: '#ffffff !important',
    },
    categoryList: {
        display: 'flex',
        alignItems: 'center',
        color: 'black !important',
        fontWeight: 600,
        cursor: 'pointer',
        padding: '5px 0px',
    },
    categoryImage: {
        minWidth: '75px',
        width: '75px',
        height: '75px',
        borderRadius: '10px',
        overflow: 'hidden',
        marginRight: '15px',
    },
    categoryTitle: {
        width: '100%',
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '8px',
        transition: '0.3s',

        "&:hover": {
            background: 'linear-gradient(180deg, #29235C 2.17%, #1D71B8 98.23%)',
            color: 'white',
        }
    }
}));