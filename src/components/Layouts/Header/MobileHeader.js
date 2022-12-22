import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { actionLogout } from "redux/actions/login-action";

import AuthService from "../../Auth/authServices";

import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  List,
  ListItem,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

const MobileHeaderView = (props) => {
  const { classes, menuList, profileList, Profile_Image, handleCloseDrawer } =
    props;

  const authService = new AuthService();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("access_token");
    props.actionLogout();
    localStorage.clear();
    handleCloseDrawer();
    navigate("/", { replace: true });
  };

  return (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      className={classes.menuBody}
    >
      <List className={classes.menuDiv}>
        <ListItem
          className={classes.closeDiv}
          onClick={() => handleCloseDrawer(false)}
        >
          <IconButton>
            <CloseIcon />
          </IconButton>
        </ListItem>

        <Box sx={{ padding: "0px 10px" }}>
          {menuList.map((element, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  "& a": {
                    color: location.pathname.includes(element.link)
                      ? "black"
                      : "rgba(44, 56, 74, 0.68)",
                  },
                }}
                onClick={() => handleCloseDrawer()}
              >
                <Link to={element.link}>{element.label}</Link>
              </ListItem>
            );
          })}
          {sessionStorage.getItem("access_token") ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItem sx={{ padding: "0px !important" }}>
                  <Box component={"img"} src={Profile_Image} />
                </ListItem>
              </AccordionSummary>
              <AccordionDetails>
                {profileList.map((row, index) => {
                  return (
                    <Box
                      key={index}
                      className={classes.dropDown}
                      sx={{
                        "& a": {
                          color: location.pathname.includes(row.link)
                            ? "black"
                            : "rgba(44, 56, 74, 0.68)",
                        },
                      }}
                      onClick={() => handleCloseDrawer()}
                    >
                      <Link to={row.link}>{row.label}</Link>
                    </Box>
                  );
                })}
                <Box
                  onClick={() => handleLogOut()}
                  className={classes.dropDown}
                >
                  Log out
                </Box>
              </AccordionDetails>
            </Accordion>
          ) : (
            <ListItem onClick={() => authService.signinRedirect()}>
              Login
            </ListItem>
          )}
        </Box>
      </List>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  actionLogout,
};

const MobileHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileHeaderView);

export { MobileHeader };
