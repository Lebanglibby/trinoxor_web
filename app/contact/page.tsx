'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, Stack, Alert, Snackbar, Chip, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Email, Phone, LocationOn, Schedule, Send, CheckCircle, ExpandMore, AccessTime, Language, Security, Support } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const contactInfo = [
  {
    icon: <Email sx={{ fontSize: 40 }} />,
    title: 'Email Us',
    details: 'info@trinoxor.com',
    subtitle: 'We respond within 24 hours',
    color: '#8B5CF6',
    action: 'mailto:info@trinoxor.com',
  },
  {
    icon: <Phone sx={{ fontSize: 40 }} />,
    title: 'Call Us',
    details: '(+267) 78080590',
    subtitle: 'Mon-Fri 9AM-6PM CAT',
    color: '#F59E0B',
    action: 'tel:+26778080590',
  },
  {
    icon: <LocationOn sx={{ fontSize: 40 }} />,
    title: 'Visit Us',
    details: 'Serving Worldwide',
    subtitle: 'Remote & On-site Services',
    color: '#10B981',
    action: null,
  },
  {
    icon: <Schedule sx={{ fontSize: 40 }} />,
    title: 'Business Hours',
    details: 'Mon-Fri: 9AM-6PM',
    subtitle: 'Weekend: By Appointment',
    color: '#1E3A8A',
    action: null,
  },
];

const services = [
  { name: 'Web Development', icon: '🌐' },
  { name: 'Mobile Apps', icon: '📱' },
  { name: 'Cloud Hosting', icon: '☁️' },
  { name: 'IT Support', icon: '🔧' },
  { name: 'UI/UX Design', icon: '🎨' },
  { name: 'Consulting', icon: '💡' },
];

const faqs = [
  {
    question: 'How quickly can you start my project?',
    answer: 'We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times.'
  },
  {
    question: 'Do you offer free consultations?',
    answer: 'Yes! We provide free initial consultations to discuss your project requirements and provide recommendations.'
  },
  {
    question: 'What are your payment terms?',
    answer: 'We typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects can be broken into milestone-based payments.'
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Absolutely! We offer comprehensive maintenance packages to keep your systems updated, secure, and running smoothly.'
  }
];

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFaqChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFaq(isExpanded ? panel : false);
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
              Contact Us
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
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', background: 'linear-gradient(180deg, #E5E7EB 0%, #F8FAFC 100%)', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item xs={12} lg={8}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                  <Typography variant="h3" sx={{ mb: 2, color: '#1F2937', fontWeight: 600 }}>
                    Get In Touch
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 6, color: '#6B7280', fontSize: '1.1rem' }}>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </Typography>
                  
                  {/* Service Selection */}
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#1F2937', fontWeight: 600 }}>
                      What service are you interested in?
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: { xs: 1, sm: 1 } }}>
                      {services.map((service) => (
                        <Chip
                          key={service.name}
                          label={`${service.icon} ${service.name}`}
                          variant={formData.service === service.name ? 'filled' : 'outlined'}
                          onClick={() => setFormData({ ...formData, service: service.name })}
                          sx={{
                            mb: 1,
                            cursor: 'pointer',
                            borderColor: '#8B5CF6',
                            color: formData.service === service.name ? 'white' : '#8B5CF6',
                            bgcolor: formData.service === service.name ? '#8B5CF6' : 'transparent',
                            '&:hover': {
                              bgcolor: formData.service === service.name ? '#7C3AED' : 'rgba(139, 92, 246, 0.1)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={{ xs: 3, md: 4 }}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          error={!!errors.name}
                          helperText={errors.name}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          error={!!errors.email}
                          helperText={errors.email}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Project Budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          SelectProps={{
                            native: true,
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        >
                          <option value=""></option>
                          <option value="under-5k">Under $5,000</option>
                          <option value="5k-15k">$5,000 - $15,000</option>
                          <option value="15k-50k">$15,000 - $50,000</option>
                          <option value="50k-plus">$50,000+</option>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          SelectProps={{
                            native: true,
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        >
                          <option value=""></option>
                          <option value="asap">ASAP</option>
                          <option value="1-month">Within 1 month</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="flexible">Flexible</option>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Project Details"
                          name="message"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          error={!!errors.message}
                          helperText={errors.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={isSubmitting ? null : <Send />}
                          disabled={isSubmitting}
                          sx={{
                            px: 6,
                            py: 2,
                            borderRadius: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            '&:hover': {
                              transform: isSubmitting ? 'none' : 'translateY(-2px)',
                            },
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <Stack spacing={{ xs: 3, md: 4 }}>
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    sx={{
                      borderRadius: 3,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      cursor: info.action ? 'pointer' : 'default',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 15px 30px ${info.color}20`,
                      },
                    }}
                    onClick={info.action ? () => window.open(info.action, '_self') : undefined}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                      <Box sx={{ color: info.color, mb: 2 }}>
                        {info.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 1, color: '#1F2937', fontWeight: 500 }}>
                        {info.details}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {info.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 12, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(139, 92, 246, 0.08) 102px)` } }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={8}>
            <Typography variant="h2" color="primary" sx={{ mb: 4 }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Quick answers to common questions about our services
            </Typography>
          </Box>
          
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expandedFaq === `panel${index}`}
              onChange={handleFaqChange(`panel${index}`)}
              sx={{ 
                mb: 2, 
                borderRadius: 2, 
                '&:before': { display: 'none' },
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            >
              <AccordionSummary 
                expandIcon={<ExpandMore />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '16px 0',
                  },
                }}
              >
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

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
          icon={<CheckCircle />}
        >
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>

      <Box sx={{ py: 12, bgcolor: '#F8FAFC', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography variant="h3" color="primary" sx={{ mb: 4 }}>
              Why Work With Us?
            </Typography>
            <Grid container spacing={6}>
              {[
                { 
                  title: 'Fast Response', 
                  desc: 'We respond to all inquiries within 24 hours',
                  icon: <AccessTime sx={{ fontSize: 40, color: '#8B5CF6' }} />
                },
                { 
                  title: 'Global Reach', 
                  desc: 'Serving clients worldwide with remote capabilities',
                  icon: <Language sx={{ fontSize: 40, color: '#10B981' }} />
                },
                { 
                  title: 'Secure Process', 
                  desc: 'Your data and project details are always protected',
                  icon: <Security sx={{ fontSize: 40, color: '#F59E0B' }} />
                },
                { 
                  title: 'Expert Support', 
                  desc: 'Experienced professionals ready to help you succeed',
                  icon: <Support sx={{ fontSize: 40, color: '#1E3A8A' }} />
                },
              ].map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box textAlign="center">
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        bgcolor: 'transparent',
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {benefit.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}