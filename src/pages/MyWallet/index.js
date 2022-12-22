import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { ReceiveCoins } from "redux/actions/getData";

import DepositDialog from "./DepositDialog";
import Loading from "components/Common/Loading";

import RestartAltIcon from "@mui/icons-material/RestartAlt";

import { Box, Button, Grid, Skeleton } from "@mui/material";

import { makeStyles } from "@mui/styles";
import WithdrawDialog from "./WithDrawDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "0px 50px",
    marginTop: "200px",

    "@media (max-width:900px)": {
      padding: "0px 20px",
    },
  },
  balance: {
    display: "flex",
    alignItems: "center",
    fontSize: "26px",
    fontWeight: "bold",

    "@media (max-width:900px)": {
      fontSize: "20px",
    },
  },
  btn: {
    width: "100% !important",
  },
  walletInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "80px",
  },
  balanceValue: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: 400,

    "@media (max-width:900px)": {
      fontSize: "14px",
    },
  },
  resetBtn: {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(134.69deg, #29235C 4.17%, #1D71B8 98.23%)",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    fontSize: "24px",
    fontWeight: 800,
    cursor: "pointer",

    "& .MuiSvgIcon-root": {
      width: "25px",
      height: "25px",
      marginLeft: "10px",
    },
  },
}));

const MyWallet = (props) => {
  const { walletInfo, ReceiveCoins } = props;

  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(null);
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openWithDraw, setOpenWithDraw] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  const handleWalletRefresh = async () => {
    setBalance(null);
    await ReceiveCoins();
  };

  const handleDeposit = (type) => {
    setOpenDeposit(type);
  };

  const handleWithDraw = (type) => {
    setOpenWithDraw(type);
  };

  async function getWalletInfo() {
    await ReceiveCoins();
    setLoading(false);
  }

  useEffect(() => {
    getWalletInfo();
  }, []);

  useEffect(() => {
    if (walletInfo) {
      setBalance(walletInfo.balance);
      setWalletAddress(walletInfo.address);
    }
  }, [walletInfo]);

  return (
    <Box className={classes.root}>
      <Box className={classes.walletInfo}>
        <Box className={classes.balance}>
          Balance:&nbsp;&nbsp;
          <Box component={"span"} className={classes.balanceValue}>
            {!loading ? (
              balance
            ) : (
              <Skeleton variant="rectangular" width={"300px"} />
            )}{" "}
            &nbsp;Goerli ETH
          </Box>
        </Box>
        <Box className={classes.balance}>
          Wallet Address:&nbsp;&nbsp;
          <Box component={"span"} className={classes.balanceValue}>
            {!loading ? (
              walletAddress
            ) : (
              <Skeleton variant="rectangular" width={"300px"} />
            )}{" "}
            &nbsp;
          </Box>
        </Box>

        <Box className={classes.resetBtn} onClick={() => handleWalletRefresh()}>
          Refresh
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#29235C" offset="4.17%" />
              <stop stopColor="#1D71B8" offset="98.23%" />
            </linearGradient>
          </svg>
          <RestartAltIcon style={{ stroke: "url(#blue-gradient)" }} />
        </Box>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={() => handleDeposit(true)}
            className={classes.btn}
          >
            Deposit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={() => handleWithDraw(true)}
            variant="outlined"
            className={classes.btn}
            data={"WithDraw"}
          />
        </Grid>
      </Grid>

      <DepositDialog
        open={openDeposit}
        handleClose={() => handleDeposit(false)}
        walletInfo={walletInfo}
      />
      <WithdrawDialog
        open={openWithDraw}
        handleClose={() => handleWithDraw(false)}
        walletInfo={walletInfo && walletInfo !== null ? walletInfo : {}}
        hideAfterSuccess={() => {
          handleWithDraw(false);
          getWalletInfo();
        }}
      />
      {loading && <Loading />}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  walletInfo: state.myWallet.walletInfo,
});

const mapDispatchToProps = {
  ReceiveCoins,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyWallet);
