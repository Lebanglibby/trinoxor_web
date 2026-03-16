'use client';
import { Box, Container, Typography, Button, Stack, Grid, Chip } from '@mui/material';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

export default function HeroNew() {
  const services = [
    { name: 'Website Design', color: '#10B981', icon: '🎨' },
    { name: 'Mobile Applications', color: '#8B5CF6', icon: '📱' },
    { name: 'IT Support & Hosting', color: '#F59E0B', icon: '⚡' }
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
            <Stack spacing={{ xs: 4, md: 6, lg: 8 }} alignItems={{ xs: 'center', lg: 'flex-start' }}>
              {/* Enhanced Badge */}
              <Box>
                <Chip
                  label={
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          bgcolor: '#10B981',
                          borderRadius: '50%',
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      />
                      Trinoxor • Digital Solutions
                    </Box>
                  }
                  sx={{
                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                    color: '#1F2937',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                    backdropFilter: 'blur(10px)',
                    px: 2,
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                />
              </Box>

              {/* Enhanced Headline */}
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

              {/* Enhanced Services */}
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" justifyContent={{ xs: 'center', lg: 'flex-start' }} sx={{ gap: { xs: 1, sm: 2 } }}>
                {services.map((service, index) => (
                  <Chip
                    key={service.name}
                    icon={<span style={{ fontSize: '1.5rem' }}>{service.icon}</span>}
                    label={service.name}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      color: '#1F2937',
                      border: '1px solid rgba(0, 0, 0, 0.1)',
                      px: { xs: 1.5, sm: 2 },
                      py: { xs: 0.5, sm: 1 },
                      fontSize: '1rem',
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.9)',
                        transform: 'scale(1.05)',
                        borderColor: service.color,
                      },
                    }}
                  />
                ))}
              </Stack>

              {/* Enhanced Description */}
              <Typography
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

              {/* Enhanced CTA Buttons */}
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

          {/* Enhanced Right Visual */}
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
              {/* Enhanced Floating Icons */}
              {[
                { icon: '☁️', color: '#10B981', top: 80, left: 40, delay: 0, size: 70 },
                { icon: '🌐', color: '#8B5CF6', top: 60, right: 50, delay: 1, size: 80 },
                { icon: '📱', color: '#F59E0B', bottom: 140, left: 30, delay: 2, size: 75 },
                { icon: '📊', color: '#06B6D4', bottom: 80, right: 70, delay: 3, size: 65 },
                { icon: '⚡', color: '#EF4444', top: 200, left: 10, delay: 1.5, size: 60 },
                { icon: '🔧', color: '#8B5CF6', bottom: 200, right: 20, delay: 2.5, size: 55 },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: 'absolute',
                    ...item,
                    width: item.size,
                    height: item.size,
                    background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 8px 25px ${item.color}30`,
                    border: `2px solid ${item.color}50`,
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    animation: `float ${6 + index}s ease-in-out infinite`,
                    animationDelay: `${item.delay}s`,
                    '&:hover': {
                      transform: 'scale(1.15) rotate(5deg)',
                      boxShadow: `0 15px 35px ${item.color}50`,
                    },
                    transition: 'all 0.4s ease',
                  }}
                >
                  <Typography sx={{ fontSize: '1.8rem' }}>{item.icon}</Typography>
                </Box>
              ))}

              {/* Enhanced Main Dashboard */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 10,
                  animation: 'float 8s ease-in-out infinite',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.05) rotate(-1deg)',
                  },
                  transition: 'transform 0.5s ease',
                }}
              >
                <Box
                  sx={{
                    width: 380,
                    height: 260,
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                    borderRadius: 4,
                    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                    border: '2px solid rgba(139, 92, 246, 0.1)',
                    overflow: 'hidden',
                    backdropFilter: 'blur(20px)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #8B5CF6 0%, #F59E0B 100%)',
                    },
                  }}
                >
                  {/* Enhanced Dashboard Header */}
                  <Box
                    sx={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                      height: 55,
                      display: 'flex',
                      alignItems: 'center',
                      px: 3,
                      borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Box sx={{ width: 12, height: 12, bgcolor: '#EF4444', borderRadius: '50%', boxShadow: 1 }} />
                      <Box sx={{ width: 12, height: 12, bgcolor: '#F59E0B', borderRadius: '50%', boxShadow: 1 }} />
                      <Box sx={{ width: 12, height: 12, bgcolor: '#10B981', borderRadius: '50%', boxShadow: 1 }} />
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        ml: 3,
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                      }}
                    >
                      Trinoxor Dashboard
                    </Typography>
                    <Box sx={{ ml: 'auto' }}>
                      <Chip
                        label="Live"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(16, 185, 129, 0.2)',
                          color: '#10B981',
                          fontWeight: 700,
                          fontSize: '0.7rem',
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Enhanced Dashboard Content */}
                  <Box sx={{ p: 3 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                      <Typography variant="h6" sx={{ color: '#1F2937', fontWeight: 700, fontSize: '1rem' }}>
                        Performance Metrics
                      </Typography>
                      <Chip
                        label="↗ +24%"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(16, 185, 129, 0.15)',
                          color: '#10B981',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    <Stack spacing={2}>
                      {[
                        { label: 'Website Performance', width: 85, color: '#8B5CF6', value: '92%' },
                        { label: 'Mobile Optimization', width: 70, color: '#F59E0B', value: '88%' },
                        { label: 'Security Score', width: 95, color: '#10B981', value: '98%' },
                        { label: 'User Experience', width: 80, color: '#06B6D4', value: '94%' },
                      ].map((item, index) => (
                        <Box key={index}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={0.5}>
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 600, fontSize: '0.8rem' }}>
                              {item.label}
                            </Typography>
                            <Typography variant="body2" sx={{ color: item.color, fontWeight: 700, fontSize: '0.8rem' }}>
                              {item.value}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              width: '100%',
                              height: 6,
                              bgcolor: 'rgba(0, 0, 0, 0.05)',
                              borderRadius: 1,
                              overflow: 'hidden',
                            }}
                          >
                            <Box
                              sx={{
                                width: `${item.width}%`,
                                height: '100%',
                                background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}CC 100%)`,
                                borderRadius: 1,
                                animation: `progress-${index} 2s ease-out`,
                                [`@keyframes progress-${index}`]: {
                                  '0%': { width: '0%' },
                                  '100%': { width: `${item.width}%` },
                                },
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Box>

              {/* Enhanced Mobile App Mockup */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 10,
                  width: 120,
                  height: 220,
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                  borderRadius: 6,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  border: '2px solid rgba(245, 158, 11, 0.2)',
                  overflow: 'hidden',
                  animation: 'float 5s ease-in-out infinite',
                  animationDelay: '1s',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.1) rotate(-3deg)',
                    boxShadow: '0 35px 70px rgba(245, 158, 11, 0.3)',
                  },
                  transition: 'all 0.5s ease',
                }}
              >
                {/* Enhanced Mobile Header */}
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)',
                    height: 45,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                    }}
                  >
                    Mobile App
                  </Typography>
                </Box>

                {/* Enhanced Mobile Content */}
                <Box sx={{ p: 2 }}>
                  <Stack spacing={1.5} mb={2}>
                    {[
                      { width: '100%', color: '#F59E0B', label: 'Dashboard' },
                      { width: '80%', color: '#8B5CF6', label: 'Analytics' },
                      { width: '90%', color: '#10B981', label: 'Reports' },
                    ].map((item, index) => (
                      <Box key={index}>
                        <Typography variant="caption" sx={{ color: '#6B7280', fontSize: '0.7rem', mb: 0.5 }}>
                          {item.label}
                        </Typography>
                        <Box
                          sx={{
                            width: item.width,
                            height: 6,
                            background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}CC 100%)`,
                            borderRadius: 1,
                            animation: `mobile-progress-${index} 2s ease-out`,
                            [`@keyframes mobile-progress-${index}`]: {
                              '0%': { width: '0%' },
                              '100%': { width: item.width },
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>

                  <Stack spacing={0.8}>
                    {[90, 60, 75, 45].map((width, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: `${width}%`,
                          height: 4,
                          bgcolor: '#E5E7EB',
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>

              {/* Enhanced Glow Effects */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 70%)',
                  borderRadius: 4,
                  filter: 'blur(60px)',
                  zIndex: -1,
                  animation: 'glow-pulse 6s ease-in-out infinite',
                  '@keyframes glow-pulse': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 0.8 },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}