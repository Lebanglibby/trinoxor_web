'use client';
import { useState } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, Grid } from '@mui/material';

export default function CalculatorDemo() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateLoan = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    
    if (p && r && n) {
      const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setResult(monthlyPayment);
    }
  };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto' }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" align="center" sx={{ mb: 3, color: '#1E3A8A' }}>
          Loan Calculator Demo
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Loan Amount ($)"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Interest Rate (%)"
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Loan Term (years)"
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              onClick={calculateLoan}
              sx={{ bgcolor: '#F59E0B', '&:hover': { bgcolor: '#D97706' } }}
            >
              Calculate Monthly Payment
            </Button>
          </Grid>
          {result && (
            <Grid item xs={12}>
              <Box sx={{ mt: 2, p: 2, bgcolor: '#F3F4F6', borderRadius: 1 }}>
                <Typography variant="h6" align="center" sx={{ color: '#1E3A8A' }}>
                  Monthly Payment: ${result.toFixed(2)}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}