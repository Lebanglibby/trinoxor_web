'use client';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%),
          radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 60%)
        `,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Stack spacing={{ xs: 6, md: 8 }} alignItems={{ xs: 'center', lg: 'flex-start' }}>
              <Box textAlign={{ xs: 'center', lg: 'left' }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                    color: '#64748B',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    mb: 2,
                  }}
                >
                  Trinoxor • Digital Solutions
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.8rem', lg: '5.8rem' },
                    background: 'linear-gradient(135deg, #1E293B 0%, #334155 30%, #8B5CF6 70%, #F59E0B 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: { xs: 3, md: 4 },
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  Digital Solutions
                  <br />
                  That Help Your Business Grow
                </Typography>
              </Box>
              
              <Stack spacing={4} alignItems={{ xs: 'center', lg: 'flex-start' }}>
                <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent={{ xs: 'center', lg: 'flex-start' }}>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Box sx={{ width: 10, height: 10, bgcolor: '#10B981', borderRadius: '50%' }} />
                    <Typography variant="body1" sx={{ color: '#475569', fontWeight: 600 }}>Website Design</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Box sx={{ width: 10, height: 10, bgcolor: '#8B5CF6', borderRadius: '50%' }} />
                    <Typography variant="body1" sx={{ color: '#475569', fontWeight: 600 }}>Mobile Applications</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={1.5}>
                    <Box sx={{ width: 10, height: 10, bgcolor: '#F59E0B', borderRadius: '50%' }} />
                    <Typography variant="body1" sx={{ color: '#475569', fontWeight: 600 }}>IT Support & Hosting</Typography>
                  </Box>
                </Stack>
                <Typography
                  variant="h4"
                  sx={{
                    color: '#64748B',
                    fontWeight: 400,
                    lineHeight: 1.7,
                    maxWidth: { xs: '100%', md: '600px' },
                    fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                    textAlign: { xs: 'center', lg: 'left' },
                  }}
                >
                  We design professional websites, mobile apps, and reliable digital systems that help businesses attract customers and operate more efficiently.
                </Typography>
              </Stack>
              
              <Typography
                variant="body1"
                sx={{
                  color: '#64748B',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  textAlign: { xs: 'center', lg: 'left' },
                  fontWeight: 500,
                }}
              >
                Helping businesses grow through modern digital solutions.
              </Typography>
              
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={{ xs: 3, md: 4 }}
                alignItems="center"
                justifyContent={{ xs: 'center', lg: 'flex-start' }}
                sx={{ width: '100%' }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                    px: 5,
                    py: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 8px 25px rgba(139, 92, 246, 0.25)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7C3AED 0%, #D97706 100%)',
                      boxShadow: '0 12px 35px rgba(139, 92, 246, 0.35)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Start Your Project
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<PlayArrow />}
                  sx={{
                    borderColor: '#8B5CF6',
                    color: '#8B5CF6',
                    px: 5,
                    py: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderWidth: '2px',
                    '&:hover': {
                      borderColor: '#7C3AED',
                      color: '#7C3AED',
                      background: 'rgba(139, 92, 246, 0.05)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Work
                </Button>
              </Stack>
            </Stack>
          </Grid>
          
          <Grid item xs={12} lg={5} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                height: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Main logo container */}
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  backdropFilter: 'blur(30px)',
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
                  position: 'relative',
                  zIndex: 3,
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 800,
                  }}
                >
                  T
                </Box>
              </Box>
              
              {/* Floating tech elements */}
              {[
                { size: 60, color: '#8B5CF6', top: '15%', right: '10%', delay: '0s', icon: '🌐' },
                { size: 40, color: '#F59E0B', top: '25%', left: '5%', delay: '1s', icon: '📱' },
                { size: 50, color: '#10B981', bottom: '20%', right: '15%', delay: '2s', icon: '☁️' },
                { size: 35, color: '#EF4444', bottom: '30%', left: '10%', delay: '1.5s', icon: '🔧' },
                { size: 45, color: '#1E3A8A', top: '45%', right: '5%', delay: '0.5s', icon: '💻' },
              ].map((elem, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    width: elem.size,
                    height: elem.size,
                    background: `linear-gradient(135deg, ${elem.color}20 0%, ${elem.color}10 100%)`,
                    borderRadius: '50%',
                    border: `1px solid ${elem.color}40`,
                    ...elem,
                    animation: `orbit-${i} ${8 + i * 2}s ease-in-out infinite`,
                    animationDelay: elem.delay,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    [`@keyframes orbit-${i}`]: {
                      '0%, 100%': { transform: 'translateY(0px) scale(1)' },
                      '50%': { transform: `translateY(-${15 + i * 3}px) scale(1.1)` },
                    },
                  }}
                >
                  {elem.icon}
                </Box>
              ))}
              
              {/* Orbital rings */}
              {[300, 400, 500].map((size, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'absolute',
                    width: size,
                    height: size,
                    border: '1px solid rgba(139, 92, 246, 0.1)',
                    borderRadius: '50%',
                    animation: `rotate-${i} ${30 + i * 10}s linear infinite`,
                    [`@keyframes rotate-${i}`]: {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  }}
                />
              ))}
              
              {/* Background glow */}
              <Box
                sx={{
                  position: 'absolute',
                  width: 400,
                  height: 400,
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}