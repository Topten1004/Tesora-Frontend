import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import CollectionDeleteDialog from "../Collection/CollectionDeleteDialog";

import { Box, List, ListItem, Popover } from "@mui/material";

import { makeStyles } from "@mui/styles";

import { actionLogout } from "../../redux/actions/login-action";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  popOver: {
    fontSize: "16px",
    "& .MuiListItem-root": {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      fontWeight: "bold",
      color: "rgba(44, 56, 74, 0.68)",
      cursor: "pointer",

      "&:hover": {
        background: "#d8dbe0",
      },
    },
    "& a": {
      width: "100%",
      fontSize: "20px",
      fontWeight: "bold",
      textDecoration: "unset",
    },
  },
}));

const ProfilePopover = (props) => {
  const { open, anchorRef, handleClosePopOver, popoverData } = props;

  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const [openDialog, setOpenDialog] = useState(false);

  const handleNavigate = () => {
    sessionStorage.removeItem("access_token");
    props.actionLogout();
    localStorage.clear();
    handleClosePopOver();
    navigate("/", { replace: true });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Popover
        id="popover"
        open={open}
        anchorEl={anchorRef ? anchorRef.current : null}
        onClose={handleClosePopOver}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: { width: "220px" },
        }}
      >
        <Box className={classes.popOver}>
          <List>
            {popoverData.map((element, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => handleClosePopOver()}
                  sx={{
                    "& a": {
                      color: location.pathname.includes(element.link)
                        ? "black !important"
                        : "rgba(44, 56, 74, 0.68) !important",
                    },
                  }}
                >
                  <Link to={element.link}>{element.label}</Link>
                </ListItem>
              );
            })}
            <ListItem onClick={() => handleNavigate()}>Log out</ListItem>
          </List>
        </Box>
      </Popover>
      <CollectionDeleteDialog
        open={openDialog}
        handleClose={handleCloseDialog}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  actionLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePopover);