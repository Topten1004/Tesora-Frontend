import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    zIndex: 1000,
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    boxShadow:
      "10px 6px 8px 0px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)",
    padding: "0px 35px",

    "& .MuiList-root": {
      display: "flex",
      alignItems: 'center',
      marginLeft: "100px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "rgba(44, 56, 74, 0.68)",

      "& .MuiListItem-root": {
        cursor: "pointer",
      },
      "@media (max-width:1100px)": {
        marginLeft: "40px",
      },
    },
    "& a": {
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "unset",
    },
    "& .MuiAccordionSummary-root": {
      height: "70px",
      padding: 0,
    },
    "& .MuiSvgIcon-root": {
      cursor: "pointer",
    },
    "& .MuiOutlinedInput-root": {
      height: "40px",
      borderRadius: "10px",
      margin: '10px'
    },
    ["@media (max-width:600px)"]: {
      padding: "0px 10px",
    },
  },
  logoImage: {
    width: "135px",
    height: "70px",
    cursor: "pointer",
    marginRight: "20px",

    "@media (max-width:600px)": {
      width: "100px",
      height: "60px",
    },
  },
  profileImage: {
    width: "40px",
    height: "40px",
    cursor: "pointer",
    margin: "auto",
    marginLeft: "20px",
    marginRight: "20px",
  },
  menuIcon: {
    marginLeft: "50px",
  },
  drawer: {
    width: "100%",
    zIndex: "999999999999999 !important",
    "& .MuiPaper-root": {
      width: "100%",
    },
    "& .MuiListItem-root": {
      display: "flex",
      alignItems: "center",
      padding: "20px",
      paddingLeft: "0px",
      cursor: "pointer",
    },
  },
  menuBody: {
    zIndex: 9999,
  },
  closeDiv: {
    display: "flex",
    justifyContent: "flex-end !important",
  },
  menuDiv: {
    height: "100%",
    padding: "0px 24px",
    "& .MuiListItem-root": {
      color: "rgba(44, 56, 74, 0.68)",
      fontSize: "20px",
      fontWeight: "bold",
      cursor: "pointer",
      padding: "20px 10px",
    },
    "& a": {
      width: "100%",
      textDecoration: "none ",
      color: "white",
    },
  },
  dropDown: {
    color: "rgba(44, 56, 74, 0.68)",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "10px 20px",
    cursor: "pointer",
  },
}));
