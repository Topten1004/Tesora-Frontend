import * as React from 'react';
import { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { PRIVATE_TESORA_IMAGE_API } from 'static/constants';
import { useStyles } from './StyleDiv/DepositStyleDiv';

import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    OutlinedInput,
    Stack,
    Tooltip,
    useMediaQuery
} from '@mui/material'

import { useTheme } from '@mui/material/styles';

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
)

const DepositDialog = (props) => {

    const {
        open,
        handleClose,
        walletInfo
    } = props;

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [successCopy, setSuccessCopy] = useState('Copy');

    const handleCopyToClipboard = (address) => {
        navigator.clipboard.writeText(address);
        setSuccessCopy('Copied')
    }

    useEffect(() => {
        if (successCopy === 'Copied') {
            async function makeRequest() {
                await delay(1000)
                setSuccessCopy('Copy')
            }

            makeRequest();
        }
    }, [successCopy])

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
        >
            <DialogTitle>
                Deposit
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box component={'img'} src={`${PRIVATE_TESORA_IMAGE_API}${walletInfo?.qrCode}`} />

                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={2}>
                    <Box className={classes.title}> Wallet Address </Box>
                    <OutlinedInput
                        fullWidth
                        disabled
                        value={walletInfo?.address}
                        endAdornment={
                            <InputAdornment position="end">
                                <Tooltip title={successCopy} placement="top" arrow
                                    PopperProps={{ sx: { "& .MuiTooltip-tooltip": { fontSize: '16px' } } }}
                                >
                                    <IconButton onClick={() => handleCopyToClipboard(walletInfo?.address)}>
                                        <ContentCopyIcon />
                                    </IconButton>

                                </Tooltip>
                            </InputAdornment>
                        }
                    />
                </Stack>
            </DialogContent>
            {/* <DialogActions>
                <Button variant='contained' autoFocus onClick={handleClose} >
                    Cancel
                </Button>
                <Button variant='contained' onClick={handleSubmit} autoFocus>
                    Confirm
                </Button>
            </DialogActions> */}
        </Dialog>
    );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DepositDialog);