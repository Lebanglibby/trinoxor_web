'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Container, Box, Button, IconButton, Typography, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';

export default function HeaderNew() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];
  return (
    <AppBar position="fixed" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Enhanced Logo */}
          <Link href="/" passHref>
            <Box display="flex" alignItems="center" gap={{ xs: 1, md: 2 }} sx={{ cursor: 'pointer' }}>
            <Box
              sx={{
                width: { xs: 40, md: 48 },
                height: { xs: 40, md: 48 },
                background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 25px rgba(124, 58, 237, 0.4)',
                },
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                T
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                background: 'linear-gradient(135deg, #1F2937 0%, #EC4899 50%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              TRINOXOR
            </Typography>
            </Box>
          </Link>

          {/* Enhanced Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navigationItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <Button
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(124, 58, 237, 0.08)',
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {/* Enhanced CTA Button */}
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                sx={{
                  ml: 2,
                  px: 3,
                  py: 1.2,
                  borderRadius: 2.5,
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)',
                    transform: 'translateY(-1px) scale(1.02)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                Get a Quote
              </Button>
            </Link>
          </Box>

          {/* Enhanced Mobile Menu */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'block', md: 'none' },
              color: 'text.primary',
              p: 1.5,
              borderRadius: 2,
              '&:hover': {
                background: 'rgba(124, 58, 237, 0.08)',
              },
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(124, 58, 237, 0.1)',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Link href="/" onClick={handleDrawerToggle}>
              <Box display="flex" alignItems="center" gap={1.5}>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 35%, #F59E0B 70%, #FBBF24 100%)',
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>T</Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #1F2937 0%, #EC4899 50%, #F59E0B 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                  }}
                >
                  TRINOXOR
                </Typography>
              </Box>
            </Link>
            <IconButton onClick={handleDrawerToggle} sx={{ p: 1 }}>
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2, borderColor: 'rgba(124, 58, 237, 0.1)' }} />

          {/* Navigation Items */}
          <List sx={{ p: 0 }}>
            {navigationItems.map((item) => (
              <ListItem key={item.label} sx={{ p: 0, mb: 1 }}>
                <Link href={item.href} onClick={handleDrawerToggle} style={{ width: '100%' }}>
                  <Button
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      color: 'text.primary',
                      fontWeight: 500,
                      fontSize: '1rem',
                      textTransform: 'none',
                      '&:hover': {
                        background: 'rgba(124, 58, 237, 0.08)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2, borderColor: 'rgba(124, 58, 237, 0.1)' }} />

          {/* CTA Button */}
          <Link href="/contact" onClick={handleDrawerToggle}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(124, 58, 237, 0.4)',
                },
              }}
            >
              Get a Quote
            </Button>
          </Link>
        </Box>
      </Drawer>
    </AppBar>
  );
}