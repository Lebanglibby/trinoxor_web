'use client';
import { Box, Container, Grid, Typography, Stack, Card } from '@mui/material';
import { TrendingUp, People, Security, Speed, Code, CloudDone } from '@mui/icons-material';

const stats = [
  { 
    icon: <TrendingUp />, 
    value: '500+', 
    label: 'Projects Delivered', 
    color: '#10B981',
    description: 'Successfully completed projects across various industries'
  },
  { 
    icon: <People />, 
    value: '50K+', 
    label: 'Happy Clients', 
    color: '#8B5CF6',
    description: 'Satisfied customers worldwide trusting our solutions'
  },
  { 
    icon: <Security />, 
    value: '99.9%', 
    label: 'Security Score', 
    color: '#F59E0B',
    description: 'Enterprise-grade security with zero data breaches'
  },
  { 
    icon: <Speed />, 
    value: '<100ms', 
    label: 'Response Time', 
    color: '#EF4444',
    description: 'Lightning-fast performance with global CDN'
  },
  { 
    icon: <Code />, 
    value: '1M+', 
    label: 'Lines of Code', 
    color: '#06B6D4',
    description: 'Clean, maintainable code following best practices'
  },
  { 
    icon: <CloudDone />, 
    value: '24/7', 
    label: 'Support Available', 
    color: '#1E3A8A',
    description: 'Round-the-clock technical support and monitoring'
  },
];

export default function Stats() {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 }, 
        background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(135deg, #F8FAFC 0%, #8B5CF6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 2, md: 3 },
              fontWeight: 800,
            }}
          >
            By the Numbers
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, px: { xs: 2, sm: 0 } }}>
            Proven track record of delivering exceptional results
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(30, 41, 59, 0.4)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(148, 163, 184, 0.1)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${stat.color}40`,
                    boxShadow: `0 20px 40px ${stat.color}20`,
                    '& .stat-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}CC 100%)`,
                    },
                    '& .stat-bg': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${stat.color} 0%, transparent 100%)`,
                  },
                }}
              >
                <Box
                  className="stat-bg"
                  sx={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 80,
                    height: 80,
                    background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                <Stack alignItems="center" spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                  <Box
                    className="stat-icon"
                    sx={{
                      p: 2.5,
                      borderRadius: '50%',
                      background: `${stat.color}20`,
                      color: stat.color,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        color: '#F8FAFC', 
                        fontWeight: 800,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{
                        color: stat.color,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {stat.label}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{
                        lineHeight: 1.6,
                        fontSize: '0.9rem',
                      }}
                    >
                      {stat.description}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}