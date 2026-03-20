'use client';
import { Box, Container, Typography, Grid, Stack, IconButton, Link } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const services = ['Web Design & Development', 'Web Hosting', 'Mobile App Development', 'IT Support & Services'];
const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Sitemap', href: '/sitemap-page' },
];

const socials = [
  { icon: <Facebook />, color: '#1877F2', href: 'https://web.facebook.com/profile.php?id=61585999035434' },
  { icon: <Instagram />, color: '#E4405F', href: 'https://www.instagram.com/trinoxor/' },
  { icon: <WhatsApp />, color: '#25D366', href: 'https://wa.me/26778080590' },
  { icon: <LinkedIn />, color: '#0A66C2', href: 'https://www.linkedin.com/company/trinoxor-integrated-technologies' },
];

const contacts = [
  { icon: <Email fontSize="small" />, text: 'trinoxorbw@gmail.com', href: 'mailto:trinoxorbw@gmail.com' },
  { icon: <Phone fontSize="small" />, text: '(+267) 78080590', href: 'tel:+26778080590' },
  { icon: <LocationOn fontSize="small" />, text: 'Serving Businesses Worldwide' },
];

export default function Footer() {
  return (
    <Box 
      sx={{ 
        bgcolor: '#0F172A', 
        color: '#CBD5E1', 
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.5) 50%, transparent 100%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '20%',
          width: '60%',
          height: '200px',
          background: 'radial-gradient(ellipse at top, rgba(30, 58, 138, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }}>

          {/* Brand */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: 95,
                height: 95,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
                border: '2px solid rgba(139, 92, 246, 0.3)',
                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
                overflow: 'hidden',
                p: 1.5,
              }}
            >
              <Box
                component="img"
                src="https://www.cashplugloans.co.bw/trinoxor/trinoxor_logo.png"
                alt="Trinoxor Logo"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{
                mb: 2.5,
                fontWeight: 900,
                letterSpacing: 2,
                fontSize: '1.5rem',
                background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 40%, #FBBF24 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 8px rgba(168, 85, 247, 0.5))',
              }}
            >
              TRINOXOR
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#94A3B8', 
                lineHeight: 1.9, 
                mb: 4,
                fontSize: '0.95rem',
              }}
            >
              Your trusted technology partner dedicated to transforming businesses through innovative digital solutions.
            </Typography>
            <Stack direction="row" spacing={1.5}>
              {socials.map((s, i) => (
                <IconButton
                  key={i}
                  href={s.href}
                  size="small"
                  sx={{
                    bgcolor: `${s.color}15`,
                    color: s.color,
                    width: 42,
                    height: 42,
                    border: `1px solid ${s.color}30`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: s.color,
                      color: '#fff',
                      transform: 'translateY(-4px)',
                      boxShadow: `0 8px 20px ${s.color}40`,
                      borderColor: s.color,
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={6} md={2.5}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#F1F5F9', 
                fontWeight: 800, 
                mb: 3, 
                letterSpacing: 0.5,
                fontSize: '1.05rem',
              }}
            >
              Services
            </Typography>
            <Stack spacing={1.8}>
              {services.map((s) => (
                <Link 
                  key={s} 
                  href="/services" 
                  underline="none"
                  sx={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#F59E0B',
                      transform: 'translateX(4px)',
                    },
                    '&::before': {
                      content: '"→"',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  {s}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#F1F5F9', 
                fontWeight: 800, 
                mb: 3, 
                letterSpacing: 0.5,
                fontSize: '1.05rem',
              }}
            >
              Company
            </Typography>
            <Stack spacing={1.8}>
              {quickLinks.map((l) => (
                <Link 
                  key={l.label} 
                  href={l.href} 
                  underline="none"
                  sx={{ 
                    color: '#94A3B8', 
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      color: '#F59E0B',
                      transform: 'translateX(4px)',
                    },
                    '&::before': {
                      content: '"→"',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3.5}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: '#F1F5F9', 
                fontWeight: 800, 
                mb: 3, 
                letterSpacing: 0.5,
                fontSize: '1.05rem',
              }}
            >
              Get In Touch
            </Typography>
            <Stack spacing={2.5}>
              {contacts.map((c, i) => (
                <Box 
                  key={i} 
                  sx={{
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <Box 
                    sx={{ 
                      color: '#F59E0B', 
                      flexShrink: 0,
                      width: 36,
                      height: 36,
                      borderRadius: '10px',
                      bgcolor: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {c.icon}
                  </Box>
                  {c.href ? (
                    <Link 
                      href={c.href} 
                      underline="none"
                      sx={{ 
                        color: '#94A3B8', 
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease',
                        '&:hover': { color: '#F59E0B' },
                      }}
                    >
                      {c.text}
                    </Link>
                  ) : (
                    <Typography variant="body2" sx={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                      {c.text}
                    </Typography>
                  )}
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        </Box>

        {/* Bottom Bar */}
        <Box 
          sx={{ 
            py: 4, 
            borderTop: '1px solid #1E293B',
            background: 'linear-gradient(90deg, transparent 0%, rgba(30, 58, 138, 0.05) 50%, transparent 100%)',
          }}
        >
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            justifyContent="space-between" 
            alignItems="center" 
            spacing={2}
          >
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#64748B',
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} Trinoxor. All rights reserved.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 1.5,
                borderRadius: '12px',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #FBBF24 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  fontSize: '0.85rem',
                }}
              >
                Secure · Scalable · Seamless
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
