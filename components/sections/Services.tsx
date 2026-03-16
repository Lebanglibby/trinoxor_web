'use client';
import { Box, Container, Typography, Grid, Card, CardContent, IconButton, useTheme } from '@mui/material';
import { Web, Cloud, PhoneAndroid, Support, ArrowForward } from '@mui/icons-material';

const services = [
  {
    icon: <Web sx={{ fontSize: 48 }} />,
    title: 'Digital Solutions',
    description: 'Transform your business with modern websites that drive results, increase conversions, and deliver exceptional user experiences.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
  },
  {
    icon: <Cloud sx={{ fontSize: 48 }} />,
    title: 'Business Hosting',
    description: 'Reliable, secure hosting that keeps your business online 24/7 with enterprise-grade performance and support.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: 48 }} />,
    title: 'Mobile Solutions',
    description: 'Reach your customers anywhere with powerful mobile apps that enhance engagement and drive business growth.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    icon: <Support sx={{ fontSize: 48 }} />,
    title: 'Business Support',
    description: 'Focus on your business while we handle your technology needs with proactive support and expert guidance.',
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
  },
];

export default function Services() {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: 12, 
        background: 'linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(139, 92, 246, 0.08) 102px
            )
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={10}>
          <Typography variant="h2" color="primary">
            How We Help Your Business Grow
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="700px" mx="auto" sx={{ lineHeight: 1.7 }}>
            Comprehensive solutions designed to accelerate your success and maximize your competitive advantage
          </Typography>
        </Box>
        
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border'], {
                    duration: theme.transitions.duration.standard,
                    easing: theme.transitions.easing.easeInOut,
                  }),
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-16px) scale(1.02)',
                    border: `1px solid ${service.color}60`,
                    boxShadow: `0 25px 50px ${service.color}20`,
                    '& .service-icon': {
                      background: service.gradient,
                      color: 'white',
                      transform: 'scale(1.1) rotate(-5deg)',
                    },
                    '& .arrow-icon': {
                      opacity: 1,
                      transform: 'translateX(0) rotate(45deg)',
                    },
                    '& .service-bg': {
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
                    background: service.gradient,
                  },
                }}
              >
                <Box
                  className="service-bg"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: { xs: '150px', md: '200px' },
                    height: { xs: '150px', md: '200px' },
                    background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                />
                <CardContent sx={{ p: 5, position: 'relative', zIndex: 1 }}>
                  <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={3}>
                    <Box
                      className="service-icon"
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        background: 'rgba(0, 0, 0, 0.05)',
                        color: '#6B7280',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <IconButton
                      className="arrow-icon"
                      size="small"
                      sx={{
                        opacity: 0,
                        transform: 'translateX(10px)',
                        transition: 'all 0.4s ease',
                        color: service.color,
                        bgcolor: `${service.color}10`,
                        '&:hover': {
                          bgcolor: `${service.color}20`,
                        },
                      }}
                    >
                      <ArrowForward fontSize="small" />
                    </IconButton>
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3, 
                      color: '#1F2937', 
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      lineHeight: 1.8,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}}
        </Grid>
      </Container>
    </Box>
  );
}