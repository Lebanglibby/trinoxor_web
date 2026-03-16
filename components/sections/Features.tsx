'use client';
import { Box, Container, Typography, Grid, Card, Stack, Avatar, useTheme } from '@mui/material';
import { 
  AutoFixHigh, 
  CloudSync, 
  Shield, 
  Speed, 
  Analytics, 
  Api,
  Memory,
  Devices
} from '@mui/icons-material';

const features = [
  {
    icon: <AutoFixHigh />,
    title: 'Smart Automation',
    description: 'Streamline your operations with intelligent automation that reduces costs and improves efficiency.',
    color: '#8B5CF6',
    stats: 'Save 40% Time',
  },
  {
    icon: <CloudSync />,
    title: 'Scalable Infrastructure',
    description: 'Grow without limits with cloud solutions that adapt to your business needs and scale automatically.',
    color: '#10B981',
    stats: '99.9% Uptime',
  },
  {
    icon: <Shield />,
    title: 'Enterprise Security',
    description: 'Protect your business with bank-level security that keeps your data and customers safe.',
    color: '#EF4444',
    stats: 'Zero Breaches',
  },
  {
    icon: <Speed />,
    title: 'Lightning Performance',
    description: 'Deliver exceptional user experiences with optimized performance that keeps customers engaged.',
    color: '#F59E0B',
    stats: 'Sub-second Load',
  },
  {
    icon: <Analytics />,
    title: 'Business Intelligence',
    description: 'Make data-driven decisions with real-time insights and comprehensive analytics dashboards.',
    color: '#06B6D4',
    stats: 'Live Insights',
  },
  {
    icon: <Api />,
    title: 'Seamless Integration',
    description: 'Connect all your business tools and systems for a unified, efficient workflow.',
    color: '#8B5CF6',
    stats: '100+ Connectors',
  },
  {
    icon: <Memory />,
    title: 'Global Reach',
    description: 'Serve customers worldwide with distributed infrastructure that delivers consistent performance.',
    color: '#10B981',
    stats: 'Worldwide CDN',
  },
  {
    icon: <Devices />,
    title: 'Multi-Platform',
    description: 'Reach customers on every device with responsive solutions that work perfectly everywhere.',
    color: '#F59E0B',
    stats: 'All Devices',
  },
];

export default function Features() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 50%, #F8FAFC 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
          <Typography variant="h2" color="primary" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }}>
            Why Businesses Choose Us
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="700px" mx="auto" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, px: { xs: 2, sm: 0 } }}>
            Powerful capabilities that drive real business results and competitive advantage
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  p: { xs: 2, md: 3 },
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    border: `1px solid ${feature.color}60`,
                    boxShadow: `0 25px 50px ${feature.color}25`,
                    '& .feature-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: `linear-gradient(135deg, ${feature.color} 0%, ${feature.color}CC 100%)`,
                    },
                    '& .feature-bg': {
                      opacity: 1,
                      transform: 'scale(1.2)',
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${feature.color} 0%, transparent 100%)`,
                  },
                }}
              >
                <Box
                  className="feature-bg"
                  sx={{
                    position: 'absolute',
                    top: -50,
                    right: -50,
                    width: 100,
                    height: 100,
                    background: `radial-gradient(circle, ${feature.color}20 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'all 0.4s ease',
                  }}
                />
                <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Avatar
                      className="feature-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        background: `${feature.color}20`,
                        color: feature.color,
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography
                      variant="caption"
                      sx={{
                        color: feature.color,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {feature.stats}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#1F2937',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
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