import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'auto',
        minHeight: '100vh',
        padding: '200px 100px',

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

        ["@media (max-width:600px)"]: {
            padding: '10px 10px'
        }
    },
    itemImage: {
        width: '50px',
        height: '50px',
        borderRadius: '10px',
        cursor: 'pointer',
    }
}))