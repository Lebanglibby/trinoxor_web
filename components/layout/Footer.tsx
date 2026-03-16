'use client';
import { Box, Container, Typography, Grid, Stack, IconButton } from '@mui/material';
import { Email, Phone, LocationOn, LinkedIn, Twitter, GitHub } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', color: '#1F2937', py: { xs: 6, md: 8 }, borderTop: '1px solid #E5E7EB' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="primary" sx={{ mb: { xs: 2, md: 3 }, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              TRINOXOR
            </Typography>
            <Typography variant="body1" sx={{ mb: { xs: 2, md: 3 }, color: '#94A3B8', lineHeight: 1.7, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Your trusted technology partner dedicated to transforming businesses through innovative digital solutions. 
              We combine strategic thinking, creative design, and technical excellence to deliver results that matter.
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                { icon: <LinkedIn />, color: '#0A66C2' },
                { icon: <Twitter />, color: '#1DA1F2' },
                { icon: <GitHub />, color: '#F8FAFC' },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor: '#E5E7EB',
                    color: social.color,
                    '&:hover': {
                      bgcolor: social.color,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: { xs: 2, md: 3 }, color: '#1F2937', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
              Let's Connect
            </Typography>
            <Stack spacing={2}>
              {[
                { icon: <Email />, text: 'info@trinoxor.com' },
                { icon: <Phone />, text: '(+267) 78080590' },
                { icon: <LocationOn />, text: 'Serving Businesses Worldwide' },
              ].map((contact, index) => (
                <Box key={index} display="flex" alignItems="center" gap={2}>
                  <Box sx={{ color: '#8B5CF6' }}>
                    {contact.icon}
                  </Box>
                  <Typography variant="body1" color="#6B7280">
                    {contact.text}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: { xs: 4, md: 6 }, pt: { xs: 3, md: 4 }, borderTop: '1px solid #334155' }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="#9CA3AF">
              © {new Date().getFullYear()} Trinoxor. All rights reserved.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
              }}
            >
              Trusted · Reliable · Results-Driven
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}