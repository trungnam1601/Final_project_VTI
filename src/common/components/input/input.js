import React from 'react';
import {  TextField } from '@mui/material';

function Input({ label, text, textRender, width, ml, fullWidth }) {
    return (
        <>
            <TextField
                margin="normal"
                fullWidth={fullWidth}
                required
                label={label}
                sx={{ width: width, ml: ml }}
                autoFocus
            />
        </>
    );
}

export default Input;
