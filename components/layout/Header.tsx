'use client';
import { AppBar, Toolbar, Container, Box, Button, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Image from 'next/image';

export default function Header() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        border: 'none',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Image
              src="/images/logos/logo.png"
              alt="Trinoxor Logo"
              width={40}
              height={40}
              style={{ borderRadius: '8px' }}
            />
            <Box
              sx={{
                background: 'linear-gradient(135deg, #F8FAFC 0%, #8B5CF6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              TRINOXOR
            </Box>
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {['Services', 'Our Work', 'About', 'Contact'].map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#CBD5E1',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    color: '#8B5CF6',
                    bgcolor: 'rgba(139, 92, 246, 0.1)',
                  },
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                px: 3,
                py: 1,
                borderRadius: 3,
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7C3AED 0%, #D97706 100%)',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 25px rgba(139, 92, 246, 0.4)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Get a Quote
            </Button>
          </Box>
          
          <IconButton sx={{ display: { xs: 'block', md: 'none' }, color: '#8B5CF6' }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}