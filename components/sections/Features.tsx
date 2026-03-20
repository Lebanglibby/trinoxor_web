'use client';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { Speed, Security, SupportAgent, TrendingUp, Devices, AttachMoney } from '@mui/icons-material';

export default function Features() {
  const features = [
    {
      icon: AttachMoney,
      title: 'Affordable Solutions',
      description: 'Quality technology shouldn\'t break the bank. We offer competitive pricing and flexible payment plans that work for businesses of all sizes.',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    },
    {
      icon: Speed,
      title: 'Fast Delivery',
      description: 'We understand time is money. Our efficient process ensures your project is delivered on schedule without compromising quality.',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    },
    {
      icon: Security,
      title: 'Secure & Reliable',
      description: 'Your data and your customers\' information are safe with us. We build systems with security and reliability at the core.',
      color: '#1E3A8A',
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    },
    {
      icon: SupportAgent,
      title: 'Dedicated Support',
      description: 'We\'re here when you need us. Get quick responses and expert help whenever you have questions or need assistance.',
      color: '#8B5CF6',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    },
    {
      icon: Devices,
      title: 'Mobile-Friendly',
      description: 'Your customers use phones, tablets, and computers. We ensure your solution works perfectly on every device.',
      color: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Start small and grow big. Our solutions are built to scale with your business, so you never outgrow your technology.',
      color: '#EF4444',
      gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 50%, #F8FAFC 100%)',
        position: 'relative',
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
                  color: '#1E3A8A',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '2px',
                  mb: 2,
                  display: 'block',
                }}
              >
                WHY CHOOSE US
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
                Built for{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Your Success
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
                We focus on what matters most to your business—delivering value, saving time, and helping you grow.
              </Typography>
            </Box>
          </Box>

          {/* Features Grid */}
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      height: '100%',
                      p: 4,
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '2px solid',
                      borderColor: `${feature.color}15`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: feature.gradient,
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s ease',
                      },
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${feature.color}20`,
                        borderColor: `${feature.color}30`,
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&:hover::before': {
                        transform: 'scaleX(1)',
                      },
                    }}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: '18px',
                        background: feature.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: `0 10px 25px ${feature.color}30`,
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(-5deg)',
                          boxShadow: `0 15px 35px ${feature.color}40`,
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 36, color: 'white' }} />
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        mb: 1.5,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#6B7280',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        fontWeight: 400,
                      }}
                    >
                      {feature.description}
                    </Typography>
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
