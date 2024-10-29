import { Box, CircularProgress, Typography } from "@mui/material";

export const Loading = ({ value }) => {

    return <>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={value} sx={{ color: '#8d0529' }}/>
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    </>
};