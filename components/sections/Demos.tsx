'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, useTheme } from '@mui/material';
import { Language, PhoneAndroid, Cloud, PlayArrow, ArrowForward } from '@mui/icons-material';

const demos = [
  {
    icon: <Language sx={{ fontSize: 40 }} />,
    title: 'Website Portfolio',
    description: 'Browse our collection of live website prototypes. See real examples of business websites, e-commerce sites, and landing pages we have built for clients.',
    action: 'View Websites',
    color: '#1E3A8A',
    tag: 'Web Design',
    features: ['Live Examples', 'Multiple Designs', 'Responsive Sites'],
    demoType: 'portfolio',
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: 40 }} />,
    title: 'Mobile App Prototype',
    description: 'Experience a working mobile app prototype. Navigate screens, test features, and see how your business app would function on smartphones.',
    action: 'Launch Demo',
    color: '#F59E0B',
    tag: 'Mobile Apps',
    features: ['Touch Navigation', 'Live Interactions', 'Real Features'],
    demoType: 'prototype',
  },
  {
    icon: <Cloud sx={{ fontSize: 40 }} />,
    title: 'Hosting Control Panel',
    description: 'Explore our hosting dashboard. Check website stats, manage domains, view uptime reports, and experience how easy it is to control your hosting.',
    action: 'Open Dashboard',
    color: '#10B981',
    tag: 'Hosting',
    features: ['Live Stats', 'Domain Manager', 'Backup Tools'],
    demoType: 'dashboard',
  },
];

export default function Demos() {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(30, 58, 138, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
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
            LIVE DEMOS
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
            See Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #1E3A8A 0%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Solutions in Action
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6B7280',
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Try our interactive demos and experience how our solutions work before you commit
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {demos.map((demo, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid',
                  borderColor: `${demo.color}10`,
                  borderRadius: '28px',
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: 600,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  cursor: 'pointer',
                  boxShadow: `0 8px 32px ${demo.color}08`,
                  '&:hover': {
                    transform: 'translateY(-16px) scale(1.02)',
                    border: `1px solid ${demo.color}30`,
                    boxShadow: `0 32px 64px ${demo.color}20, 0 0 0 1px ${demo.color}15`,
                    '& .demo-icon': {
                      background: `${demo.color}20`,
                      transform: 'scale(1.1)',
                      boxShadow: `0 12px 32px ${demo.color}30`,
                    },
                    '& .demo-button': {
                      background: `linear-gradient(135deg, ${demo.color} 0%, #F59E0B 100%)`,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 30px ${demo.color}35`,
                    },
                    '& .demo-glow': {
                      opacity: 1,
                    },
                    '& .demo-feature': {
                      transform: 'translateX(4px)',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: `linear-gradient(90deg, ${demo.color} 0%, #F59E0B 100%)`,
                  },
                }}
              >
                <Box
                  className="demo-glow"
                  sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    background: `radial-gradient(circle, ${demo.color}15 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.6s ease',
                  }}
                />
                <CardContent sx={{ p: { xs: 4, md: 5 }, position: 'relative', zIndex: 1 }}>
                  <Stack spacing={3.5}>
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                      <Box
                        className="demo-icon"
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: '20px',
                          background: `${demo.color}15`,
                          color: demo.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: `0 8px 24px ${demo.color}20`,
                        }}
                      >
                        {demo.icon}
                      </Box>
                      <Chip
                        label={demo.tag}
                        size="small"
                        sx={{
                          bgcolor: `${demo.color}15`,
                          color: demo.color,
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          border: `1px solid ${demo.color}25`,
                          height: 28,
                          px: 1.5,
                        }}
                      />
                    </Box>
                    
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2, color: '#1F2937', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.01em' }}>
                        {demo.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1rem', mb: 3 }}>
                        {demo.description}
                      </Typography>
                      
                      {/* Features List */}
                      <Stack spacing={1.5} mb={3}>
                        {demo.features.map((feature, idx) => (
                          <Box
                            key={idx}
                            className="demo-feature"
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              transition: 'transform 0.3s ease',
                            }}
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: demo.color,
                                boxShadow: `0 0 8px ${demo.color}50`,
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#4B5563',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                    
                    <Button
                      variant="contained"
                      endIcon={<ArrowForward />}
                      className="demo-button"
                      fullWidth
                      sx={{
                        py: 2.5,
                        borderRadius: '16px',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        background: `${demo.color}`,
                        textTransform: 'none',
                        transition: theme.transitions.create(['transform', 'background', 'box-shadow'], {
                          duration: 400,
                        }),
                        boxShadow: `0 8px 24px ${demo.color}30`,
                        '&:hover': {
                          background: `linear-gradient(135deg, ${demo.color} 0%, #F59E0B 100%)`,
                        },
                      }}
                    >
                      {demo.action}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}