'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, useTheme } from '@mui/material';
import { Dashboard, Login, Calculate, PlayArrow, Star, Verified } from '@mui/icons-material';

const demos = [
  {
    icon: <Login sx={{ fontSize: 40 }} />,
    title: 'Secure Business Portal',
    description: 'Experience enterprise-grade security with seamless user authentication, role management, and data protection.',
    action: 'Try Demo',
    color: '#8B5CF6',
    tag: 'Security',
    rating: '4.9',
    users: '10K+',
  },
  {
    icon: <Dashboard sx={{ fontSize: 40 }} />,
    title: 'Business Intelligence Hub',
    description: 'Transform your data into actionable insights with real-time analytics, custom reports, and performance tracking.',
    action: 'View Dashboard',
    color: '#10B981',
    tag: 'Analytics',
    rating: '4.8',
    users: '25K+',
  },
  {
    icon: <Calculate sx={{ fontSize: 40 }} />,
    title: 'ROI Calculator Suite',
    description: 'Make informed business decisions with powerful calculators for ROI analysis, cost projections, and financial planning.',
    action: 'Calculate ROI',
    color: '#F59E0B',
    tag: 'Finance',
    rating: '4.9',
    users: '15K+',
  },
];

export default function Demos() {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: 16, 
        background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={12}>
          <Chip
            label="Live Demos Available"
            sx={{
              mb: 3,
              bgcolor: 'rgba(139, 92, 246, 0.15)',
              color: '#8B5CF6',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" color="primary">
            See Our Solutions in Action
          </Typography>
          <Typography variant="h5" color="text.secondary" maxWidth="800px" mx="auto" sx={{ lineHeight: 1.8 }}>
            Experience firsthand how our solutions can transform your business operations and drive growth
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
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.98) 100%)',
                  backdropFilter: 'blur(40px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 4,
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: theme.transitions.duration.complex,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-20px) scale(1.03)',
                    border: `1px solid ${demo.color}80`,
                    boxShadow: `0 40px 80px ${demo.color}30, 0 0 0 1px ${demo.color}20`,
                    '& .demo-icon': {
                      background: `linear-gradient(135deg, ${demo.color} 0%, #F59E0B 100%)`,
                      color: 'white',
                      transform: 'scale(1.2) rotate(10deg)',
                    },
                    '& .demo-button': {
                      background: `linear-gradient(135deg, ${demo.color} 0%, #F59E0B 100%)`,
                      transform: 'translateY(-2px)',
                    },
                    '& .demo-glow': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${demo.color} 0%, #F59E0B 100%)`,
                  },
                }}
              >
                <Box
                  className="demo-glow"
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 200,
                    height: 200,
                    background: `radial-gradient(circle, ${demo.color}25 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
                <CardContent sx={{ p: 6, position: 'relative', zIndex: 1 }}>
                  <Stack spacing={4}>
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                      <Box
                        className="demo-icon"
                        sx={{
                          p: 3,
                          borderRadius: 3,
                          background: 'rgba(148, 163, 184, 0.1)',
                          color: '#94A3B8',
                          transition: 'all 0.5s ease',
                        }}
                      >
                        {demo.icon}
                      </Box>
                      <Stack alignItems="flex-end" spacing={1}>
                        <Chip
                          label={demo.tag}
                          size="small"
                          sx={{
                            bgcolor: `${demo.color}20`,
                            color: demo.color,
                            fontWeight: 600,
                            border: `1px solid ${demo.color}30`,
                          }}
                        />
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                          <Star sx={{ fontSize: 16, color: '#F59E0B' }} />
                          <Typography variant="caption" sx={{ color: '#F59E0B', fontWeight: 600 }}>
                            {demo.rating}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                    
                    <Box>
                      <Typography variant="h4" sx={{ mb: 2, color: '#1F2937', fontWeight: 700 }}>
                        {demo.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                        {demo.description}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1} mb={4}>
                        <Verified sx={{ fontSize: 16, color: '#10B981' }} />
                        <Typography variant="caption" sx={{ color: '#10B981', fontWeight: 600 }}>
                          Trusted by {demo.users} users
                        </Typography>
                      </Stack>
                    </Box>
                    
                    <Button
                      variant="contained"
                      startIcon={<PlayArrow />}
                      className="demo-button"
                      fullWidth
                      sx={{
                        py: 2,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        transition: theme.transitions.create(['transform', 'background'], {
                          duration: theme.transitions.duration.standard,
                        }),
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
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