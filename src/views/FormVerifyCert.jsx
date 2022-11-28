import { Box, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Card, Fab, Grid, Icon, lighten, styled, useTheme } from '@mui/material';
import { useState, useEffect } from "react";
import { db } from '../utils/utils/firebase-config'
import { collection, getDocs, query, updateDoc, doc, where, onSnapshot } from "firebase/firestore";
import SearchIcon from '@mui/icons-material/Search';
export default function FormVerifyCert() {
    const [open, setOpen] = React.useState(false);
    const [certificates, setCertificates] = useState([]);
    const [transactionETH, setTransactionETH] = useState("");

    const ContentBox = styled('div')(() => ({
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    }));
    const FabIcon = styled(Fab)(() => ({
        width: '44px !important',
        height: '44px !important',
        boxShadow: 'none !important',
    }));

    const canBeSubmitted = () => {
        return transactionETH.length > 0;
    };

    const isEnable = canBeSubmitted();

    const getTransaction = () => {
        const URL = 'https://goerli.etherscan.io/tx/' + transactionETH;
        window.open(URL, '_blank');
    }

    return (
        <Box style={{ marginTop: "1em"}}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Input transaction hash"
                type="text"
                // fullWidth
                //width 50%
                sx={{ width: '80%' }}
                onChange={(e) => setTransactionETH(e.target.value)}
            />
            <Box width="100%" overflow="auto" style={{ marginTop: "1em"}}>
                <Button disabled={!isEnable} variant="outlined" color="primary" onClick={getTransaction}>
                    Find Transaction <SearchIcon></SearchIcon>
                </Button>
            </Box>

        </Box>
    );
}
