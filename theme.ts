import { extendTheme } from '@mui/material/styles'
import '@mui/material/TextField'

declare module '@mui/material/styles' {
  // No custom tokens found, you can skip the theme augmentation.
}

const theme = extendTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: '1rem',
          paddingRight: '1rem',
        },
        contained: {
          borderRadius: '100px',
          lineHeight: 2,

          '.MuiButton-endIcon': {
            marginRight: 0,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiInputBase-sizeLarge': {
            fontSize: '1.25rem',
          },
          '.MuiOutlinedInput-notchedOutline': {
            fontSize: '1rem',
          },
          '.MuiInputLabel-sizeLarge': {
            fontSize: '1.25rem',
          },
          '.MuiInputLabel-sizeLarge[data-shrink]': {
            fontSize: '1rem',
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '.MuiTableCell-head': {
            fontSize: '1rem',
          },
          '.MuiTableRow-head': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '.MuiCardActions-root': {
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          },
          '.MuiCardActions-root .MuiButton-contained': {
            borderRadius: '.25rem',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          '.MuiButton-contained': {
            borderRadius: '.25rem',
          },
        },
        root: ({ theme }) => ({
          '.MuiDialogActions-root': {
            [theme.breakpoints.down('sm')]: { flexDirection: 'column' },
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }),
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#8148de',
          light: '#7179b3',
          dark: '#412b7d',
        },
        secondary: {
          main: '#f50057',
        },
        success: {
          main: '#1b9e21',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#a04ac9',
          light: '#7179b3',
          dark: '#2b337d',
        },
        secondary: {
          main: '#f50057',
        },
        success: {
          main: '#1b9e21',
        },
        background: {
          default: '#1e1e1e',
          paper: '#272427',
        },
        text: {
          primary: '#e0e0e0',
        },
      },
    },
  },
})

export default theme
