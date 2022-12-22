
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1240px',
        margin: '120px auto',
        marginBottom: '100px',

        "& .MuiPaper-root": {
            marginBottom: '10px !important'
        },
        "& a": {
            color: 'rgb(32, 129, 226)',
            textDecoration: 'none'
        },
        "& .MuiAccordionSummary-root": {
            height: '60px',
        },

        ["@media (max-width:1280px)"]: {
            width: '990px',
        },
        ["@media (max-width:1000px)"]: {
            width: '584px',
        },
        ["@media (max-width:600px)"]: {
            width: '350px',
        }
    },
    imageContent: {
        display: 'flex',
        justifyContent: 'center'
    },
    accordionGroup: {
        "& .MuiPaper-root": {
            border: '1px solid lightgrey !important',

            "& .MuiAccordionSummary-root": {
                fontWeight: 'bold',
            },
            "& .MuiAccordionDetails-root": {
                display: 'flex',
                alignItems: 'center',
                borderTop: '1px solid lightgrey',

                "& img": {
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    marginRight: '10px',
                },
                "& .MuiList-root": {
                    width: '100%',
                    "& .MuiListItem-root": {
                        justifyContent: 'space-between',
                        padding: '10px 0px'
                    }
                }
            },
            "& .MuiSvgIcon-root": {
                marginRight: '10px',
            }
        },
    },
    image: {
        width: '508px',
        height: '508px',
        objectFit: 'cover',
        cursor: 'pointer',
        marginBottom: '20px',

        ["@media (max-width:1280px)"]: {
            width: '400px',
            height: '400px',
        },
        ["@media (max-width:1000px)"]: {
            width: '582px',
            height: '582px',
        },
        ["@media (max-width:600px)"]: {
            width: '340px',
            height: '340px'
        }
    },
    detail: {
        color: 'rgb(112,122,131)',
        paddingTop: '30px !important',
    },
    collectionOption: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    collectionLink: {
        width: '138px',
        height: '46px',
        border: '1px solid lightgrey',
        borderRadius: '13px',

        "& .MuiButton-root": {
            minWidth: '45px',
            height: '45px',
            borderRadius: '0px',
            padding: '0px',
            "&:hover": {
                background: 'rgba(0, 0, 0, 0.15)'
            }
        }
    },
    favouriteBtn: {
        borderRight: '1px solid lightgrey',
        borderTopLeftRadius: '12px !important',
        borderBottomLeftRadius: '12px !important'
    },
    flagBtn: {
        borderTopRightRadius: '12px !important',
        borderBottomRightRadius: '12px !important'
    },
    collectionName: {
        color: 'black',
        fontSize: '30px',
        fontWeight: 600,
        marginBottom: '20px'
    },
    collectionHelper: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginBottom: '20px'
    },
    currentPrice: {
        border: '1px solid lightgrey',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',

        "& .MuiButton-root": {
            textTransform: 'none',
            borderRadius: '12px',
            padding: '25px 22px',
        },
    },
    price: {
        color: 'black',
        fontSize: '30px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    noWrap: {
        display: 'flex',
        whiteSpace: 'nowrap',
        '& .MuiSvgIcon-root': {
            cursor: 'pointer',
            marginRight: '5px'
        }
    },
    ownedBy: {
        color: 'rgb(32, 129, 226)',
        cursor: 'pointer'
    },
    buyBtn: {
        "& .MuiSvgIcon-root": {
            width: '24px',
            height: '24px',
        },
    },
    offerBtn: {
        border: '2px solid rgb(229, 232, 235) !important',

        "&:hover": {
            boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 10px',
            transition: 'all 0.2s ease 0s'
        },
        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        },
    },
    bidBtn: {
        "& .MuiSvgIcon-root": {
            marginRight: '10px'
        },
    },
    priceHistory: {
        fontWeight: 'bold',
        borderRadius: '8px !important',
        border: '1px solid lightgrey !important',
        marginBottom: '10px',

        "& .MuiTableContainer-root": {
            paddingBottom: '10px'
        },
        "& .MuiTable-root": {
            borderCollaps: 'collapse',
            borderStyle: 'hidden',

            "& th": {
                fontWeight: 700,
            },
            "& .MuiTableBody-root": {

                "& .MuiTableRow-root:nth-child(odd)": {
                    backgroundColor: '#999999 !important',
                    "& .MuiTableCell-root": {
                        color: 'white'
                    }
                },
                "& a": {
                    color: '#008cff',
                    textDecoration: 'none',
                }
            },
            "& .MuiTableCell-root": {
                fontSize: '18px',
                border: '1px solid #E3E1E3',
                padding: '10px',

                "&:first-child": {
                    borderLeftStyle: 'solid',
                    borderTopLeftRadius: '11px',
                    borderBottomLeftRadius: '11px'
                },
                "&:last-child": {
                    borderRightStyle: 'solid',
                    borderTopRightRadius: '11px',
                    borderBottomRightRadius: '11px'
                },
                ["@media (max-width:600px)"]: {
                    fontSize: '14px',
                    padding: '5px',
                }
            },
        },
        "& .MuiButton-root": {
            padding: '11px 24px'
        },
        "& .MuiAccordionDetails-root": {
            display: 'flex',
            borderTop: '1px solid lightgrey',
            paddingTop: '20px',
            gap: '16px',
            overflow: 'auto'
        },
        "&::before": {
            content: 'none !important'
        },
        "& .MuiSvgIcon-root": {
            marginRight: '10px',
        },
        "& .MuiGrid-item": {
            display: 'flex',
            justifyContent: 'center',
        },

    },
    tradeHistory: {
        fontWeight: 'bold',
        borderRadius: '8px !important',
        border: '1px solid lightgrey !important',
        marginBottom: '10px',

        "& .MuiTable-root": {
            borderCollaps: 'collapse',
            borderStyle: 'hidden',

            "& th": {
                fontWeight: 700,
            },
            "& .MuiTableBody-root": {
                "& a": {
                    color: '#008cff',
                    textDecoration: 'none',
                }
            },
            "& .MuiTableCell-root": {
                fontSize: '18px',
                border: '1px solid #E3E1E3',
                padding: '10px',

                ["@media (max-width:600px)"]: {
                    fontSize: '14px',
                    padding: '5px',
                }
            },
        },
        "& .MuiAccordionDetails-root": {
            display: 'flex',
            borderTop: '1px solid lightgrey',
            paddingTop: '20px',
            overflow: 'auto'
        },
        "&::before": {
            content: 'none !important'
        },
        "& .MuiSvgIcon-root": {
            marginRight: '10px',
        },

    },
    card: {
        width: '270px',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #e7e7e7',
        boxShadow: '0 5px 20px 0 #cccccc',
        cursor: 'pointer',
        margin: '16px',

        ["@media (max-width:600px)"]: {
            width: '171px'
        }
    },
    cardImage: {
        fontSize: '16px',
        "& img": {
            width: '270px',
            height: '270px',

            ["@media (max-width:600px)"]: {
                width: '171px',
                height: '171px',
            }
        }
    },
    imageName: {
        fontSize: '12px',
        fontWeight: 'bold',
    },
    imagePrice: {
        fontSize: '16px',
        fontWeight: 400,
    }
}))