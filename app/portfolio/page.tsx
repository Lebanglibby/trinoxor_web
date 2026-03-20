'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip, Stack, Dialog, DialogContent, DialogTitle, IconButton, Avatar, Fade } from '@mui/material';
import { Launch, Code, Smartphone, Cloud, Close, GitHub, OpenInNew, TrendingUp, Speed, Security } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

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

const projects: Project[] = [
  {
    id: 1,
    title: 'Retail Store E-Commerce Solution',
    description: 'Helped a local retail business expand online with a modern e-commerce platform that increased their revenue by 250%.',
    fullDescription: 'We built a complete online store for a growing retail business, making it easy for their customers to shop online. The new platform includes secure payments, inventory tracking, and mobile shopping - resulting in 250% revenue growth in just 6 months.',
    image: '/images/project1.jpg',
    category: 'Web Development',
    technologies: ['Next.js', 'Secure Payments', 'Mobile-Friendly', 'Fast Loading'],
    color: '#1E3A8A',
    icon: <Code />,
    results: ['250% increase in revenue', '1,500+ new online customers', 'Mobile sales up 180%', 'Customer satisfaction: 4.9/5'],
    timeline: '8 weeks', client: 'Local Retail Business', year: '2024', liveUrl: null, githubUrl: null,
  },
  {
    id: 2,
    title: 'Restaurant Mobile Ordering App',
    description: 'Created a mobile app that made ordering easier for customers and increased restaurant orders by 200%.',
    fullDescription: 'We developed a user-friendly mobile app that lets customers order food, track deliveries, and earn rewards. The restaurant saw immediate results with more orders, happier customers, and streamlined operations.',
    image: '/images/project2.jpg',
    category: 'Mobile Development',
    technologies: ['Mobile App', 'Order Tracking', 'Push Notifications', 'Loyalty Program'],
    color: '#F59E0B',
    icon: <Smartphone />,
    results: ['200% increase in orders', '3,000+ app downloads', '4.8/5 customer rating', '35% repeat customer rate'],
    timeline: '10 weeks', client: 'Restaurant Chain', year: '2024', liveUrl: null, githubUrl: null,
  },
  {
    id: 3,
    title: 'Professional Services Website',
    description: 'Built a modern website that helped a consulting firm attract 3x more clients through improved online presence.',
    fullDescription: 'We designed and built a professional website that showcases their services, builds trust with potential clients, and makes it easy to get in touch. The result: triple the client inquiries and top Google rankings.',
    image: '/images/project3.jpg',
    category: 'Web Design',
    technologies: ['Modern Design', 'SEO Optimized', 'Contact Forms', 'Fast & Secure'],
    color: '#10B981',
    icon: <Launch />,
    results: ['3x more client inquiries', 'Top 3 Google rankings', '85% faster website', '500+ monthly visitors'],
    timeline: '6 weeks', client: 'Consulting Firm', year: '2024', liveUrl: null, githubUrl: null,
  },
  {
    id: 4,
    title: 'Business Cloud Migration',
    description: 'Moved a growing company to reliable cloud hosting, reducing costs by 45% while improving performance.',
    fullDescription: 'We migrated their entire business to secure cloud hosting with automatic backups and 24/7 monitoring. They now enjoy better performance, lower costs, and peace of mind knowing their data is safe.',
    image: '/images/project4.jpg',
    category: 'Cloud & Hosting',
    technologies: ['Cloud Hosting', 'Auto Backups', '24/7 Monitoring', 'Security'],
    color: '#8B5CF6',
    icon: <Cloud />,
    results: ['45% cost reduction', '99.9% uptime achieved', 'Zero data loss', '3x faster performance'],
    timeline: '8 weeks', client: 'Growing Business', year: '2023', liveUrl: null, githubUrl: null,
  },
  {
    id: 5,
    title: 'Healthcare Appointment System',
    description: 'Developed an online booking system that reduced phone calls by 70% and improved patient satisfaction.',
    fullDescription: 'We created a simple online system where patients can book appointments, receive reminders, and access their information securely. The clinic staff now spend less time on the phone and more time caring for patients.',
    image: '/images/project5.jpg',
    category: 'Web Development',
    technologies: ['Online Booking', 'SMS Reminders', 'Secure Portal', 'Easy to Use'],
    color: '#EF4444',
    icon: <Security />,
    results: ['70% fewer phone calls', '1,200+ patients using system', '95% patient satisfaction', '50% fewer missed appointments'],
    timeline: '12 weeks', client: 'Medical Clinic', year: '2024', liveUrl: null, githubUrl: null,
  },
  {
    id: 6,
    title: 'Real Estate Property Portal',
    description: 'Built a property listing website that helped a real estate agency close 40% more deals.',
    fullDescription: 'We created an attractive website where potential buyers can browse properties, schedule viewings, and contact agents easily. The agency now reaches more buyers and closes deals faster than ever before.',
    image: '/images/project6.jpg',
    category: 'Web Development',
    technologies: ['Property Listings', 'Search Filters', 'Contact Forms', 'Mobile-Friendly'],
    color: '#06B6D4',
    icon: <TrendingUp />,
    results: ['40% more deals closed', '2,000+ property views/month', '60% increase in inquiries', '4.7/5 client rating'],
    timeline: '10 weeks', client: 'Real Estate Agency', year: '2023', liveUrl: null, githubUrl: null,
  },
];

const categories = ['All', 'Web Development', 'Mobile Development', 'Web Design', 'Cloud & Hosting'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
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

      {/* Hero */}
      <Box
        sx={{
          minHeight: '60vh',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
          display: 'flex',
          alignItems: 'center',
          pt: 12,
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
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', mb: 2, display: 'block' }}>
              OUR WORK
            </Typography>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, fontWeight: 900, mb: 3, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#1F2937' }}
            >
              Real Results for{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #F59E0B 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Real Businesses
              </Box>
            </Typography>
            <Typography
              component="p"
              variant="h6"
              sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: '#6B7280', fontWeight: 400, lineHeight: 1.8, maxWidth: '700px', mx: 'auto' }}
            >
              See how we have helped businesses like yours grow with modern technology solutions that deliver measurable results.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Projects */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 50%, #F9FAFB 100%)' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.95rem', letterSpacing: '3px', mb: 2.5, display: 'block' }}>
              EXPLORE OUR WORK
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.5rem' }, fontWeight: 900, mb: 5, color: '#1F2937', letterSpacing: '-0.02em' }}>
              Filter by Category
            </Typography>
            <Stack direction="row" spacing={{ xs: 1.5, md: 2.5 }} justifyContent="center" flexWrap="wrap" useFlexGap sx={{ px: { xs: 2, md: 0 } }}>
              {categories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  variant={selectedCategory === category ? 'filled' : 'outlined'}
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    px: { xs: 3, md: 4 }, py: { xs: 2.5, md: 3 }, borderRadius: '20px',
                    fontSize: { xs: '0.9rem', md: '1rem' }, fontWeight: 700,
                    borderColor: selectedCategory === category ? 'transparent' : '#E5E7EB', borderWidth: 2,
                    color: selectedCategory === category ? 'white' : '#6B7280',
                    background: selectedCategory === category ? 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)' : 'white',
                    boxShadow: selectedCategory === category ? '0 8px 24px rgba(30, 58, 138, 0.25)' : '0 2px 8px rgba(0,0,0,0.04)',
                    '&:hover': {
                      background: selectedCategory === category ? 'linear-gradient(135deg, #1E40AF 0%, #2563EB 100%)' : '#F9FAFB',
                      transform: 'translateY(-4px) scale(1.05)',
                      boxShadow: selectedCategory === category ? '0 12px 32px rgba(30, 58, 138, 0.35)' : '0 4px 12px rgba(0,0,0,0.08)',
                    },
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer',
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Grid container spacing={{ xs: 4, md: 6 }}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Fade in={true} timeout={300 + index * 100}>
                  <Card
                    sx={{
                      height: '100%', borderRadius: '28px', overflow: 'hidden',
                      border: '1px solid', borderColor: `${project.color}15`,
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer',
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 100%)',
                      '&:hover': { transform: 'translateY(-12px) scale(1.02)', boxShadow: `0 32px 64px ${project.color}20`, borderColor: `${project.color}30` },
                    }}
                    onClick={() => handleProjectClick(project)}
                  >
                    <Box
                      sx={{
                        height: 280, background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}08 100%)`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative', overflow: 'hidden',
                        '&::before': { content: '""', position: 'absolute', top: -100, right: -100, width: 300, height: 300, background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)` },
                      }}
                    >
                      <Box sx={{ width: 100, height: 100, background: project.color, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: `0 16px 40px ${project.color}40`, position: 'relative', zIndex: 1, transition: 'all 0.4s ease', '&:hover': { transform: 'scale(1.1) rotate(-5deg)' } }}>
                        {project.icon}
                      </Box>
                      <Chip label={project.category} sx={{ position: 'absolute', top: 20, right: 20, bgcolor: 'white', color: project.color, fontWeight: 700, fontSize: '0.85rem', px: 2, py: 2.5, height: 'auto', boxShadow: `0 4px 12px ${project.color}20` }} />
                    </Box>

                    <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                      <Stack direction="row" spacing={1.5} mb={3}>
                        <Chip label={project.year} size="small" sx={{ bgcolor: `${project.color}15`, color: project.color, fontWeight: 700, fontSize: '0.8rem', height: 28 }} />
                        <Chip label={project.timeline} size="small" variant="outlined" sx={{ borderColor: `${project.color}30`, color: project.color, fontWeight: 600, fontSize: '0.8rem', height: 28 }} />
                      </Stack>
                      <Typography variant="h3" component="h3" sx={{ mb: 2.5, fontWeight: 800, color: '#1F2937', fontSize: '1.5rem', letterSpacing: '-0.01em' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3.5, color: '#6B7280', lineHeight: 1.85, fontSize: '1.05rem' }}>
                        {project.description}
                      </Typography>
                      <Box mb={4}>
                        <Typography variant="subtitle2" sx={{ color: '#9CA3AF', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', mb: 1.5 }}>KEY RESULTS</Typography>
                        <Stack spacing={1.5}>
                          {project.results.slice(0, 2).map((result, idx) => (
                            <Box key={idx} display="flex" alignItems="center" gap={1.5}>
                              <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: project.color, boxShadow: `0 0 8px ${project.color}50` }} />
                              <Typography variant="body2" sx={{ color: '#4B5563', fontWeight: 600, fontSize: '0.95rem' }}>{result}</Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                      <Button variant="contained" endIcon={<Launch />} fullWidth sx={{ background: project.color, borderRadius: '16px', textTransform: 'none', fontWeight: 700, fontSize: '1.05rem', py: 2, boxShadow: `0 8px 24px ${project.color}30`, '&:hover': { background: project.color, transform: 'translateY(-2px)', boxShadow: `0 12px 32px ${project.color}40` }, transition: 'all 0.3s ease' }}>
                        View Full Case Study
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
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth PaperProps={{ sx: { borderRadius: 3, maxHeight: '90vh' } }}>
        {selectedProject && (
          <>
            <DialogTitle sx={{ p: 0, position: 'relative' }}>
              <Box sx={{ height: 200, background: selectedProject.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', position: 'relative' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 2 }}>{selectedProject.icon}</Avatar>
                  <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>{selectedProject.title}</Typography>
                  <Typography variant="subtitle1" sx={{ opacity: 0.9, mt: 1 }}>{selectedProject.client} • {selectedProject.timeline}</Typography>
                </Box>
                <IconButton onClick={handleCloseDialog} sx={{ position: 'absolute', top: 16, right: 16, color: 'white', bgcolor: 'rgba(255,255,255,0.2)', '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}>
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ p: 4 }}>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>{selectedProject.fullDescription}</Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" component="h4" sx={{ mb: 2, fontWeight: 600 }}>Key Results</Typography>
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
                  <Typography variant="h4" component="h4" sx={{ mb: 2, fontWeight: 600 }}>Technologies Used</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {selectedProject.technologies.map((tech) => (
                      <Chip key={tech} label={tech} sx={{ bgcolor: `${selectedProject.color}15`, color: selectedProject.color, fontWeight: 600, mb: 1 }} />
                    ))}
                  </Stack>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {selectedProject.liveUrl && (
                  <Button variant="contained" startIcon={<OpenInNew />} href={selectedProject.liveUrl} target="_blank" sx={{ textTransform: 'none', fontWeight: 600 }}>View Live Site</Button>
                )}
                {selectedProject.githubUrl && (
                  <Button variant="outlined" startIcon={<GitHub />} href={selectedProject.githubUrl} target="_blank" sx={{ textTransform: 'none', fontWeight: 600 }}>View Code</Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', position: 'relative', overflow: 'hidden', '&::before': { content: '""', position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(circle at top right, rgba(245, 158, 11, 0.2) 0%, transparent 70%)' } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography variant="h2" sx={{ color: 'white', mb: 3, fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, letterSpacing: '-0.02em' }}>
              Ready to Grow Your Business?
            </Typography>
            <Typography component="p" variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', mb: 6, maxWidth: '600px', mx: 'auto', lineHeight: 1.8, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
              Let us help you achieve results like these. Get in touch today for a free consultation.
            </Typography>
            <Link href="/contact" passHref>
              <Button variant="contained" size="large" sx={{ px: 6, py: 2.5, borderRadius: '16px', fontSize: '1.2rem', fontWeight: 700, textTransform: 'none', bgcolor: '#F59E0B', color: 'white', boxShadow: '0 12px 32px rgba(245, 158, 11, 0.4)', '&:hover': { bgcolor: '#D97706', transform: 'translateY(-4px)', boxShadow: '0 16px 40px rgba(245, 158, 11, 0.5)' }, transition: 'all 0.3s ease' }}>
                Get Started Today
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
