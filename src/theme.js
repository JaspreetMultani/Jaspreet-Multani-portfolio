import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: `'Roboto Mono', monospace`,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 600,
        },
        h5: {
            fontWeight: 500,
        },
        body1: {
            fontWeight: 400,
        },
    },
});

export default theme;
