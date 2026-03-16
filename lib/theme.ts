'use client';
import { createTheme } from '@mui/material/styles';

// Light theme (day mode)
const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#7C3AED',
      light: '#A855F7',
      dark: '#5B21B6',
    },

    secondary: {
      main: '#EC4899',
      light: '#F472B6',
      dark: '#BE185D',
    },

    success: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },

    info: {
      main: '#06B6D4',
      light: '#22D3EE',
      dark: '#0891B2',
    },

    warning: {
      main: '#F59E0B',
      light: '#FBBF24',
      dark: '#D97706',
    },

    background: {
      default: '#FAFBFC',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
    },

    divider: 'rgba(0,0,0,0.08)',
  },

  typography: {
    fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2rem',
      },
    },

    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.5rem',
      },
    },

    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.25rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
    },

    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2rem',
      },
    },

    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.375rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },

    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 22px',
        },

        containedPrimary: {
          background:
            'linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%)',
          color: '#fff',
          boxShadow: '0 8px 24px rgba(124,58,237,0.35)',
          '&:hover': {
            background:
              'linear-gradient(135deg, #6D28D9 0%, #DB2777 35%, #D97706 70%, #F59E0B 100%)',
            boxShadow: '0 12px 32px rgba(124,58,237,0.45)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          border: '1px solid rgba(0,0,0,0.08)',
          backdropFilter: 'blur(10px)',
          borderRadius: 14,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(0,0,0,0.08)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '72px !important',
          padding: '0 24px',
          '@media (min-width:600px)': {
            padding: '0 32px',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          fontWeight: 600,
          fontSize: '0.875rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
});

export default lightTheme;