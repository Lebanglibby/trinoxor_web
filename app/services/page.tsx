'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText, Chip, Stack, Divider, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Globe, Smartphone, Cloud, Wrench, CheckCircle, TrendingUp, Clock, ArrowRight, ChevronDown, Zap, Shield, Users, HeadphonesIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Single source of truth for pricing
export const PRICING = {
  web: {
    starter:      { label: 'Starter',      price: 'P1,200',  period: '1–2 weeks' },
    professional: { label: 'Professional', price: 'P2,500',  period: '2–4 weeks' },
    enterprise:   { label: 'Enterprise',   price: 'Custom',  period: 'Custom'    },
  },
  hosting: {
    basic:    { label: 'Basic',    price: 'P600',   period: '/year' },
    business: { label: 'Business', price: 'P1,200', period: '/year' },
    premium:  { label: 'Premium',  price: 'P2,400', period: '/year' },
  },
  mobile: {
    basic:    { label: 'Basic App',    price: 'P5,000',  period: '4–8 weeks'  },
    advanced: { label: 'Advanced App', price: 'P12,000', period: '8–16 weeks' },
    enterprise:{ label: 'Enterprise',  price: 'Custom',  period: 'Custom'     },
  },
  it: {
    adhoc:    { label: 'Ad-hoc',    price: 'P400',   period: '/hour'  },
    monthly:  { label: 'Monthly',   price: 'P1,500', period: '/month' },
    annual:   { label: 'Annual',    price: 'P15,000',period: '/year'  },
  },
};

const services = [
  {
    icon: <Globe size={52} />,
    title: 'Web Design & Development',
    tagline: 'Modern websites that convert visitors into customers',
    description: 'We design and develop fast, responsive, and SEO-optimised websites tailored to your brand and business goals.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    features: [
      'Business & portfolio websites',
      'E-commerce & online stores',
      'Custom web applications',
      'Website redesign & optimisation',
      'SEO-friendly structure',
    ],
    benefits: [
      'Mobile-first responsive design',
      'Fast loading speeds (< 3 seconds)',
      'Improved online visibility',
      'Higher conversion rates',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    packages: [
      { ...PRICING.web.starter,      features: ['5-page website', 'Mobile responsive', 'Basic SEO', 'Contact form', '3 months support'] },
      { ...PRICING.web.professional, features: ['Up to 20 pages', 'Custom design', 'Advanced SEO', 'CMS integration', '6 months support'], popular: true },
      { ...PRICING.web.enterprise,   features: ['Unlimited pages', 'Custom features', 'Priority support', 'Dedicated manager', 'Advanced security'] },
    ],
  },
  {
    icon: <Cloud size={52} />,
    title: 'Web Hosting & Cloud Services',
    tagline: '99.9% uptime with enterprise-grade infrastructure',
    description: 'Reliable, secure hosting solutions that keep your website fast and accessible around the clock.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
    features: [
      'Domain registration & management',
      'Secure website hosting',
      'Business email hosting',
      'Automatic daily backups',
      'Performance optimisation',
    ],
    benefits: [
      '99.9% uptime guarantee',
      '24/7 monitoring & alerts',
      'SSL certificates included',
      'CDN for global speed',
    ],
    technologies: ['AWS', 'CloudFlare', 'Docker', 'Linux', 'Nginx'],
    packages: [
      { ...PRICING.hosting.basic,    features: ['1 website', '5 GB storage', '5 email accounts', 'SSL certificate', 'Monthly backups'] },
      { ...PRICING.hosting.business, features: ['3 websites', '20 GB storage', '20 email accounts', 'SSL + CDN', 'Daily backups'], popular: true },
      { ...PRICING.hosting.premium,  features: ['Unlimited websites', '100 GB storage', 'Unlimited emails', 'Priority support', 'Hourly backups'] },
    ],
  },
  {
    icon: <Smartphone size={52} />,
    title: 'Mobile Application Development',
    tagline: 'Powerful apps that connect you with your customers',
    description: 'We build high-performance Android and cross-platform mobile apps that deliver seamless user experiences.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    features: [
      'Android application development',
      'Cross-platform (iOS & Android)',
      'Business mobile solutions',
      'API & backend integration',
      'App maintenance & updates',
    ],
    benefits: [
      'Reach customers on-the-go',
      'Push notifications for marketing',
      'Offline functionality available',
      'Smooth, native-like performance',
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'REST APIs', 'SQLite'],
    packages: [
      { ...PRICING.mobile.basic,     features: ['Single platform', 'Up to 10 screens', 'Basic backend', 'App store submission', '3 months support'] },
      { ...PRICING.mobile.advanced,  features: ['iOS + Android', 'Unlimited screens', 'Custom backend', 'Push notifications', '6 months support'], popular: true },
      { ...PRICING.mobile.enterprise,features: ['Full custom solution', 'Complex integrations', 'Dedicated team', 'Priority support', 'SLA agreement'] },
    ],
  },
  {
    icon: <Wrench size={52} />,
    title: 'IT Support & Technical Services',
    tagline: 'Keep your systems running at peak performance',
    description: 'Comprehensive IT support to help businesses maintain efficient, secure, and up-to-date technology systems.',
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    features: [
      'Computer troubleshooting & repair',
      'Network setup & configuration',
      'Software installation & licensing',
      'System upgrades & optimisation',
      'Technical consultation',
    ],
    benefits: [
      'Minimise costly downtime',
      'Proactive system monitoring',
      'Secure network infrastructure',
      'Expert advice on demand',
    ],
    technologies: ['Windows', 'Linux', 'Network Security', 'VPN', 'Cloud Migration'],
    packages: [
      { ...PRICING.it.adhoc,   features: ['On-demand support', 'Remote & on-site', 'No commitment', 'Same-day response', 'Flexible hours'] },
      { ...PRICING.it.monthly, features: ['20 hours/month', 'Priority response', 'Monthly health check', 'Remote monitoring', 'Discounted rate'], popular: true },
      { ...PRICING.it.annual,  features: ['Unlimited support', 'Dedicated engineer', 'Quarterly audits', '24/7 emergency line', 'Best value'] },
    ],
  },
];

const processSteps = [
  { icon: <Users size={28} />,       step: '01', title: 'Discovery',    description: 'We learn about your business, goals, and requirements.' },
  { icon: <Zap size={28} />,         step: '02', title: 'Planning',     description: 'We create a detailed roadmap and project timeline.' },
  { icon: <Globe size={28} />,       step: '03', title: 'Development',  description: 'We build your solution using modern best practices.' },
  { icon: <Shield size={28} />,      step: '04', title: 'Testing',      description: 'Rigorous QA to ensure quality, speed, and security.' },
  { icon: <TrendingUp size={28} />,  step: '05', title: 'Launch',       description: 'We go live and provide ongoing support post-launch.' },
];

const serviceImages = [
  { desktop: '/images/services/web_design(desktop).png',   mobile: '/images/services/web_design(mobile).png' },
  { desktop: '/images/services/cloud(desktop).png',        mobile: '/images/services/cloud(mobile).png' },
  { desktop: '/images/services/mobile_dev(desktop).png',   mobile: '/images/services/mobile_dev(mobile).png' },
  { desktop: '/images/services/IT_support(desktop).png',   mobile: '/images/services/IT_support(mobile).png' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<{ [k: number]: 'features' | 'benefits' }>({});

  const getTab = (i: number) => activeTab[i] ?? 'features';

  return (
    <>
      <HeaderNew />

      {/* Hero */}
      <Box
        sx={{
          minHeight: { xs: '45vh', md: '55vh' },
          background: 'linear-gradient(180deg, #F8FAFC 0%, #EDE9FE 60%, #F8FAFC 100%)',
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
              linear-gradient(rgba(139, 92, 246, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, fontSize: { xs: '0.75rem', md: '0.9rem' }, letterSpacing: '2px', mb: 2, display: 'block' }}>
              WHAT WE OFFER
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.9rem', sm: '2.8rem', md: '4rem' },
                fontWeight: 900,
                mb: 3,
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                background: 'linear-gradient(135deg, #1E293B 0%, #8B5CF6 60%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Our Services
            </Typography>
            <Typography variant="h6" sx={{ fontSize: { xs: '0.95rem', md: '1.2rem' }, color: '#64748B', fontWeight: 400, lineHeight: 1.8, maxWidth: '700px', mx: 'auto', px: { xs: 2, md: 0 } }}>
              Comprehensive technology solutions designed to help your business thrive in the digital world.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Services Detail */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Stack spacing={{ xs: 6, md: 8 }}>
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: '24px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': { boxShadow: `0 16px 48px ${service.color}18` },
                }}
              >
                {/* Colored top bar */}
                <Box sx={{ height: 5, background: service.gradient }} />

                <CardContent sx={{ p: 0 }}>
                  <Grid container>
                    {/* Left panel */}
                    <Grid item xs={12} md={4}>
                      <Box
                        sx={{
                          height: '100%',
                          minHeight: { xs: 240, md: 420 },
                          position: 'relative',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end',
                          color: 'white',
                        }}
                      >
                        {/* Responsive background image */}
                        <Box
                          component="img"
                          src={serviceImages[index].desktop}
                          alt={service.title}
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: { xs: 'none', md: 'block' },
                          }}
                        />
                        <Box
                          component="img"
                          src={serviceImages[index].mobile}
                          alt={service.title}
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: { xs: 'block', md: 'none' },
                          }}
                        />
                        {/* Dark gradient overlay so text stays readable */}
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)`,
                          }}
                        />
                        {/* Content on top of image */}
                        <Box sx={{ position: 'relative', zIndex: 1, p: { xs: 4, md: 5 } }}>
                          <Box sx={{ mb: 2, opacity: 0.95 }}>{service.icon}</Box>
                          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1.5, fontSize: { xs: '1.4rem', md: '1.7rem' }, lineHeight: 1.3 }}>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.85, lineHeight: 1.7, mb: 3, fontSize: '0.95rem' }}>
                            {service.tagline}
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                            <Chip label={`From ${service.packages[0].price}`} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', fontWeight: 700, fontSize: '0.8rem' }} />
                            <Chip label={service.packages[0].period} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '0.8rem' }} />
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Right panel */}
                    <Grid item xs={12} md={8}>
                      <Box sx={{ p: { xs: 3, md: 5 } }}>
                        <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4, fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                          {service.description}
                        </Typography>

                        {/* Tab switcher */}
                        <Stack direction="row" spacing={1} mb={3} flexWrap="wrap" sx={{ gap: 1 }}>
                          {(['features', 'benefits'] as const).map((tab) => (
                            <Chip
                              key={tab}
                              label={tab.charAt(0).toUpperCase() + tab.slice(1)}
                              onClick={() => setActiveTab(prev => ({ ...prev, [index]: tab }))}
                              sx={{
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '0.85rem',
                                bgcolor: getTab(index) === tab ? service.color : 'transparent',
                                color: getTab(index) === tab ? 'white' : service.color,
                                border: `1.5px solid ${service.color}`,
                                transition: 'all 0.2s ease',
                                '&:hover': { bgcolor: `${service.color}20` },
                              }}
                            />
                          ))}
                        </Stack>

                        {getTab(index) === 'features' && (
                          <List dense disablePadding sx={{ mb: 3 }}>
                            {service.features.map((f, i) => (
                              <ListItem key={i} sx={{ px: 0, py: 0.4 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <CheckCircle size={18} color={service.color} />
                                </ListItemIcon>
                                <ListItemText primary={f} primaryTypographyProps={{ fontSize: { xs: '0.9rem', md: '1rem' }, color: '#374151' }} />
                              </ListItem>
                            ))}
                          </List>
                        )}

                        {getTab(index) === 'benefits' && (
                          <List dense disablePadding sx={{ mb: 3 }}>
                            {service.benefits.map((b, i) => (
                              <ListItem key={i} sx={{ px: 0, py: 0.4 }}>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                  <TrendingUp size={18} color={service.color} />
                                </ListItemIcon>
                                <ListItemText primary={b} primaryTypographyProps={{ fontSize: { xs: '0.9rem', md: '1rem' }, color: '#374151', fontWeight: 500 }} />
                              </ListItem>
                            ))}
                          </List>
                        )}

                        <Divider sx={{ mb: 3 }} />

                        {/* Pricing packages */}
                        <Typography variant="overline" sx={{ color: '#9CA3AF', fontWeight: 700, letterSpacing: '1.5px', fontSize: '0.72rem', mb: 2, display: 'block' }}>
                          PRICING PACKAGES
                        </Typography>
                        <Grid container spacing={2} mb={3}>
                          {service.packages.map((pkg, pi) => {
                            const isPopular = (pkg as any).popular;
                            // Each tier gets a distinct vivid background
                            const tierBg = [
                              `linear-gradient(135deg, ${service.color}18 0%, ${service.color}08 100%)`,
                              service.gradient,
                              `linear-gradient(135deg, #1E3A8A18 0%, ${service.color}12 100%)`,
                            ][pi];
                            const tierTextColor = isPopular ? 'white' : service.color;
                            const tierSubColor = isPopular ? 'rgba(255,255,255,0.75)' : '#6B7280';
                            const tierFeatureColor = isPopular ? 'rgba(255,255,255,0.9)' : '#374151';
                            return (
                              <Grid item xs={12} sm={4} key={pi}>
                                <Box
                                  sx={{
                                    p: { xs: 2.5, md: 3 },
                                    borderRadius: '18px',
                                    background: tierBg,
                                    border: isPopular ? 'none' : `1.5px solid ${service.color}25`,
                                    position: 'relative',
                                    textAlign: 'center',
                                    boxShadow: isPopular ? `0 12px 32px ${service.color}40` : '0 2px 8px rgba(0,0,0,0.05)',
                                    transform: isPopular ? 'scale(1.04)' : 'scale(1)',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    '&:hover': { transform: isPopular ? 'scale(1.06)' : 'scale(1.02)', boxShadow: `0 16px 40px ${service.color}35` },
                                  }}
                                >
                                  {isPopular && (
                                    <Chip
                                      label="⭐ Most Popular"
                                      size="small"
                                      sx={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', bgcolor: 'white', color: service.color, fontWeight: 800, fontSize: '0.7rem', boxShadow: `0 4px 12px ${service.color}40` }}
                                    />
                                  )}
                                  <Typography variant="caption" sx={{ color: tierSubColor, fontWeight: 700, display: 'block', mb: 0.5, letterSpacing: '0.5px', textTransform: 'uppercase', fontSize: '0.7rem' }}>{pkg.label}</Typography>
                                  <Typography sx={{ fontWeight: 900, color: tierTextColor, fontSize: { xs: '1.4rem', md: '1.6rem' }, lineHeight: 1.1, mb: 0.3 }}>{pkg.price}</Typography>
                                  <Typography variant="caption" sx={{ color: tierSubColor, fontWeight: 500 }}>{pkg.period}</Typography>
                                  <Divider sx={{ my: 1.5, borderColor: isPopular ? 'rgba(255,255,255,0.25)' : `${service.color}20` }} />
                                  <Stack spacing={0.6}>
                                    {pkg.features.map((f, fi) => (
                                      <Box key={fi} sx={{ display: 'flex', alignItems: 'center', gap: 0.8, justifyContent: 'flex-start' }}>
                                        <CheckCircle size={13} color={isPopular ? 'white' : service.color} style={{ flexShrink: 0 }} />
                                        <Typography variant="caption" sx={{ color: tierFeatureColor, fontSize: '0.78rem', textAlign: 'left', lineHeight: 1.4 }}>{f}</Typography>
                                      </Box>
                                    ))}
                                  </Stack>
                                </Box>
                              </Grid>
                            );
                          })}
                        </Grid>

                        <Link href="/contact" passHref>
                          <Button
                            variant="contained"
                            endIcon={<ArrowRight size={18} />}
                            sx={{
                              px: 4,
                              py: 1.5,
                              borderRadius: '10px',
                              textTransform: 'none',
                              fontWeight: 700,
                              fontSize: '0.95rem',
                              background: service.gradient,
                              boxShadow: `0 6px 20px ${service.color}35`,
                              '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 10px 28px ${service.color}45` },
                            }}
                          >
                            Get a Quote
                          </Button>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Process */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={{ xs: 5, md: 8 }}>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: '2px', mb: 2, display: 'block' }}>HOW WE WORK</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.5rem' }, fontWeight: 900, color: '#1F2937', letterSpacing: '-0.02em' }}>Our Process</Typography>
          </Box>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {processSteps.map((step, i) => (
              <Grid item xs={12} sm={6} md={2.4} key={i}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: { xs: 3, md: 3.5 },
                    borderRadius: '20px',
                    border: '1px solid #E5E7EB',
                    background: 'white',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 16px 40px rgba(139,92,246,0.15)', borderColor: '#8B5CF6' },
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#8B5CF6', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '1px' }}>{step.step}</Typography>
                  <Avatar sx={{ width: 56, height: 56, bgcolor: '#EDE9FE', color: '#8B5CF6', mx: 'auto', my: 1.5 }}>{step.icon}</Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem', color: '#1F2937' }}>{step.title}</Typography>
                  <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.6, fontSize: '0.85rem' }}>{step.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: 'white' }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
            <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: '2px', mb: 2, display: 'block' }}>FAQ</Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.5rem' }, fontWeight: 900, color: '#1F2937', letterSpacing: '-0.02em' }}>Common Questions</Typography>
          </Box>
          {[
            { q: 'How long does a typical project take?', a: 'Timelines depend on scope. A basic website takes 1–2 weeks, a professional site 2–4 weeks, mobile apps 4–16 weeks, and hosting is live within 1–2 days. We provide a detailed timeline during consultation.' },
            { q: 'Do you offer support after launch?', a: 'Yes. All packages include a support period. We also offer ongoing monthly and annual maintenance plans to keep your systems updated, secure, and running smoothly.' },
            { q: 'What are your payment terms?', a: 'We typically require 50% upfront and 50% on completion for smaller projects. Larger projects can be broken into milestone-based payments.' },
            { q: 'Can you migrate my existing website?', a: 'Absolutely. We handle full website migrations to modern platforms while preserving your SEO rankings and improving performance.' },
            { q: 'Do you serve clients outside Botswana?', a: 'Yes. We work with clients remotely across Africa and beyond. Most of our services are fully deliverable online.' },
          ].map((faq, i) => (
            <Accordion
              key={i}
              sx={{
                mb: 2,
                borderRadius: '14px !important',
                border: '1px solid #E5E7EB',
                '&:before': { display: 'none' },
                boxShadow: 'none',
                '&.Mui-expanded': { border: '1px solid #8B5CF620', boxShadow: '0 4px 20px rgba(139,92,246,0.1)' },
              }}
            >
              <AccordionSummary expandIcon={<ChevronDown size={20} color="#8B5CF6" />} sx={{ px: 3, py: 0.5 }}>
                <Typography fontWeight={700} color="#1F2937" fontSize={{ xs: '0.95rem', md: '1rem' }}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.8 }}>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 60%, #F59E0B 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.8rem' }, fontWeight: 900, color: 'white', mb: 2, letterSpacing: '-0.02em' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 5, fontWeight: 400, lineHeight: 1.7, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
            Let's discuss how we can help transform your business with the right technology solution.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Link href="/contact" passHref>
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 5, py: 1.8,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  bgcolor: 'white',
                  color: '#1E3A8A',
                  '&:hover': { bgcolor: '#F8FAFC', transform: 'translateY(-2px)' },
                }}
              >
                Contact Us Today
              </Button>
            </Link>
            <Link href="/portfolio" passHref>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 5, py: 1.8,
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textTransform: 'none',
                  borderColor: 'rgba(255,255,255,0.6)',
                  color: 'white',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)', transform: 'translateY(-2px)' },
                }}
              >
                View Our Work
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
