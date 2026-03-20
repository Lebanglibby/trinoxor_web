'use client';
import Link from 'next/link';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Home, Globe, Briefcase, FolderOpen, Info, Mail, Phone, MapPin, Clock } from 'lucide-react';

const sections = [
  {
    title: 'Main Pages',
    color: '#1E3A8A',
    pages: [
      { label: 'Home', href: '/', icon: Home, description: 'Welcome to Trinoxor Integrated Technologies' },
      { label: 'Services', href: '/services', icon: Briefcase, description: 'Web development, mobile apps, hosting & IT support' },
      { label: 'Portfolio', href: '/portfolio', icon: FolderOpen, description: 'Our completed projects and case studies' },
      { label: 'About', href: '/about', icon: Info, description: 'Our story, mission, values and team' },
      { label: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch or request a free quote' },
    ],
  },
  {
    title: 'Our Services',
    color: '#8B5CF6',
    pages: [
      { label: 'Web Design & Development', href: '/services#web-design', icon: Globe, description: 'Modern, responsive websites from P1,200' },
      { label: 'Web Hosting & Cloud', href: '/services#hosting', icon: Globe, description: 'Reliable hosting from P600/year' },
      { label: 'Mobile App Development', href: '/services#mobile', icon: Globe, description: 'Android & cross-platform apps from P5,000' },
      { label: 'IT Support & Technical Services', href: '/services#it-support', icon: Globe, description: 'On-site & remote support from P400/hr' },
    ],
  },
  {
    title: 'Contact & Location',
    color: '#F59E0B',
    pages: [
      { label: '(+267) 78080590', href: 'tel:+26778080590', icon: Phone, description: 'Call us Monday–Friday, 9am–6pm' },
      { label: 'trinoxorbw@gmail.com', href: 'mailto:trinoxorbw@gmail.com', icon: Mail, description: 'Email us for quotes and enquiries' },
      { label: 'Main Mall, Gaborone', href: '/contact', icon: MapPin, description: 'Visit our office in Gaborone, Botswana' },
      { label: 'Mon–Fri, 09:00–18:00', href: '/contact', icon: Clock, description: 'Our working hours' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <HeaderNew />

      {/* Hero */}
      <Box
        sx={{
          pt: { xs: 12, md: 14 },
          pb: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
          position: 'relative',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            variant="overline"
            sx={{ color: '#F59E0B', fontWeight: 700, letterSpacing: '2px', mb: 2, display: 'block' }}
          >
            SITE NAVIGATION
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 900,
              color: '#1F2937',
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Sitemap
          </Typography>
          <Typography sx={{ color: '#6B7280', fontSize: { xs: '0.95rem', md: '1.1rem' }, maxWidth: 560, mx: 'auto' }}>
            A complete overview of all pages and sections on the Trinoxor Integrated Technologies website.
          </Typography>
        </Container>
      </Box>

      {/* Sections */}
      <Box sx={{ py: { xs: 6, md: 10 }, background: '#FFFFFF' }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            {sections.map((section) => (
              <Grid item xs={12} md={4} key={section.title}>
                <Box
                  sx={{
                    borderTop: `4px solid ${section.color}`,
                    borderRadius: '0 0 16px 16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  }}
                >
                  <Box sx={{ px: 3, py: 2.5, background: `${section.color}08` }}>
                    <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: section.color, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                      {section.title}
                    </Typography>
                  </Box>
                  {section.pages.map((page) => {
                    const Icon = page.icon;
                    return (
                      <Link key={page.href} href={page.href} style={{ textDecoration: 'none' }}>
                        <Card
                          elevation={0}
                          sx={{
                            borderRadius: 0,
                            borderBottom: '1px solid #F1F5F9',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              background: `${section.color}06`,
                              pl: 0.5,
                            },
                          }}
                        >
                          <CardContent sx={{ py: '14px !important', px: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box
                              sx={{
                                mt: 0.3,
                                width: 34,
                                height: 34,
                                borderRadius: '8px',
                                background: `${section.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                color: section.color,
                              }}
                            >
                              <Icon size={16} />
                            </Box>
                            <Box>
                              <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#1F2937', mb: 0.3 }}>
                                {page.label}
                              </Typography>
                              <Typography sx={{ fontSize: '0.8rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                                {page.description}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
