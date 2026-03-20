'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AppBar, Toolbar, Container, Box, Button, IconButton, Typography, Drawer, List, ListItem, Divider, Fade, useScrollTrigger } from '@mui/material';
import { Menu, Close, KeyboardArrowDown } from '@mui/icons-material';

export default function HeaderNew() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

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
    <AppBar 
      position="fixed" 
      elevation={trigger ? 4 : 0}
      sx={{
        background: trigger 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: trigger ? '1px solid rgba(30, 58, 138, 0.15)' : '1px solid rgba(0,0,0,0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: trigger ? '0 4px 20px rgba(30, 58, 138, 0.08)' : '0 2px 12px rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            py: { xs: 0.5, md: 0.8 },
            minHeight: { xs: '60px', md: '68px' },
            transition: 'all 0.3s ease',
          }}
        >
          {/* Enhanced Logo with Animation */}
          <Link href="/" passHref>
            <Box 
              display="flex" 
              alignItems="center" 
              gap={{ xs: 0.5, md: 1 }} 
              sx={{ 
                cursor: 'pointer',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #1E3A8A, #F59E0B)',
                  borderRadius: '2px',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
            <Box
              sx={{
                width: { xs: 50, md: 60 },
                height: { xs: 50, md: 60 },
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.3s ease',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 2,
                  padding: '2px',
                  background: 'linear-gradient(135deg, #1E3A8A, #F59E0B)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  transform: 'scale(1.05)',
                },
                '&:hover::before': {
                  opacity: 1,
                },
              }}
            >
              <img 
                src="https://www.cashplugloans.co.bw/trinoxor/trinoxor_logo.png" 
                alt="Trinoxor Logo" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain' 
                }} 
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                fontWeight: 800,
                letterSpacing: '0.5px',
                fontFamily: '"Inter", "Roboto", sans-serif',
                textTransform: 'uppercase',
                position: 'relative',
              }}
            >
              Trinoxor
            </Typography>
            </Box>
          </Link>

          {/* Enhanced Navigation with Hover Effects */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.label} href={item.href} passHref>
                  <Button
                    sx={{
                      color: isActive ? '#1E3A8A' : '#475569',
                      fontWeight: isActive ? 700 : 600,
                      fontSize: '0.95rem',
                      px: 2.5,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      position: 'relative',
                      background: isActive ? 'rgba(30, 58, 138, 0.08)' : 'transparent',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: isActive ? '70%' : 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, #1E3A8A, #3B82F6)',
                        borderRadius: '2px',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover': {
                        color: '#1E3A8A',
                        background: 'rgba(30, 58, 138, 0.05)',
                      },
                      '&:hover::after': {
                        width: '70%',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </Box>

          {/* Enhanced Mobile Menu Button */}
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#1E3A8A',
              p: 1.2,
              borderRadius: 2,
              background: 'rgba(30, 58, 138, 0.05)',
              border: '1px solid rgba(30, 58, 138, 0.15)',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(30, 58, 138, 0.1)',
                borderColor: 'rgba(30, 58, 138, 0.3)',
              },
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Enhanced Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
            backdropFilter: 'blur(20px)',
            borderLeft: '2px solid',
            borderImage: 'linear-gradient(180deg, #1E3A8A, #F59E0B) 1',
            boxShadow: '-10px 0 40px rgba(30, 58, 138, 0.12)',
          },
        }}
      >
        <Box sx={{ p: 2.5 }}>
          {/* Enhanced Drawer Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5}>
            <Link href="/" onClick={handleDrawerToggle}>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.15)',
                  }}
                >
                  <img 
                    src="https://www.cashplugloans.co.bw/trinoxor/trinoxor_logo.png" 
                    alt="Trinoxor Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain' 
                    }} 
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #F59E0B 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    fontFamily: '"Inter", "Roboto", sans-serif',
                    textTransform: 'uppercase',
                  }}
                >
                  Trinoxor
                </Typography>
              </Box>
            </Link>
            <IconButton 
              onClick={handleDrawerToggle} 
              sx={{ 
                p: 1,
                background: 'rgba(30, 58, 138, 0.08)',
                '&:hover': {
                  background: 'rgba(30, 58, 138, 0.15)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <Close />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2.5, borderColor: 'rgba(30, 58, 138, 0.15)', borderWidth: 1 }} />

          {/* Enhanced Navigation Items */}
          <List sx={{ p: 0 }}>
            {navigationItems.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Fade in={mobileOpen} timeout={300 + index * 100} key={item.label}>
                  <ListItem sx={{ p: 0, mb: 1.2 }}>
                    <Link href={item.href} onClick={handleDrawerToggle} style={{ width: '100%' }}>
                      <Button
                        fullWidth
                        sx={{
                          justifyContent: 'flex-start',
                          py: 1.5,
                          px: 2.5,
                          borderRadius: 2,
                          color: isActive ? '#1E3A8A' : '#475569',
                          fontWeight: isActive ? 700 : 600,
                          fontSize: '1rem',
                          textTransform: 'none',
                          position: 'relative',
                          background: isActive ? 'rgba(30, 58, 138, 0.1)' : 'rgba(30, 58, 138, 0.03)',
                          border: `1px solid ${isActive ? 'rgba(30, 58, 138, 0.2)' : 'rgba(30, 58, 138, 0.08)'}`,
                          transition: 'all 0.3s ease',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            height: '100%',
                            width: '3px',
                            background: 'linear-gradient(180deg, #1E3A8A, #F59E0B)',
                            transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                            transition: 'transform 0.3s ease',
                          },
                          '&:hover': {
                            background: 'rgba(30, 58, 138, 0.08)',
                            color: '#1E3A8A',
                            borderColor: 'rgba(30, 58, 138, 0.2)',
                            transform: 'translateX(6px)',
                          },
                          '&:hover::before': {
                            transform: 'scaleY(1)',
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  </ListItem>
                </Fade>
              );
            })}
          </List>

          <Divider sx={{ my: 2.5, borderColor: 'rgba(30, 58, 138, 0.15)', borderWidth: 1 }} />
        </Box>
      </Drawer>
    </AppBar>
  );
}