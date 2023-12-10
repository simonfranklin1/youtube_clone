import { Box, CircularProgress, Stack} from '@mui/material'

const Loading = () => {
    return (
        <Box minHeight="95vh">
            <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
                <CircularProgress sx={{ color: "#fff"}} />
            </Stack>
        </Box>
    )
}

export default Loading;