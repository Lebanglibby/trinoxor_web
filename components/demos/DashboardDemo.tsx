'use client';
import { Box, Card, CardContent, Typography, Grid, LinearProgress } from '@mui/material';
import { TrendingUp, People, AttachMoney, Computer } from '@mui/icons-material';

const stats = [
  { icon: <TrendingUp />, title: 'Revenue Growth', value: '24%', color: '#10B981' },
  { icon: <People />, title: 'Active Users', value: '1,234', color: '#8B5CF6' },
  { icon: <AttachMoney />, title: 'Total Sales', value: '$45,678', color: '#F59E0B' },
  { icon: <Computer />, title: 'Projects', value: '89', color: '#1E3A8A' },
];

export default function DashboardDemo() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ mb: 3, color: '#1E3A8A' }}>
        Dashboard Demo
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ bgcolor: stat.color, color: 'white' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box sx={{ fontSize: 40, mb: 1 }}>
                  {stat.icon}
                </Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#1E3A8A' }}>
                Performance Metrics
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Website Performance: 92%
                </Typography>
                <LinearProgress variant="determinate" value={92} sx={{ height: 8 }} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Security Score: 98%
                </Typography>
                <LinearProgress variant="determinate" value={98} sx={{ height: 8 }} />
              </Box>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  User Satisfaction: 96%
                </Typography>
                <LinearProgress variant="determinate" value={96} sx={{ height: 8 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}