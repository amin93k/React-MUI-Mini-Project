import { createTheme } from "@mui/material/styles";

const theme = (darkMode) => createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif',
        ],
        h1: {
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h5: {
            fontSize: '1rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
        },
    },
    palette: {
        primary: {
            main: "#107493",
            light: "#0761a1",
            dark: "#265c8b",
            contrastText: '#FFF'
        },
        mode: darkMode ? 'dark' : 'light',
        ...(darkMode && {
            primary: {
                main: '#90caf9', // Light blue
            },
            secondary: {
                main: '#a78ff4', // Light pink
            },
            background: {
                default: '#30305a', // Dark blue
                paper: '#141931', // Darker blue
            },
            text: {
                primary: '#ffffff', // White
                secondary: '#d1d1d1', // Light gray
            },
        }),
    },
});

export default theme;
