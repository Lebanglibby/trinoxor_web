'use client';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { CheckCircle, TrendingUp, Headset, Rocket } from '@mui/icons-material';

export default function Process() {
  const steps = [
    {
      icon: CheckCircle,
      number: '01',
      title: 'Understand Your Needs',
      description: 'We start by listening to your business goals, challenges, and vision. Every project begins with understanding what success means for you.',
      color: '#1E3A8A',
    },
    {
      icon: Rocket,
      number: '02',
      title: 'Design & Develop',
      description: 'Our team creates tailored solutions that fit your budget and timeline. We keep you involved at every stage to ensure we\'re building exactly what you need.',
      color: '#F59E0B',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Launch & Grow',
      description: 'We deploy your solution and ensure everything works perfectly. Your success is our priority, and we help you get results from day one.',
      color: '#10B981',
    },
    {
      icon: Headset,
      number: '04',
      title: 'Ongoing Support',
      description: 'We don\'t disappear after launch. Our team provides continuous support, updates, and improvements to help your business thrive.',
      color: '#8B5CF6',
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent 0%, rgba(30, 58, 138, 0.15) 50%, transparent 100%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          bottom: 0,
          background: 'radial-gradient(ellipse at 50% 20%, rgba(30, 58, 138, 0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
                HOW WE WORK
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
                Simple Process,{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Powerful Results
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
                We believe in transparency and collaboration. Here's how we turn your ideas into reality.
              </Typography>
            </Box>
          </Box>

          {/* Process Steps */}
          <Grid container spacing={{ xs: 4, md: 5 }}>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      p: 3,
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      border: `2px solid ${step.color}15`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 20px 40px ${step.color}20`,
                        borderColor: `${step.color}40`,
                        background: 'rgba(255, 255, 255, 1)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        zIndex: -1,
                      },
                      '&:hover::before': {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Step Number */}
                    <Typography
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontSize: '3rem',
                        fontWeight: 900,
                        color: `${step.color}15`,
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </Typography>

                    {/* Icon */}
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${step.color}20, ${step.color}40)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: `0 8px 20px ${step.color}25`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(8deg) scale(1.1)',
                        },
                      }}
                    >
                      <IconComponent sx={{ fontSize: 32, color: step.color }} />
                    </Box>

                    {/* Content */}
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#1F2937',
                        fontWeight: 700,
                        fontSize: '1.15rem',
                        mb: 1.5,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#6B7280',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        fontWeight: 400,
                      }}
                    >
                      {step.description}
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
