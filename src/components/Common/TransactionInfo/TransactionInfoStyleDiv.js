
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',

        "& .MuiTableContainer-root": {
            border: '1px solid #E3E1E3',
            borderRadius: '15px',

            "& .MuiTableBody-root": {
                "& a": {
                    color: '#008cff',
                    textDecoration: 'none',
                }
            },
            "& .MuiTableCell-root": {
                fontSize: '18px',
                textAlign: 'center',
                borderLeft: '1px solid #E3E1E3',
                padding: '10px',

                ["@media (max-width:600px)"]: {
                    fontSize: '14px',
                    padding: '5px',
                }
            }
        },
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '28px',
        color: '#1B1A21',
        fontWeight: 'bold',
        paddingLeft: '50px',

        "& img": {
            width: '30px',
            height: '30px',
            marginLeft: '15px'
        }
    },
    tableContent: {
        padding: '30px 30px',
        ["@media (max-width:600px)"]: {
            padding: '10px 10px'
        }
    },
    collectionImage: {
        width: '50px',
        height: '50px',
        boxShadow: '10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)',
        borderRadius: '50%',
        cursor: 'pointer',

        ["@media (max-width:600px)"]: {
            width: '40px',
            height: '40px',
        }
    },
    itemImage: {
        width: '150px',
        height: '100px',
        borderRadius: '4px',
        cursor: 'pointer',

        ["@media (max-width:600px)"]: {
            width: '70px',
            height: '60px',
        }
    }
}))