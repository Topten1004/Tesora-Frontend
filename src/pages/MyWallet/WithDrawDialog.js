import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { useStyles } from "./StyleDiv/DepositStyleDiv";
import { useTheme } from "@mui/material/styles";
import { BASE_URL } from "static/constants";
import axios from "axios";
import { authorization } from "utils/helper";
import swal from "sweetalert";

function WithdrawDialog(props) {
  const { open, handleClose, walletInfo, hideAfterSuccess } = props;

  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [txtWithdrawAmt, setTxtWithdrawAmt] = useState("");
  const [txtAddress, setTxtAddress] = useState("");
  const [isAmtView, setIsAmtView] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [txtSendGasAmt, setTxtSendGasAmt] = useState("0");

  const renderAmountView = () => {
    if (isAmtView) {
      return (
        <Box sx={{ width: "100%" }}>
          <p>Wallet Balance: {walletInfo.balance} Goerli ETH</p>
          <TextField
            sx={{ marginBottom: "10px" }}
            placeholder="Public Address(0x) Or ENS"
            fullWidth
            value={txtAddress}
            onChange={(e) => setTxtAddress(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "20px" }}
            placeholder="Amount"
            fullWidth
            value={txtWithdrawAmt}
            onChange={(e) => setTxtWithdrawAmt(e.target.value)}
          />
          {isLoading && <CircularProgress />}
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Button
                onClick={handleClose}
                variant="outlined"
                className={classes.btn}
                data={"Cancel"}
                sx={{ marginRight: "10px" }}
              />

              <Button
                onClick={() => {
                  if (txtAddress.length > 0 && txtWithdrawAmt.length > 0) {
                    if (
                      parseFloat(txtWithdrawAmt) <=
                      parseFloat(walletInfo.balance)
                    ) {
                      apiCallForGetSendCoinGas();
                    } else {
                      swal({
                        title: "WARNING",
                        text: "insufficient balance",
                        icon: "warning",
                        timer: 2000,
                        button: false,
                      });
                    }
                  }
                }}
                variant="outlined"
                className={classes.btn}
                data={"Next"}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }
  };

  const apiCallForGetSendCoinGas = async () => {
    try {
      setIsLoading(true);
      const header = authorization();

      let res = await axios.post(
        `${BASE_URL}/api/v1/MyWallet/SendCoinsGas`,
        {
          toAddress: txtAddress,
          amountEth: txtWithdrawAmt,
          gasWei: 0,
        },
        header
      );
      setIsLoading(false);
      if (res.status === 200) {
        // console.log(res.data);
        setTxtSendGasAmt(res.data);
        setIsAmtView(false);
      }
    } catch (err) {
      setIsLoading(false);
      //   console.log(err);
      swal({
        title: "WARNING",
        text: err.response.data,
        icon: "warning",
        timer: 2000,
        button: false,
      });
    }
  };

  const renderConfirmPopup = () => {
    if (!isAmtView) {
      return (
        <Box sx={{ minWidth: "400px" }}>
          <p>To Address:{txtAddress}</p>
          <p>Amount:{txtWithdrawAmt}</p>
          <p>Estimated Gas Fee: {txtSendGasAmt}</p>
          <p>Total: {parseFloat(txtWithdrawAmt) + parseFloat(txtSendGasAmt)}</p>
          {isLoading && <CircularProgress />}
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Button
                onClick={() => setIsAmtView(true)}
                variant="outlined"
                className={classes.btn}
                data={"Back"}
                sx={{ marginRight: "10px" }}
              />

              <Button
                onClick={() => btnConfirmClicked()}
                variant="outlined"
                className={classes.btn}
                data={"Confirm"}
              />
            </Grid>
          </Grid>
        </Box>
      );
    }
  };

  const btnConfirmClicked = async () => {
    // eslint-disable-next-line no-self-compare
    if (parseFloat(txtWithdrawAmt.balance) <= parseFloat(walletInfo.balance)) {
      try {
        setIsLoading(true);
        const header = authorization();

        let res = await axios.post(
          `${BASE_URL}/api/v1/MyWallet/SendCoins`,
          {
            toAddress: txtAddress,
            amountEth: txtWithdrawAmt,
            gasWei: 0,
          },
          header
        );
        setIsLoading(false);
        if (res.status === 200) {
          // console.log(res.data);
          setTxtSendGasAmt("");
          setTxtAddress("");
          setTxtWithdrawAmt("");
          setIsAmtView(true);
          hideAfterSuccess();
          swal({
            title: "SUCCESS",
            text: "Amount Withdraw successfully!",
            icon: "success",
            timer: 2000,
            button: false,
          });
        }
      } catch (err) {
        setIsLoading(false);
        //   console.log(err);
        swal({
          title: "WARNING",
          text: err.response.data,
          icon: "warning",
          timer: 2000,
          button: false,
        });
      }
    } else {
      swal({
        title: "WARNING",
        text: "insufficient balance",
        icon: "warning",
        timer: 2000,
        button: false,
      });
    }
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.root}
    >
      <DialogTitle
        sx={{ fontSize: "20px", fontWeight: "bold", textFillColor: "#29235C" }}
      >
        Withdraw
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {renderAmountView()}
        {renderConfirmPopup()}
      </DialogContent>
    </Dialog>
  );
}

export default WithdrawDialog;
