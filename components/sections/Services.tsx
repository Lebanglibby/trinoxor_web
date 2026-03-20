'use client';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { Web, Cloud, PhoneAndroid, Support } from '@mui/icons-material';

const services = [
  {
    icon: Web,
    title: 'Web Design & Development',
    description: 'Professional websites that attract customers and grow your business. We create fast, secure, and mobile-friendly sites that represent your brand perfectly.',
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
  },
  {
    icon: Cloud,
    title: 'Web Hosting & Domains',
    description: 'Keep your business online 24/7 with reliable hosting. We handle all technical details so you can focus on running your business.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
  },
  {
    icon: PhoneAndroid,
    title: 'Mobile Applications',
    description: 'Connect with customers on their phones. Custom mobile apps that make it easy for clients to do business with you anytime, anywhere.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  },
  {
    icon: Support,
    title: 'IT Support & Maintenance',
    description: 'Expert technical support when you need it. We keep your systems running smoothly so you can focus on what you do best.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  },
];

export default function Services() {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 30%, rgba(30, 58, 138, 0.04) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(245, 158, 11, 0.04) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Section Header */}
          <Box textAlign="center" width="100%">
            <Box maxWidth="800px" mx="auto">
            <Typography
              variant="overline"
              sx={{
                color: '#F59E0B',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              OUR SERVICES
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                color: '#1F2937',
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              How We Help Your{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Business Grow
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#6B7280',
                fontWeight: 400,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
              }}
            >
              Complete technology solutions designed to help your business succeed in the digital world.
            </Typography>
            </Box>
          </Box>

          {/* Services Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      height: '100%',
                      p: { xs: 4, md: 5 },
                      borderRadius: '28px',
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.92) 100%)',
                      border: '1px solid',
                      borderColor: `${service.color}08`,
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      boxShadow: `0 8px 32px ${service.color}06`,
                      backdropFilter: 'blur(10px)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '6px',
                        background: service.gradient,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -200,
                        right: -200,
                        width: 400,
                        height: 400,
                        background: `radial-gradient(circle, ${service.color}08 0%, transparent 70%)`,
                        opacity: 0,
                        transition: 'all 0.6s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-16px) scale(1.02)',
                        boxShadow: `0 32px 64px ${service.color}18, 0 0 0 1px ${service.color}15`,
                        borderColor: `${service.color}25`,
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:hover::before': {
                        transform: 'scaleX(1)',
                      },
                      '&:hover::after': {
                        opacity: 1,
                        top: -100,
                        right: -100,
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 88,
                        height: 88,
                        borderRadius: '24px',
                        background: service.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,
                        boxShadow: `0 16px 40px ${service.color}30, inset 0 2px 8px rgba(255, 255, 255, 0.3)`,
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative',
                        zIndex: 1,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          inset: -3,
                          borderRadius: '26px',
                          background: service.gradient,
                          opacity: 0,
                          filter: 'blur(12px)',
                          transition: 'opacity 0.6s ease',
                        },
                        '&:hover': {
                          transform: 'scale(1.12) rotate(-6deg)',
                          boxShadow: `0 20px 50px ${service.color}45, inset 0 2px 8px rgba(255, 255, 255, 0.4)`,
                        },
                        '&:hover::before': {
                          opacity: 0.7,
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 44, color: 'white', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} />
                    </Box>

                    {/* Content */}
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                          color: '#1F2937',
                          fontWeight: 800,
                          fontSize: { xs: '1.4rem', md: '1.55rem' },
                          mb: 2.5,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.3,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#6B7280',
                          fontSize: { xs: '1.02rem', md: '1.08rem' },
                          lineHeight: 1.85,
                          fontWeight: 400,
                          mb: 3.5,
                        }}
                      >
                        {service.description}
                      </Typography>
                      
                      {/* Decorative Arrow */}
                      <Box
                        sx={{
                          mt: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          color: service.color,
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          opacity: 0,
                          transform: 'translateX(-10px)',
                          transition: 'all 0.4s ease',
                          '.MuiBox-root:hover &': {
                            opacity: 1,
                            transform: 'translateX(0)',
                          },
                        }}
                      >
                        Learn more
                        <Box
                          component="span"
                          sx={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            '.MuiBox-root:hover &': {
                              transform: 'translateX(5px)',
                            },
                          }}
                        >
                          →
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
