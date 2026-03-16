'use client';
import { Box, Container, Typography, Grid, Card, Stack, Chip, useTheme } from '@mui/material';
import { Code, Cloud, Security, Speed, Analytics, Storage } from '@mui/icons-material';

const techCategories = [
  {
    title: 'Modern Web Solutions',
    icon: <Code />,
    color: '#8B5CF6',
    technologies: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Responsive Design'],
  },
  {
    title: 'Robust Backend Systems',
    icon: <Storage />,
    color: '#F59E0B',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API Development'],
  },
  {
    title: 'Cloud Infrastructure',
    icon: <Cloud />,
    color: '#10B981',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Auto-Scaling', 'DevOps'],
  },
  {
    title: 'Enterprise Security',
    icon: <Security />,
    color: '#EF4444',
    technologies: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Compliance', 'Data Protection'],
  },
  {
    title: 'Performance Optimization',
    icon: <Speed />,
    color: '#06B6D4',
    technologies: ['CDN', 'Caching', 'Load Balancing', 'Speed Optimization', 'Monitoring'],
  },
  {
    title: 'Business Analytics',
    icon: <Analytics />,
    color: '#8B5CF6',
    technologies: ['Google Analytics', 'Custom Dashboards', 'Data Insights', 'Reporting', 'KPI Tracking'],
  },
];

export default function TechStack() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography variant="h2" color="primary" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }}>
            Proven Technology Stack
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="600px" mx="auto" sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, px: { xs: 2, sm: 0 } }}>
            Industry-leading technologies that power successful businesses worldwide
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {techCategories.map((category, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    border: `1px solid ${category.color}60`,
                    boxShadow: `0 20px 40px ${category.color}20`,
                  },
                }}
              >
                <Stack spacing={3}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        background: `${category.color}20`,
                        color: category.color,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h6" sx={{ color: '#1F2937', fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {category.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: `${category.color}15`,
                          color: category.color,
                          border: `1px solid ${category.color}30`,
                          '&:hover': {
                            bgcolor: `${category.color}25`,
                          },
                        }}
                      />
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