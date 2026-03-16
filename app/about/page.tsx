'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Stack, LinearProgress, Accordion, AccordionSummary, AccordionDetails, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/material';
import { Business, Security, Speed, Support, ExpandMore, EmojiEvents, Group, TrendingUp, Lightbulb } from '@mui/icons-material';
import { useState } from 'react';

const values = [
  {
    icon: <Business sx={{ fontSize: 48 }} />,
    title: 'Professional Excellence',
    description: 'We deliver consistent quality and dependable solutions that exceed expectations.',
    color: '#8B5CF6',
    stats: '100% Client Satisfaction',
  },
  {
    icon: <Security sx={{ fontSize: 48 }} />,
    title: 'Trust & Security',
    description: 'Your data and business operations are protected with enterprise-grade security.',
    color: '#1E3A8A',
    stats: 'Zero Security Breaches',
  },
  {
    icon: <Speed sx={{ fontSize: 48 }} />,
    title: 'Modern Technology',
    description: 'We use the latest frameworks and best practices to build scalable solutions.',
    color: '#F59E0B',
    stats: 'Latest Tech Stack',
  },
  {
    icon: <Support sx={{ fontSize: 48 }} />,
    title: 'Continuous Support',
    description: 'Ongoing assistance and maintenance to keep your systems running smoothly.',
    color: '#10B981',
    stats: '24/7 Availability',
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Lead Developer & Founder',
    description: 'Full-stack developer with 8+ years of experience in modern web technologies.',
    avatar: '/images/team/alex.jpg',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    experience: '8+ years',
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on user-centered design and modern aesthetics.',
    avatar: '/images/team/sarah.jpg',
    skills: ['Figma', 'Adobe Creative', 'User Research', 'Prototyping'],
    experience: '6+ years',
  },
  {
    name: 'Mike Rodriguez',
    role: 'DevOps Engineer',
    description: 'Infrastructure specialist ensuring reliable and scalable deployments.',
    avatar: '/images/team/mike.jpg',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    experience: '7+ years',
  },
  {
    name: 'Emily Davis',
    role: 'Project Manager',
    description: 'Experienced project manager ensuring smooth delivery and client satisfaction.',
    avatar: '/images/team/emily.jpg',
    skills: ['Agile', 'Scrum', 'Client Relations', 'Quality Assurance'],
    experience: '5+ years',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'Started as a small web development agency with a focus on quality and innovation.',
    icon: <Lightbulb />,
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
    icon: <EmojiEvents />,
  },
  {
    year: '2021',
    title: 'Team Expansion',
    description: 'Grew our team to include specialized designers and DevOps engineers.',
    icon: <Group />,
  },
  {
    year: '2022',
    title: 'Mobile Development',
    description: 'Expanded services to include mobile app development and cloud solutions.',
    icon: <TrendingUp />,
  },
  {
    year: '2023',
    title: '50+ Projects',
    description: 'Reached milestone of 50+ successful projects with 100% client satisfaction.',
    icon: <EmojiEvents />,
  },
  {
    year: '2024',
    title: 'Innovation Focus',
    description: 'Continuing to innovate with AI integration and advanced cloud solutions.',
    icon: <Lightbulb />,
  },
];

const skills = [
  { name: 'Web Development', level: 95 },
  { name: 'Mobile Development', level: 88 },
  { name: 'Cloud Infrastructure', level: 92 },
  { name: 'UI/UX Design', level: 90 },
  { name: 'Project Management', level: 94 },
  { name: 'DevOps & Security', level: 89 },
];

export default function About() {
  const [expandedFaq, setExpandedFaq] = useState(false);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };
  return (
    <>
      <HeaderNew />
      
      <Box
        sx={{
          minHeight: '60vh',
          background: 'linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%)',
          display: 'flex',
          alignItems: 'center',
          pt: 12,
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
        <Container maxWidth="lg">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '4rem' },
              background: 'linear-gradient(135deg, #1E293B 0%, #8B5CF6 70%, #F59E0B 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: { xs: 3, md: 4 },
              fontWeight: 800,
              textAlign: 'center',
              lineHeight: { xs: 1.2, md: 1.1 },
              px: { xs: 2, sm: 0 },
            }}
          >
            About Trinoxor
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem', lg: '2rem' },
              color: '#64748B',
              fontWeight: 400,
              lineHeight: 1.7,
              textAlign: 'center',
              maxWidth: { xs: '100%', md: '800px' },
              mx: 'auto',
              px: { xs: 2, sm: 0 },
            }}
          >
            We are a technology solutions company dedicated to helping businesses grow through innovative digital services.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(139, 92, 246, 0.08) 102px)` } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" color="primary" sx={{ mb: { xs: 3, md: 4 }, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.8, color: '#475569', mb: { xs: 3, md: 4 } }}>
                Our mission is to provide high-quality IT services that empower organizations to succeed in the digital world. 
                At Trinoxor, we combine creativity, technical expertise, and modern technologies.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 200, md: 300 },
                  background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" sx={{ color: '#8B5CF6', fontWeight: 600, fontSize: { xs: '1.8rem', md: '3rem' } }}>
                  Innovation
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography variant="h2" color="primary" sx={{ mb: 3, fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' } }}>
              Why Choose Trinoxor
            </Typography>
          </Box>
          
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: { xs: 2, md: 3 },
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${value.color}20`,
                    },
                  }}
                >
                  <CardContent>
                    <Box sx={{ color: value.color, mb: 3 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {value.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: value.color,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {value.stats}
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