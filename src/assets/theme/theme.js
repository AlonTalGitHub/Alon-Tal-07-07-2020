import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import HaasRg from '../fonts/haas/NeueHaasDisplay-Roman.woff';

const haas = {
  fontFamily: 'NeueHaasDisplay',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
  local('NeueHaasDisplay'),
    local('NeueHaasDisplay-Roman'),
    url(${HaasRg}) format('woff')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

let theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 960,
      xl: 1920,
    }
  },
  palette: {
    // type: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: green[500],
    },
  },
  spacing: 8,
  typography: {
    fontFamily: ['NeueHaasDisplay',
      // 'Roboto',
      // 'sans-serif'
    ].join(','),
    h1: {
      fontSize: "60px",
      fontWeight: "400",
      lineHeight: "75px",
    },
    h2: {
      fontSize: "50px",
      fontWeight: "400",
    },
    h3: {
      fontSize: "17px",
      fontWeight: "400",
      lineHeight: "20px",
    },
    h4: {
      fontSize: "13px",
    },
    subtitle1: {
      fontSize: "40px",
      fontWeight: "400",
      lineHeight: "50px",
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [haas],
      },
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  paddingLeft: "50px",
  [theme.breakpoints.down('lg')]: {
    paddingLeft: "50px",
    paddingRight: "20px",
  },
  '@media (max-width:735px)': {
    fontSize: "8.9vw",
    paddingLeft: "10px",
    lineHeight: "10vw",
    padding: "0px",
  },
  '@media (max-width:500px)': {
    fontSize: "11.6vw",
    lineHeight: "13.5vw",
    padding: "0px",
  },
};


export default theme;