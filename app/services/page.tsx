'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, Chip, Stack, Avatar, Accordion, AccordionSummary, AccordionDetails, Tab, Tabs } from '@mui/material';
import { Web, Cloud, PhoneAndroid, Support, CheckCircle, ArrowForward, ExpandMore, Timeline, Speed, Security, TrendingUp } from '@mui/icons-material';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    icon: <Web sx={{ fontSize: 60 }} />,
    title: 'Web Design & Development',
    description: 'We design and develop modern, responsive, and user-friendly websites that help businesses establish a strong online presence.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    features: [
      'Business websites',
      'E-commerce websites', 
      'Custom web applications',
      'Website redesign and optimization',
      'SEO-friendly website structure'
    ],
    benefits: [
      'Increase online visibility by 300%',
      'Improve conversion rates by 45%',
      'Mobile-first responsive design',
      'Fast loading speeds (<3 seconds)'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js'],
    timeline: '2-6 weeks',
    startingPrice: 'Starting at $2,500'
  },
  {
    icon: <Cloud sx={{ fontSize: 60 }} />,
    title: 'Web Hosting & Cloud Services',
    description: 'We provide reliable and secure hosting solutions that keep your website running smoothly and accessible at all times.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    features: [
      'Domain registration and management',
      'Secure website hosting',
      'Email hosting for businesses',
      'Website backups and maintenance',
      'Performance optimization'
    ],
    benefits: [
      '99.9% uptime guarantee',
      '24/7 monitoring and support',
      'Automatic daily backups',
      'SSL certificates included'
    ],
    technologies: ['AWS', 'CloudFlare', 'Docker', 'Linux'],
    timeline: '1-2 days',
    startingPrice: 'Starting at $29/month'
  },
  {
    icon: <PhoneAndroid sx={{ fontSize: 60 }} />,
    title: 'Mobile Application Development',
    description: 'We develop powerful mobile applications that help businesses connect with customers and improve service delivery.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    features: [
      'Android application development',
      'Cross-platform mobile apps',
      'Business mobile solutions',
      'App maintenance and updates'
    ],
    benefits: [
      'Reach customers on-the-go',
      'Increase customer engagement by 60%',
      'Push notifications for marketing',
      'Offline functionality available'
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
    timeline: '3-8 weeks',
    startingPrice: 'Starting at $5,000'
  },
  {
    icon: <Support sx={{ fontSize: 60 }} />,
    title: 'IT Support & Technical Services',
    description: 'Our IT support services help businesses maintain efficient and secure technology systems.',
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    features: [
      'Computer troubleshooting and maintenance',
      'Network setup and support',
      'Software installation and configuration',
      'System upgrades and optimization',
      'Technical consultation'
    ],
    benefits: [
      'Reduce downtime by 80%',
      '24/7 emergency support',
      'Proactive system monitoring',
      'Cost-effective IT solutions'
    ],
    technologies: ['Windows', 'Linux', 'Network Security', 'Cloud Migration'],
    timeline: 'Ongoing',
    startingPrice: 'Starting at $150/hour'
  },
];

const processSteps = [
  { icon: <Timeline />, title: 'Discovery', description: 'Understanding your needs and goals' },
  { icon: <ExpandMore />, title: 'Planning', description: 'Creating detailed project roadmap' },
  { icon: <Speed />, title: 'Development', description: 'Building your solution with best practices' },
  { icon: <Security />, title: 'Testing', description: 'Ensuring quality and security' },
  { icon: <TrendingUp />, title: 'Launch', description: 'Going live with ongoing support' },
];

export default function Services() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
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
              Our Services
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
              Comprehensive technology solutions designed to help your business thrive in the digital world.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 12, position: 'relative', background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            {services.map((service, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    overflow: 'hidden',
                    borderRadius: 4,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 25px 50px ${service.color}20`,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <Box
                          sx={{
                            height: { xs: 200, md: '100%' },
                            minHeight: { md: 300 },
                            background: service.gradient,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            p: 4,
                          }}
                        >
                          {service.icon}
                          <Typography variant="h4" sx={{ mt: 2, fontWeight: 600, textAlign: 'center' }}>
                            {service.title}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <Box sx={{ p: { xs: 4, md: 6 } }}>
                          <Stack direction="row" spacing={2} mb={3}>
                            <Chip label={service.timeline} color="primary" variant="outlined" />
                            <Chip label={service.startingPrice} sx={{ bgcolor: `${service.color}20`, color: service.color }} />
                          </Stack>
                          
                          <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, mb: 4, color: '#475569' }}>
                            {service.description}
                          </Typography>
                          
                          <Tabs value={selectedTab} onChange={handleTabChange} sx={{ mb: 4 }}>
                            <Tab label="Features" />
                            <Tab label="Benefits" />
                            <Tab label="Technologies" />
                          </Tabs>
                          
                          {selectedTab === 0 && (
                            <List sx={{ mb: 4 }}>
                              {service.features.map((feature, featureIndex) => (
                                <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 36 }}>
                                    <CheckCircle sx={{ color: service.color, fontSize: 20 }} />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary={feature}
                                    sx={{ 
                                      '& .MuiListItemText-primary': { 
                                        fontSize: '1.1rem',
                                        color: '#374151'
                                      }
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          )}
                          
                          {selectedTab === 1 && (
                            <List sx={{ mb: 4 }}>
                              {service.benefits.map((benefit, benefitIndex) => (
                                <ListItem key={benefitIndex} sx={{ py: 0.5 }}>
                                  <ListItemIcon sx={{ minWidth: 36 }}>
                                    <TrendingUp sx={{ color: service.color, fontSize: 20 }} />
                                  </ListItemIcon>
                                  <ListItemText 
                                    primary={benefit}
                                    sx={{ 
                                      '& .MuiListItemText-primary': { 
                                        fontSize: '1.1rem',
                                        color: '#374151',
                                        fontWeight: 500
                                      }
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          )}
                          
                          {selectedTab === 2 && (
                            <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
                              {service.technologies.map((tech) => (
                                <Chip
                                  key={tech}
                                  label={tech}
                                  sx={{
                                    bgcolor: `${service.color}15`,
                                    color: service.color,
                                    fontWeight: 600,
                                    mb: 1
                                  }}
                                />
                              ))}
                            </Stack>
                          )}
                          
                          <Link href="/contact" passHref>
                            <Button
                              variant="contained"
                              endIcon={<ArrowForward />}
                              sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                '&:hover': {
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              Get Started
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 12, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(139, 92, 246, 0.08) 102px)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
            <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
              Our Process
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              A proven methodology that ensures successful project delivery every time
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
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
                    {step.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
              Frequently Asked Questions
            </Typography>
          </Box>
          
          {[
            {
              question: 'How long does a typical project take?',
              answer: 'Project timelines vary based on complexity. Web development projects typically take 2-6 weeks, mobile apps 3-8 weeks, and hosting setup 1-2 days. We provide detailed timelines during our initial consultation.'
            },
            {
              question: 'Do you provide ongoing support after launch?',
              answer: 'Yes! We offer comprehensive support packages including maintenance, updates, security monitoring, and technical assistance. Our support plans are tailored to your specific needs and budget.'
            },
            {
              question: 'What technologies do you specialize in?',
              answer: 'We work with modern, proven technologies including Next.js, React, Node.js, React Native, AWS, and more. We choose the best technology stack based on your project requirements and long-term goals.'
            },
            {
              question: 'Can you help migrate my existing website?',
              answer: 'Absolutely! We specialize in website migrations and can help transfer your existing site to a modern platform while preserving your SEO rankings and improving performance.'
            }
          ].map((faq, index) => (
            <Accordion key={index} sx={{ mb: 2, borderRadius: 2, '&:before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#6B7280' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      <Box sx={{ py: 12, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: '600px', mx: 'auto' }}>
              Let's discuss how we can help transform your business with our technology solutions.
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
                Contact Us Today
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}