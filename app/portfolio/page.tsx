'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Chip, Stack, Dialog, DialogContent, DialogTitle, IconButton, Avatar, Fade } from '@mui/material';
import { Launch, Code, Smartphone, Cloud, Close, GitHub, OpenInNew, TrendingUp, Speed, Security } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'TechCorp E-Commerce Platform',
    description: 'Modern online store with payment integration, inventory management, and customer analytics.',
    fullDescription: 'A comprehensive e-commerce solution built for TechCorp, featuring advanced inventory management, multiple payment gateways, real-time analytics, and a responsive design that increased their online sales by 300%.',
    image: '/images/project1.jpg',
    category: 'Web Development',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
    color: '#8B5CF6',
    icon: <Code />,
    results: [
      '300% increase in online sales',
      '45% improvement in conversion rate',
      '60% faster page load times',
      '99.9% uptime achieved'
    ],
    timeline: '8 weeks',
    client: 'TechCorp Solutions',
    year: '2024',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example'
  },
  {
    id: 2,
    title: 'FoodieApp Mobile Application',
    description: 'Cross-platform mobile app for food ordering with real-time tracking and payment processing.',
    fullDescription: 'A feature-rich mobile application for restaurant ordering, including real-time order tracking, push notifications, loyalty programs, and seamless payment integration that serves over 10,000 active users.',
    image: '/images/project2.jpg',
    category: 'Mobile Development',
    technologies: ['React Native', 'Firebase', 'Maps API', 'Push Notifications'],
    color: '#10B981',
    icon: <Smartphone />,
    results: [
      '10,000+ active users',
      '4.8/5 app store rating',
      '25% increase in order frequency',
      '40% reduction in order errors'
    ],
    timeline: '12 weeks',
    client: 'FoodieChain Restaurants',
    year: '2024',
    liveUrl: 'https://apps.apple.com/example',
    githubUrl: null
  },
  {
    id: 3,
    title: 'LegalFirm Professional Website',
    description: 'Professional corporate website with CMS, SEO optimization, and performance analytics.',
    fullDescription: 'A sophisticated website for a leading law firm, featuring client portal, case management integration, blog system, and advanced SEO that resulted in 200% increase in organic traffic.',
    image: '/images/project3.jpg',
    category: 'Web Design',
    technologies: ['WordPress', 'Custom Theme', 'SEO', 'Analytics'],
    color: '#F59E0B',
    icon: <Launch />,
    results: [
      '200% increase in organic traffic',
      '150% more client inquiries',
      '90% improvement in site speed',
      'Top 3 Google rankings achieved'
    ],
    timeline: '6 weeks',
    client: 'Sterling Legal Group',
    year: '2023',
    liveUrl: 'https://example-legal.com',
    githubUrl: null
  },
  {
    id: 4,
    title: 'CloudTech Infrastructure Migration',
    description: 'Scalable cloud hosting solution with automated backups and 99.9% uptime guarantee.',
    fullDescription: 'Complete infrastructure overhaul and cloud migration for a growing tech company, implementing automated scaling, monitoring, and backup solutions that reduced operational costs by 40%.',
    image: '/images/project4.jpg',
    category: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Monitoring'],
    color: '#1E3A8A',
    icon: <Cloud />,
    results: [
      '40% reduction in operational costs',
      '99.9% uptime achieved',
      '75% faster deployment times',
      'Zero data loss incidents'
    ],
    timeline: '10 weeks',
    client: 'CloudTech Innovations',
    year: '2023',
    liveUrl: null,
    githubUrl: null
  },
  {
    id: 5,
    title: 'HealthCare Patient Portal',
    description: 'Secure patient management system with appointment scheduling and telemedicine features.',
    fullDescription: 'HIPAA-compliant patient portal with appointment scheduling, secure messaging, prescription management, and telemedicine capabilities serving over 5,000 patients.',
    image: '/images/project5.jpg',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'HIPAA'],
    color: '#EF4444',
    icon: <Security />,
    results: [
      '5,000+ active patients',
      '80% reduction in phone calls',
      '95% patient satisfaction rate',
      'HIPAA compliance achieved'
    ],
    timeline: '14 weeks',
    client: 'MedCare Health Systems',
    year: '2024',
    liveUrl: 'https://patient-portal.example.com',
    githubUrl: null
  },
  {
    id: 6,
    title: 'FinTech Analytics Dashboard',
    description: 'Real-time financial analytics platform with advanced reporting and data visualization.',
    fullDescription: 'Comprehensive analytics platform for financial institutions featuring real-time data processing, interactive dashboards, automated reporting, and advanced security measures.',
    image: '/images/project6.jpg',
    category: 'Web Development',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js', 'Redis'],
    color: '#06B6D4',
    icon: <TrendingUp />,
    results: [
      '50% faster report generation',
      '90% improvement in data accuracy',
      '30% increase in user productivity',
      'Real-time processing achieved'
    ],
    timeline: '16 weeks',
    client: 'FinanceFlow Corp',
    year: '2023',
    liveUrl: null,
    githubUrl: null
  }
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Web Design', 'Cloud & Infrastructure'];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: <Launch /> },
  { number: '30+', label: 'Happy Clients', icon: <TrendingUp /> },
  { number: '99.9%', label: 'Uptime Achieved', icon: <Speed /> },
  { number: '24/7', label: 'Support Available', icon: <Security /> },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  interface Project {
    id: number;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    category: string;
    technologies: string[];
    color: string;
    icon: React.ReactElement;
    results: string[];
    timeline: string;
    client: string;
    year: string;
    liveUrl: string | null;
    githubUrl: string | null;
  }

  interface Stat {
    number: string;
    label: string;
    icon: React.ReactElement;
  }

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedProject(null);
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
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
                lineHeight: { xs: 1.2, md: 1.1 },
                px: { xs: 2, sm: 0 },
              }}
            >
              Our Portfolio
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem', lg: '2rem' },
                color: '#64748B',
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: { xs: '100%', md: '800px' },
                mx: 'auto',
                px: { xs: 2, sm: 0 },
              }}
            >
              Explore our successful projects and see how we've helped businesses achieve their digital goals.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(139, 92, 246, 0.08) 102px)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 4 },
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: '#8B5CF6',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Typography
                    variant="h3"
                    sx={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 800,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 }, position: 'relative', background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack direction="row" spacing={2} justifyContent="center" mb={{ xs: 6, md: 8 }} flexWrap="wrap" sx={{ px: { xs: 2, sm: 0 } }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant={selectedCategory === category ? 'filled' : 'outlined'}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: 3,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderColor: '#8B5CF6',
                  color: selectedCategory === category ? 'white' : '#8B5CF6',
                  bgcolor: selectedCategory === category ? '#8B5CF6' : 'transparent',
                  '&:hover': {
                    bgcolor: selectedCategory === category ? '#7C3AED' : 'rgba(139, 92, 246, 0.1)',
                  },
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            ))}
          </Stack>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} lg={6} key={project.id}>
                <Fade in={true} timeout={300 + index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'hidden',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: `0 25px 50px ${project.color}20`,
                      },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                  <Box
                    sx={{
                      height: 250,
                      background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}10 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        background: project.color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      {project.icon}
                    </Box>
                    <Chip
                      label={project.category}
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'white',
                        color: project.color,
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Stack direction="row" spacing={1} mb={2}>
                        <Chip
                          label={project.category}
                          size="small"
                          sx={{
                            bgcolor: `${project.color}20`,
                            color: project.color,
                            fontWeight: 600,
                          }}
                        />
                        <Chip
                          label={project.year}
                          size="small"
                          variant="outlined"
                        />
                      </Stack>
                      
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: '#1F2937' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, color: '#6B7280', lineHeight: 1.7 }}>
                        {project.description}
                      </Typography>
                      
                      <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: `${project.color}10`,
                              color: project.color,
                              fontWeight: 500,
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3} more`}
                            size="small"
                            variant="outlined"
                          />
                        )}
                      </Stack>
                      
                      <Button
                        variant="outlined"
                        endIcon={<Launch />}
                        fullWidth
                        sx={{
                          borderColor: project.color,
                          color: project.color,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            bgcolor: `${project.color}10`,
                            borderColor: project.color,
                          },
                        }}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Project Detail Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '90vh',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ p: 0, position: 'relative' }}>
              <Box
                sx={{
                  height: 200,
                  background: selectedProject.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  position: 'relative',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: 'rgba(255,255,255,0.2)',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {selectedProject.icon}
                  </Avatar>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9, mt: 1 }}>
                    {selectedProject.client} • {selectedProject.timeline}
                  </Typography>
                </Box>
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: 'white',
                    bgcolor: 'rgba(255,255,255,0.2)',
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.3)',
                    },
                  }}
                >
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                {selectedProject.fullDescription}
              </Typography>
              
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Key Results
                  </Typography>
                  <Stack spacing={1}>
                    {selectedProject.results.map((result, index) => (
                      <Box key={index} display="flex" alignItems="center" gap={1}>
                        <TrendingUp sx={{ fontSize: 16, color: selectedProject.color }} />
                        <Typography variant="body2">{result}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Technologies Used
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedProject.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          bgcolor: `${selectedProject.color}15`,
                          color: selectedProject.color,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
              
              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {selectedProject.liveUrl && (
                  <Button
                    variant="contained"
                    startIcon={<OpenInNew />}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    View Live Site
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="outlined"
                    startIcon={<GitHub />}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    sx={{
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    View Code
                  </Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      <Box sx={{ py: 12, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
              Let's create something amazing together. Contact us to discuss your project requirements.
            </Typography>
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Start Your Project
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}