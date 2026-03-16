'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home, ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <HeaderNew />
      
      <Box
        sx={{
          minHeight: '80vh',
          background: `linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)`,
          display: 'flex',
          alignItems: 'center',
          pt: 12,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '6rem', md: '10rem' },
                background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                mb: 2,
              }}
            >
              404
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                color: '#1F2937',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Page Not Found
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#6B7280',
                mb: 6,
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.7,
              }}
            >
              Sorry, we couldn't find the page you're looking for. 
              The page might have been moved, deleted, or you entered the wrong URL.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" passHref>
                <Button
                  variant="contained"
                  startIcon={<Home />}
                  sx={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                    px: 4,
                    py: 2,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(139, 92, 246, 0.35)',
                    },
                  }}
                >
                  Go Home
                </Button>
              </Link>
              
              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={() => window.history.back()}
                sx={{
                  borderColor: '#8B5CF6',
                  color: '#8B5CF6',
                  px: 4,
                  py: 2,
                  borderRadius: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: 'rgba(139, 92, 246, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </>
  );
}