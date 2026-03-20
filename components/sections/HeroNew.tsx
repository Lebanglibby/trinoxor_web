'use client';
import { Box, Container, Typography, Button, Stack, Grid, Chip } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { Monitor, Smartphone, Cloud, Server, Code, Zap, TrendingUp, Globe } from 'lucide-react';

export default function HeroNew() {
  const services = [
    { name: 'Website Design', color: '#1E3A8A', icon: Monitor },
    { name: 'Mobile Applications', color: '#F59E0B', icon: Smartphone },
    { name: 'IT Support & Hosting', color: '#10B981', icon: Server }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 50%, #F8FAFC 100%),
          radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 60%),
          radial-gradient(ellipse at 50% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)
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
            linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'pulse 4s ease-in-out infinite',
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid item xs={12} lg={7}>
            <Stack spacing={{ xs: 3, md: 4 }} alignItems={{ xs: 'center', lg: 'flex-start' }}>
              <Box textAlign={{ xs: 'center', lg: 'left' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #1F2937 0%, #374151 50%, #F59E0B 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
                    }}
                  >
                    Digital Solutions
                  </Box>
                  <br />
                  <Box component="span" sx={{ color: '#1F2937', filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}>
                    That Help Your
                  </Box>
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(135deg, #F59E0B 0%, #7C3AED 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Business Grow
                  </Box>
                </Typography>
              </Box>

              <Typography
                component="p"
                variant="h5"
                sx={{
                  color: '#6B7280',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  maxWidth: { xs: '100%', md: '600px' },
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem', lg: '1.6rem' },
                  textAlign: { xs: 'center', lg: 'left' },
                }}
              >
                We design{' '}
                <Box component="span" sx={{ color: '#7C3AED', fontWeight: 600 }}>
                  professional websites
                </Box>
                ,{' '}
                <Box component="span" sx={{ color: '#F59E0B', fontWeight: 600 }}>
                  mobile apps
                </Box>
                , and{' '}
                <Box component="span" sx={{ color: '#06B6D4', fontWeight: 600 }}>
                  reliable digital systems
                </Box>{' '}
                that help businesses attract customers and operate more efficiently.
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
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                    px: { xs: 4, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 50%, #D97706 100%)',
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 15px 40px rgba(139, 92, 246, 0.5)',
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, #C084FC 0%, #FDBA74 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box component="span" sx={{ position: 'relative', zIndex: 1 }}>
                    Start Your Project
                  </Box>
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<PlayArrow />}
                  sx={{
                    borderColor: 'rgba(0, 0, 0, 0.2)',
                    color: '#1F2937',
                    px: { xs: 4, sm: 5 },
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: 3,
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    textTransform: 'none',
                    borderWidth: '2px',
                    backdropFilter: 'blur(10px)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': {
                      borderColor: '#8B5CF6',
                      color: '#7C3AED',
                      background: 'rgba(124, 58, 237, 0.1)',
                      transform: 'translateY(-2px) scale(1.05)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Our Work
                </Button>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} lg={5} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: 400, md: 500, lg: 600 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Floating Icons */}
              {[
                { icon: Cloud, color: '#3B82F6', top: '5%', left: '5%', size: 65, delay: 0 },
                { icon: Globe, color: '#1E3A8A', top: '8%', right: '8%', size: 70, delay: 0.5 },
                { icon: Code, color: '#8B5CF6', top: '45%', left: '0%', size: 60, delay: 1 },
                { icon: Smartphone, color: '#F59E0B', bottom: '25%', left: '8%', size: 68, delay: 1.5 },
                { icon: TrendingUp, color: '#10B981', bottom: '12%', right: '10%', size: 62, delay: 2 },
                { icon: Zap, color: '#EF4444', bottom: '35%', right: '2%', size: 58, delay: 2.5 },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      top: item.top,
                      left: item.left,
                      right: item.right,
                      bottom: item.bottom,
                      width: item.size,
                      height: item.size,
                      background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}30 100%)`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 10px 30px ${item.color}25, 0 0 0 1px ${item.color}20`,
                      backdropFilter: 'blur(12px)',
                      cursor: 'pointer',
                      animation: `float ${7 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${item.delay}s`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      zIndex: 5,
                      '&:hover': {
                        transform: 'scale(1.15) rotate(8deg)',
                        boxShadow: `0 15px 40px ${item.color}40, 0 0 0 2px ${item.color}40`,
                        background: `linear-gradient(135deg, ${item.color}25 0%, ${item.color}45 100%)`,
                        zIndex: 15,
                      },
                    }}
                  >
                    <IconComponent size={item.size * 0.45} color={item.color} strokeWidth={2.5} />
                  </Box>
                );
              })}

              {/* Main Dashboard */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 10,
                  animation: 'float 9s ease-in-out infinite',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.03) translateY(-5px)',
                  },
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Box
                  sx={{
                    width: 420,
                    height: 280,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
                    borderRadius: '24px',
                    boxShadow: '0 25px 50px rgba(30, 58, 138, 0.15), 0 0 0 1px rgba(30, 58, 138, 0.08)',
                    overflow: 'hidden',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #1E3A8A 0%, #3B82F6 50%, #F59E0B 100%)',
                    },
                  }}
                >
                  {/* Dashboard Header */}
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      px: 3.5,
                      borderBottom: '1px solid rgba(30, 58, 138, 0.08)',
                    }}
                  >
                    <Stack direction="row" spacing={1.2}>
                      <Box 
                        sx={{ 
                          width: 13, 
                          height: 13, 
                          bgcolor: '#EF4444', 
                          borderRadius: '50%', 
                          boxShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
                          transition: 'all 0.3s ease',
                          '&:hover': { transform: 'scale(1.2)' }
                        }} 
                      />
                      <Box 
                        sx={{ 
                          width: 13, 
                          height: 13, 
                          bgcolor: '#F59E0B', 
                          borderRadius: '50%', 
                          boxShadow: '0 2px 8px rgba(245, 158, 11, 0.4)',
                          transition: 'all 0.3s ease',
                          '&:hover': { transform: 'scale(1.2)' }
                        }} 
                      />
                      <Box 
                        sx={{ 
                          width: 13, 
                          height: 13, 
                          bgcolor: '#10B981', 
                          borderRadius: '50%', 
                          boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)',
                          transition: 'all 0.3s ease',
                          '&:hover': { transform: 'scale(1.2)' }
                        }} 
                      />
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 3,
                        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 800,
                        fontSize: '1.15rem',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      Trinoxor Dashboard
                    </Typography>
                    <Box sx={{ ml: 'auto' }}>
                      <Chip
                        label="Live"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          fontWeight: 800,
                          fontSize: '0.75rem',
                          height: 26,
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          '& .MuiChip-label': {
                            px: 1.5,
                          },
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Dashboard Content */}
                  <Box sx={{ p: 3.5, height: 220, overflow: 'hidden', position: 'relative' }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2.5}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#1F2937', 
                          fontWeight: 800, 
                          fontSize: '1.05rem',
                          letterSpacing: '-0.01em',
                        }}
                      >
                        Our Services
                      </Typography>
                      <Chip
                        label="3 Active"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(59, 130, 246, 0.1)',
                          color: '#3B82F6',
                          fontWeight: 700,
                          fontSize: '0.7rem',
                          height: 24,
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        position: 'relative',
                        height: 160,
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          animation: 'scroll-services 12s linear infinite',
                          '@keyframes scroll-services': {
                            '0%': { transform: 'translateY(0)' },
                            '33.33%': { transform: 'translateY(0)' },
                            '40%': { transform: 'translateY(-72px)' },
                            '73.33%': { transform: 'translateY(-72px)' },
                            '80%': { transform: 'translateY(-144px)' },
                            '93.33%': { transform: 'translateY(-144px)' },
                            '100%': { transform: 'translateY(0)' },
                          },
                        }}
                      >
                        <Stack spacing={2.2}>
                          {[
                            { 
                              icon: Monitor, 
                              label: 'Web Development', 
                              color: '#1E3A8A', 
                              subtitle: 'Modern & Responsive',
                              gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'
                            },
                            { 
                              icon: Smartphone, 
                              label: 'Mobile Apps', 
                              color: '#F59E0B', 
                              subtitle: 'iOS & Android',
                              gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)'
                            },
                            { 
                              icon: Server, 
                              label: 'Cloud Hosting', 
                              color: '#10B981', 
                              subtitle: 'Reliable & Secure',
                              gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)'
                            },
                          ].map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                              <Box 
                                key={index}
                                sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 2.5,
                                  p: 1.8,
                                  borderRadius: '16px',
                                  background: `${item.color}06`,
                                  border: `1px solid ${item.color}15`,
                                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                  cursor: 'pointer',
                                  minHeight: 64,
                                  '&:hover': {
                                    background: `${item.color}12`,
                                    transform: 'translateX(6px)',
                                    boxShadow: `0 8px 20px ${item.color}20`,
                                    borderColor: `${item.color}30`,
                                  },
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: '14px',
                                    background: item.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    boxShadow: `0 4px 12px ${item.color}30`,
                                    transition: 'all 0.3s ease',
                                  }}
                                >
                                  <IconComponent size={22} color="white" strokeWidth={2.5} />
                                </Box>
                                <Box flex={1}>
                                  <Typography 
                                    variant="body2" 
                                    sx={{ 
                                      color: '#1F2937', 
                                      fontWeight: 700, 
                                      fontSize: '0.9rem',
                                      mb: 0.4,
                                      letterSpacing: '-0.01em',
                                    }}
                                  >
                                    {item.label}
                                  </Typography>
                                  <Typography 
                                    variant="caption" 
                                    sx={{ 
                                      color: '#6B7280', 
                                      fontSize: '0.72rem',
                                      fontWeight: 500,
                                    }}
                                  >
                                    {item.subtitle}
                                  </Typography>
                                </Box>
                              </Box>
                            );
                          })}
                        </Stack>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Enhanced Glow Effects */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, rgba(30, 58, 138, 0.15) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
                  borderRadius: 4,
                  filter: 'blur(80px)',
                  zIndex: -1,
                  animation: 'glow-pulse 8s ease-in-out infinite',
                  '@keyframes glow-pulse': {
                    '0%, 100%': { opacity: 0.6 },
                    '50%': { opacity: 0.9 },
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '20%',
                  right: '10%',
                  width: 200,
                  height: 200,
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(60px)',
                  zIndex: -1,
                  animation: 'glow-pulse 6s ease-in-out infinite',
                  animationDelay: '1s',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
