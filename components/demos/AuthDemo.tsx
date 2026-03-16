'use client';
import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Alert, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';

export default function AuthDemo() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(`Demo: ${isLogin ? 'Login' : 'Signup'} attempted with ${email}`);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 450, 
        mx: 'auto',
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 5 }}>
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            mb: 4, 
            background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
          }}
        >
          {isLogin ? 'Welcome Back' : 'Join Trinoxor'}
        </Typography>
        
        {message && (
          <Alert 
            severity="success" 
            sx={{ 
              mb: 3,
              bgcolor: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              color: '#8B5CF6',
            }}
          >
            {message}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(15, 23, 42, 0.5)',
                  '& fieldset': {
                    borderColor: 'rgba(148, 163, 184, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8B5CF6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8B5CF6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#94A3B8',
                  '&.Mui-focused': {
                    color: '#8B5CF6',
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: '#94A3B8' }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: 'rgba(15, 23, 42, 0.5)',
                  '& fieldset': {
                    borderColor: 'rgba(148, 163, 184, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: '#8B5CF6',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#8B5CF6',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: '#94A3B8',
                  '&.Mui-focused': {
                    color: '#8B5CF6',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                py: 1.5,
                background: 'linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)',
                borderRadius: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': { 
                  background: 'linear-gradient(135deg, #7C3AED 0%, #D97706 100%)',
                  transform: 'translateY(-1px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </Button>
            <Button
              fullWidth
              variant="text"
              onClick={() => setIsLogin(!isLogin)}
              sx={{ 
                color: '#8B5CF6',
                '&:hover': {
                  bgcolor: 'rgba(139, 92, 246, 0.1)',
                },
              }}
            >
              {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}