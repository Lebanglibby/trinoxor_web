'use client';
import { Box } from '@mui/material';

export default function FloatingElements() {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 60,
          height: 60,
          background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: 40,
          height: 40,
          background: 'linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 100%)',
          borderRadius: 2,
          opacity: 0.1,
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          right: '20%',
          width: 80,
          height: 80,
          border: '2px solid #F59E0B',
          borderRadius: '50%',
          opacity: 0.1,
          animation: 'float 10s ease-in-out infinite',
        }}
      />
    </>
  );
}