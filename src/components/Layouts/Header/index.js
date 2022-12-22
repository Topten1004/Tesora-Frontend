import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import { connect } from "react-redux";
import { GetAuthenticated, AuthenticationLogin } from "redux/actions/getData";
import { actionLoginInfo, actionLogout } from "redux/actions/login-action";
import { SetFilterCurrency } from "redux/actions/filter";

import { MobileHeader } from "./MobileHeader";
import { SearchDrawer } from "./SearchDrawer";
import { useStyles } from "./StyleDiv/HeaderStyleDiv";
import ProfilePopover from "../../Common/ProfilePopover";
import Logo_Image from "assets/Header/nft-logo.svg";
import Profile_Image from "assets/Header/pro_ic.png";
import AuthService from "../../Auth/authServices";
import Loading from "components/Common/Loading";

import queryString from "query-string";
import jwt_decode from "jwt-decode";
import { localStorageSessionKey } from "constants/sso-creditial";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import {
  Box,
  List,
  ListItem,
  useMediaQuery,
  Drawer,
  TextField,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from "@mui/material";

const menuList = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Marketplace",
    link: "/marketplace",
  },
];

const authList = [
  {
    label: "Login",
  },
];

const profileList = [
  {
    label: "My Profile",
    link: "/profile",
  },
  {
    label: "My Wallet",
    link: "/mywallet",
  },
  {
    label: "My Collection",
    link: "/collection/mycollection",
  },
  {
    label: "My Favorites",
    link: "/favourited",
  },
  {
    label: "My Offers",
    link: "/myoffers",
  },
];

const Header = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const match = useMediaQuery("(min-width : 900px)");
  const profileAnchorRef = useRef(null);
  const authService = new AuthService();

  const [routeType, setRouteType] = useState("Home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("mode", process.env.NODE_ENV);

  const handleOpenProfile = () => {
    setProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setProfileOpen(false);
  };

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSearchDrawer = (type) => {
    setSearchDrawerOpen(type);
  };

  const handleLoginNavigate = () => {
    authService.signinRedirect();
  };

  const handleChangeCurrency = (e) => {
    props.SetFilterCurrency(e.target.value);
  };

  const getAuthCodeFromUrl = () => {
    let str = window.location.search;
    if (str.length > 0) {
      var value = queryString.parse(window.location.search);
      if (Object.keys(value).includes("refe")) {
        let token = sessionStorage.getItem(
          "oidc.user:https://auth.tesora.dev:NFT_Museum_dev"
          // process.env.NODE_ENV === "production"
          // ? "oidc.user:https://auth.tesoragroup.com:NFT_Museum_dev"
          // : "oidc.user:https://auth.tesora.dev:NFT_Museum_dev"
        );
        if (token !== undefined && token !== null) {
          setLoading(true);
          const res = JSON.parse(token);
          callSsoAuthZeroApiForToken(res);
        }
      }
    }
  };

  const callSsoAuthZeroApiForToken = async (res) => {
    const token = res["access_token"];
    const idtoken = res["id_token"];
    sessionStorage.setItem("id_token", idtoken);
    sessionStorage.setItem("access_token", token);
    const decoded = jwt_decode(token);
    const dict = {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      user_name: decoded.user_name,
      user_id: decoded.user_id,
      country_code: decoded.country_code,
      currency: decoded.currency,
      access_token: res["access_token"],
      id_token: res["id_token"],
    };
    await localStorage.setItem(localStorageSessionKey(), JSON.stringify(dict));
    await props.actionLoginInfo(dict);
    await props.AuthenticationLogin();
    setLoading(false);
    navigate("/profile", { replace: true });
  };

  useEffect(() => {
    async function getAuthCode() {
      await props.GetAuthenticated();
      await checkAlreadyLogin();
      const lData = await localStorage.getItem(localStorageSessionKey());
      if (lData && lData === null && lData.length <= 0) {
        localStorage.clear();
      }
    }

    getAuthCode();
  }, []);

  const checkAlreadyLogin = async () => {
    const lData = await localStorage.getItem(localStorageSessionKey());
    if (lData && lData !== null && lData.length > 0) {
      const dictData = JSON.parse(lData);
      sessionStorage.setItem("id_token", dictData.id_token);
      sessionStorage.setItem("access_token", dictData.access_token);
      await props.actionLoginInfo(dictData);
      await props.AuthenticationLogin();
    } else {
      await getAuthCodeFromUrl();
    }
  };

  return (
    <Box className={classes.root}>
      <Box
        component={"img"}
        src={Logo_Image}
        className={classes.logoImage}
        onClick={() => navigate("/home")}
      />
      {match ? (
        <TextField
          fullWidth
          placeholder="Search Item Here"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              navigate(`/assets`, {
                state: { data: { searchText: searchText } },
              });
            }
          }}
        />
      ) : (
        <IconButton onClick={() => handleSearchDrawer(true)}>
          <SearchIcon />
        </IconButton>
      )}

      {match ? (
        <List>
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
              >
                <Link to={element.link}>{element.label}</Link>
              </ListItem>
            );
          })}
          {props.isLogin ? (
            <Box
              component={"img"}
              src={Profile_Image}
              onClick={handleOpenProfile}
              ref={profileAnchorRef}
              className={classes.profileImage}
            />
          ) : (
            authList.map((element, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => handleLoginNavigate()}
                  sx={{
                    "& a": {
                      color: location.pathname.includes(element.link)
                        ? "black !important"
                        : "rgba(44, 56, 74, 0.68) !important",
                    },
                  }}
                >
                  {element.label}
                </ListItem>
              );
            })
          )}

          {props.isLogin && (
            <Select
              fullWidth
              value={props.filterCurrency}
              onChange={handleChangeCurrency}
            >
              <MenuItem value={"ETH"}> ETH </MenuItem>
              <MenuItem value={"USD"}> USD </MenuItem>
              <MenuItem value={"EUR"}> EUR </MenuItem>
            </Select>
          )}
        </List>
      ) : (
        <MenuIcon onClick={handleOpenDrawer} className={classes.menuIcon} />
      )}

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleCloseDrawer}
        className={classes.drawer}
      >
        <MobileHeader
          classes={classes}
          menuList={menuList}
          authList={authList}
          profileList={profileList}
          Profile_Image={Profile_Image}
          handleCloseDrawer={handleCloseDrawer}
        />
      </Drawer>

      <ProfilePopover
        open={profileOpen}
        anchorRef={profileAnchorRef}
        handleClosePopOver={handleCloseProfile}
        popoverData={profileList}
        routeType={routeType}
        setRouteType={setRouteType}
      />

      <Drawer
        anchor="top"
        open={searchDrawerOpen}
        onClose={() => handleSearchDrawer(false)}
      >
        <SearchDrawer
          open={searchDrawerOpen}
          handleClose={() => handleSearchDrawer(false)}
        />
      </Drawer>

      {loading && <Loading />}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.rLogin.isLogin,
  filterCurrency: state.filter.filterCurrency,
});

const mapDispatchToProps = {
  AuthenticationLogin,
  GetAuthenticated,
  actionLoginInfo,
  actionLogout,
  SetFilterCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
