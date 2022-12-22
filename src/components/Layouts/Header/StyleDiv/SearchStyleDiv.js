import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
    closeDiv: {
        display: "flex",
        justifyContent: "flex-end !important"
    },
    searchDiv: {

        "& .MuiOutlinedInput-root": {
            height: '40px',
            borderRadius: '10px',
        },
    }
}))