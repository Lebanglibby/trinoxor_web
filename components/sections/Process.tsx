'use client';
import { Box, Container, Typography, Grid, Card, Stack, Avatar, Stepper, Step, StepLabel, StepContent, useTheme } from '@mui/material';
import { 
  Search, 
  DesignServices, 
  Code, 
  BugReport, 
  Rocket, 
  Support,
  CheckCircle
} from '@mui/icons-material';

const processSteps = [
  {
    icon: <Search />,
    title: 'Discovery & Strategy',
    description: 'We understand your business goals and create a strategic roadmap for success',
    details: ['Business analysis', 'Goal alignment', 'Success metrics', 'Project roadmap'],
    color: '#8B5CF6',
    duration: '1-2 weeks',
  },
  {
    icon: <DesignServices />,
    title: 'Design & Planning',
    description: 'User-focused design that enhances your brand and improves customer experience',
    details: ['Brand integration', 'User experience design', 'Visual mockups', 'Customer feedback'],
    color: '#10B981',
    duration: '2-3 weeks',
  },
  {
    icon: <Code />,
    title: 'Development & Build',
    description: 'Expert development using proven methodologies and best practices',
    details: ['Agile development', 'Quality assurance', 'Progress updates', 'Milestone reviews'],
    color: '#F59E0B',
    duration: '4-8 weeks',
  },
  {
    icon: <BugReport />,
    title: 'Testing & Optimization',
    description: 'Comprehensive testing to ensure reliability, security, and performance',
    details: ['Quality testing', 'Performance optimization', 'Security validation', 'User acceptance'],
    color: '#EF4444',
    duration: '1-2 weeks',
  },
  {
    icon: <Rocket />,
    title: 'Launch & Go-Live',
    description: 'Smooth deployment with full support to ensure successful launch',
    details: ['Production deployment', 'Launch monitoring', 'Performance tracking', 'Launch support'],
    color: '#06B6D4',
    duration: '1 week',
  },
  {
    icon: <Support />,
    title: 'Support & Growth',
    description: 'Ongoing partnership to help your business grow and evolve',
    details: ['Continuous monitoring', 'Regular updates', 'Feature enhancements', 'Business support'],
    color: '#8B5CF6',
    duration: 'Ongoing',
  },
];

export default function Process() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={10}>
          <Typography variant="h2" color="primary">
            Our Partnership Process
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="700px" mx="auto">
            A proven approach that ensures your success from concept to launch and beyond
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {processSteps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${step.color}60`,
                    boxShadow: `0 20px 40px ${step.color}20`,
                    '& .step-number': {
                      background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}CC 100%)`,
                      transform: 'scale(1.1)',
                    },
                    '& .step-bg': {
                      opacity: 1,
                    },
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${step.color} 0%, ${step.color}80 100%)`,
                  },
                }}
              >
                <Box
                  className="step-bg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: 150,
                    height: 150,
                    background: `radial-gradient(circle, ${step.color}20 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                <Stack spacing={3} sx={{ position: 'relative', zIndex: 1 }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Box display="flex" alignItems="center" gap={2}>
                      <Avatar
                        className="step-number"
                        sx={{
                          width: 48,
                          height: 48,
                          background: `${step.color}20`,
                          color: step.color,
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {index + 1}
                      </Avatar>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          background: `${step.color}15`,
                          color: step.color,
                        }}
                      >
                        {step.icon}
                      </Box>
                    </Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: step.color,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {step.duration}
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
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>

                  <Stack spacing={1}>
                    {step.details.map((detail, detailIndex) => (
                      <Box key={detailIndex} display="flex" alignItems="center" gap={1}>
                        <CheckCircle sx={{ fontSize: 16, color: step.color }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}