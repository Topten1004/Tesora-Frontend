import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '600px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',

        "@media (max-width:900px)": {
            width: '350px'
        }
    },
    saleType: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',

        "& .MuiFormControl-root": {
            flexDirection: 'row',
            alignItems: 'center',
            "& .MuiInputBase-input": {
                padding: '8px 10px'
            }
        },
        "& .MuiButton-root": {
            marginTop: '30px'
        }
    },
    title: {
        textAlign: 'center',
        fontSize: '26px',
        fontWeight: 'bold',
        marginBottom: '20px',
    },
    fixedPrice: {
        display: 'flex',
        alignItems: 'center',
        gap: '30px',

        "& .MuiOutlinedInput-root": {
            height: '40px'
        }
    },
    reservePrice: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',

        "& .MuiOutlinedInput-root": {
            height: '40px'
        }
    },
    onAuction: {
        "& .react-datepicker-wrapper": {
            width: '150px',

            "& input": {
                width: '150px',
                height: '30px',

                "@media (max-width:900px)": {
                    width: '100px'
                }
            },

            "@media (max-width:900px)": {
                width: '100px'
            }
        }
    }
}))