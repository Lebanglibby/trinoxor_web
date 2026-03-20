'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { Business, Security, Speed, Support, EmojiEvents, Group, TrendingUp, Lightbulb } from '@mui/icons-material';

const values = [
  {
    icon: <Business sx={{ fontSize: 60 }} />,
    title: 'Professional Excellence',
    description: 'We deliver consistent quality and dependable solutions that exceed client expectations every time.',
    color: '#1E3A8A',
  },
  {
    icon: <Group sx={{ fontSize: 60 }} />,
    title: 'Botho',
    description: 'Embracing respect, compassion, and community - we build lasting relationships through integrity and care.',
    color: '#10B981',
  },
  {
    icon: <Security sx={{ fontSize: 60 }} />,
    title: 'Trust & Security',
    description: 'Your data and business operations are protected with enterprise-grade security measures.',
    color: '#EF4444',
  },
  {
    icon: <Speed sx={{ fontSize: 60 }} />,
    title: 'Modern Technology',
    description: 'We use the latest frameworks and best practices to build fast, scalable solutions.',
    color: '#F59E0B',
  },
];

const achievements = [
  { number: '50+', label: 'Projects Completed', icon: <EmojiEvents sx={{ fontSize: 40 }} /> },
  { number: '40+', label: 'Happy Clients', icon: <Group sx={{ fontSize: 40 }} /> },
  { number: '5+', label: 'Years Experience', icon: <TrendingUp sx={{ fontSize: 40 }} /> },
  { number: '100%', label: 'Client Satisfaction', icon: <Business sx={{ fontSize: 40 }} /> },
];

const expertise = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites that drive business growth and engage customers.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    color: '#1E3A8A',
  },
  {
    title: 'Mobile Development',
    description: 'Creating powerful mobile apps for Android that connect businesses with their customers.',
    technologies: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
    color: '#10B981',
  },
  {
    title: 'Cloud & Hosting',
    description: 'Reliable hosting solutions with 99.9% uptime, automatic backups, and 24/7 monitoring.',
    technologies: ['AWS', 'CloudFlare', 'Docker', 'Linux'],
    color: '#F59E0B',
  },
  {
    title: 'IT Support',
    description: 'Comprehensive technical support to keep your business systems running smoothly.',
    technologies: ['Network Setup', 'Security', 'Maintenance', 'Consulting'],
    color: '#EF4444',
  },
];

export default function About() {
  return (
    <>
      <HeaderNew />
      
      <Box
        sx={{
          minHeight: { xs: '40vh', md: '60vh' },
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
          display: 'flex',
          alignItems: 'center',
          pt: { xs: 10, md: 12 },
          pb: { xs: 4, md: 0 },
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(30, 58, 138, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 58, 138, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{
                color: '#F59E0B',
                fontWeight: 700,
                fontSize: { xs: '0.75rem', md: '0.9rem' },
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              ABOUT US
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                mb: 3,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#1F2937',
              }}
            >
              About{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #F59E0B 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Trinoxor
              </Box>
            </Typography>
            <Typography
              component="p"
              variant="h6"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.2rem' },
                color: '#6B7280',
                fontWeight: 400,
                lineHeight: 1.8,
                maxWidth: '700px',
                mx: 'auto',
                px: { xs: 1, md: 0 },
              }}
            >
              We are a technology solutions company dedicated to helping businesses grow through innovative digital services.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Box sx={{ py: { xs: 6, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center">
            <Grid item xs={12} md={6}>
              {/* Small screens: centered, constrained, natural aspect ratio */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', px: 2 }}>
                <Box
                  component="img"
                  src="/images/Our_mission.png"
                  alt="Our Mission"
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 12px 40px rgba(30, 58, 138, 0.2)',
                    display: 'block',
                  }}
                />
              </Box>
              {/* Desktop: original fixed-height design */}
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  height: 400,
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  borderRadius: '28px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(30, 58, 138, 0.3)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 300,
                    height: 300,
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  component="img"
                  src="/images/Our_mission.png"
                  alt="Our Mission"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    opacity: 0.85,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{
                  color: '#F59E0B',
                  fontWeight: 700,
                  fontSize: { xs: '0.75rem', md: '0.9rem' },
                  letterSpacing: '2px',
                  mb: 2,
                  display: 'block',
                }}
              >
                OUR MISSION
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.5rem' },
                  fontWeight: 900,
                  mb: 3,
                  color: '#1F2937',
                  letterSpacing: '-0.02em',
                }}
              >
                Empowering Businesses Through Technology
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: '#6B7280',
                  mb: 3,
                }}
              >
                Our mission is to provide high-quality IT services that empower organizations to succeed in the digital world. 
                We combine creativity, technical expertise, and modern technologies to deliver solutions that meet the unique needs of our clients.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: '#6B7280',
                }}
              >
                At Trinoxor, we believe that technology should be accessible, reliable, and transformative. We work closely with each client 
                to understand their goals and create solutions that drive real business results.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

{/* Why Choose Us Section */}
      <Box sx={{ py: { xs: 6, md: 14 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 5, md: 10 }}>
            <Typography
              variant="overline"
              sx={{
                color: '#F59E0B',
                fontWeight: 700,
                fontSize: { xs: '0.75rem', md: '0.9rem' },
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
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.5rem' },
                fontWeight: 900,
                mb: 3,
                color: '#1F2937',
                letterSpacing: '-0.02em',
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: '#6B7280',
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.8,
                px: { xs: 1, md: 0 },
              }}
            >
              These principles guide everything we do and ensure we deliver exceptional results for every client.
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 3, md: 5 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: { xs: 2.5, md: 4 },
                    borderRadius: '24px',
                    border: '1px solid #E5E7EB',
                    background: 'white',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 24px 48px ${value.color}20`,
                      borderColor: `${value.color}30`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        width: { xs: 72, md: 88 },
                        height: { xs: 72, md: 88 },
                        borderRadius: '22px',
                        background: `${value.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2.5,
                        color: value.color,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: '#1F2937',
                        fontSize: '1.15rem',
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#6B7280',
                        lineHeight: 1.7,
                        fontSize: '0.95rem',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
