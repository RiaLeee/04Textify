import Alert from '@mui/material/Alert';
import React from 'react';

export const CustomAlert = ({ severity, onClose, children }) => {
    
    const isSuccess = severity === "success";
    
    return <>
        <Alert
            severity={isSuccess? "success": "warning"}
            color={isSuccess? "error": "warning"}
            variant="filled"
            onClose={onClose}
        >
            {children}
        </Alert>
    </>
};
