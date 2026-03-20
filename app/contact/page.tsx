'use client';
import HeaderNew from '@/components/layout/HeaderNew';
import Footer from '@/components/layout/Footer';
import { Box, Container, Typography, Grid, Card, CardContent, TextField, Button, Stack, Alert, Snackbar, Chip, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown, Globe, Smartphone, Cloud, Wrench, Palette, Lightbulb, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const contactInfo = [
  {
    icon: <Mail size={40} />,
    title: 'Email Us',
    details: 'trinoxorbw@gmail.com',
    subtitle: 'We respond within 24 hours',
    color: '#8B5CF6',
    action: 'mailto:trinoxorbw@gmail.com',
  },
  {
    icon: <Phone size={40} />,
    title: 'Call Us',
    details: '(+267) 78080590',
    subtitle: 'Mon-Fri 9AM-6PM',
    color: '#F59E0B',
    action: 'tel:+26778080590',
  },
  {
    icon: <MapPin size={40} />,
    title: 'Visit Us',
    details: 'Main Mall, Gaborone',
    subtitle: 'Botswana & Remote Services',
    color: '#10B981',
    action: null,
  },
  {
    icon: <Clock size={40} />,
    title: 'Business Hours',
    details: 'Mon-Fri: 9AM-6PM',
    subtitle: 'Weekend: By Appointment',
    color: '#1E3A8A',
    action: null,
  },
];

const services = [
  { name: 'General Inquiry', icon: <MessageCircle size={16} />, color: '#6B7280' },
  { name: 'Web Development', icon: <Globe size={16} />, color: '#8B5CF6' },
  { name: 'Mobile Apps', icon: <Smartphone size={16} />, color: '#10B981' },
  { name: 'Cloud Hosting', icon: <Cloud size={16} />, color: '#3B82F6' },
  { name: 'IT Support', icon: <Wrench size={16} />, color: '#F59E0B' },
  { name: 'UI/UX Design', icon: <Palette size={16} />, color: '#EF4444' },
  { name: 'Consulting', icon: <Lightbulb size={16} />, color: '#1E3A8A' },
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
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
          display: 'flex',
          alignItems: 'center',
          pt: 12,
          position: 'relative',
          overflow: 'hidden',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography
              variant="overline"
              sx={{
                color: '#F59E0B',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '2px',
                mb: 2,
                display: 'block',
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                mb: 3,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: '#1F2937',
              }}
            >
              Contact{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #F59E0B 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Us
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: '#6B7280',
                fontWeight: 400,
                lineHeight: 1.8,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Ready to transform your business? Let's discuss your project and create something amazing together.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative', background: 'linear-gradient(135deg, #F8FAFC 0%, #E5E7EB 50%, #F3F4F6 100%)', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.12) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.05) 0%, transparent 70%)`, animation: 'float 20s ease-in-out infinite' }, '@keyframes float': { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 4, md: 8 }}>
            <Grid item xs={12} lg={8}>
              <Card
                sx={{
                  borderRadius: 4,
                  border: '1px solid rgba(139, 92, 246, 0.1)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                  background: 'linear-gradient(145deg, #FFFFFF 0%, #FEFEFE 100%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 30px 80px rgba(139, 92, 246, 0.15)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 6 } }}>
                  <Box sx={{ mb: 4, position: 'relative' }}>
                    <Typography 
                      variant="h3" 
                      sx={{ 
                        mb: 2, 
                        background: 'linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 700,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -8,
                          left: 0,
                          width: '60px',
                          height: '4px',
                          background: 'linear-gradient(90deg, #F59E0B, #8B5CF6)',
                          borderRadius: '2px',
                        }
                      }}
                    >
                      Get In Touch
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#6B7280', fontSize: '1.1rem', lineHeight: 1.7 }}>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </Typography>
                  </Box>
                  
                  {/* Service Selection */}
                  <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(139, 92, 246, 0.03)', borderRadius: 3, border: '1px solid rgba(139, 92, 246, 0.1)' }}>
                    <Typography variant="h6" sx={{ mb: 3, color: '#1F2937', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ width: 8, height: 8, bgcolor: '#8B5CF6', borderRadius: '50%' }} />
                      What service are you interested in?
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: { xs: 1, sm: 1 } }}>
                      {services.map((service) => (
                        <Chip
                          key={service.name}
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              {service.icon}
                              {service.name}
                            </Box>
                          }
                          variant={formData.service === service.name ? 'filled' : 'outlined'}
                          onClick={() => setFormData({ ...formData, service: service.name })}
                          sx={{
                            mb: 1,
                            cursor: 'pointer',
                            borderColor: service.color,
                            color: formData.service === service.name ? 'white' : service.color,
                            bgcolor: formData.service === service.name ? service.color : 'transparent',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            px: 2,
                            py: 0.5,
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            '&:hover': {
                              bgcolor: formData.service === service.name ? service.color : `${service.color}20`,
                              transform: 'translateY(-2px)',
                              boxShadow: `0 4px 12px ${service.color}40`,
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
                          label="Company / Business Name"
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
                          <option value="under-2k">Under P2,000</option>
                          <option value="2k-5k">P2,000 – P5,000</option>
                          <option value="5k-15k">P5,000 – P15,000</option>
                          <option value="15k-plus">P15,000+</option>
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
                          label="Project Details / Inquiry"
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
                          endIcon={isSubmitting ? null : <Send size={20} />}
                          disabled={isSubmitting}
                          sx={{
                            px: 8,
                            py: 2.5,
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            background: 'linear-gradient(135deg, #8B5CF6 0%, #1E3A8A 100%)',
                            boxShadow: '0 8px 25px rgba(139, 92, 246, 0.4)',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: '-100%',
                              width: '100%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                              transition: 'left 0.5s',
                            },
                            '&:hover': {
                              transform: isSubmitting ? 'none' : 'translateY(-3px)',
                              boxShadow: '0 15px 40px rgba(139, 92, 246, 0.5)',
                              '&::before': {
                                left: '100%',
                              },
                            },
                            '&:disabled': {
                              background: 'linear-gradient(135deg, #9CA3AF 0%, #6B7280 100%)',
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
                      borderRadius: 4,
                      border: `1px solid ${info.color}20`,
                      background: `linear-gradient(145deg, #FFFFFF 0%, ${info.color}05 100%)`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: info.action ? 'pointer' : 'default',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${info.color}, ${info.color}80)`,
                      },
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: `0 20px 40px ${info.color}25`,
                        border: `1px solid ${info.color}40`,
                      },
                    }}
                    onClick={info.action ? () => window.open(info.action, '_self') : undefined}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                      <Box 
                        sx={{ 
                          color: info.color, 
                          mb: 3,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: 80,
                          height: 80,
                          mx: 'auto',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${info.color}15, ${info.color}25)`,
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#1F2937' }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2, color: '#1F2937', fontWeight: 600, fontSize: '1.1rem' }}>
                        {info.details}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.6 }}>
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
      <Box sx={{ py: 12, background: 'linear-gradient(135deg, #F8FAFC 0%, #EDE9FE 50%, #F8FAFC 100%)', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)` } }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center" mb={8}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#F59E0B', 
                fontWeight: 700, 
                fontSize: '0.9rem', 
                letterSpacing: '2px', 
                mb: 2, 
                display: 'block' 
              }}
            >
              FAQ
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3,
                background: 'linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" sx={{ color: '#6B7280', fontWeight: 400, lineHeight: 1.6 }}>
              Quick answers to common questions about our services
            </Typography>
          </Box>
          
          {faqs.map((faq, index) => (
            <Accordion 
              key={index} 
              expanded={expandedFaq === `panel${index}`}
              onChange={handleFaqChange(`panel${index}`)}
              sx={{ 
                mb: 3, 
                borderRadius: 3,
                border: '1px solid rgba(139, 92, 246, 0.1)',
                background: 'linear-gradient(145deg, #FFFFFF 0%, #FEFEFE 100%)',
                '&:before': { display: 'none' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 30px rgba(139, 92, 246, 0.15)',
                },
                '&.Mui-expanded': {
                  boxShadow: '0 8px 30px rgba(139, 92, 246, 0.2)',
                  border: '1px solid rgba(139, 92, 246, 0.2)',
                },
              }}
            >
              <AccordionSummary 
                expandIcon={<ChevronDown size={24} style={{ color: '#8B5CF6' }} />}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    margin: '20px 0',
                  },
                  '&:hover': {
                    bgcolor: 'rgba(139, 92, 246, 0.05)',
                  },
                  borderRadius: '12px 12px 0 0',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1F2937', fontSize: '1.1rem' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#6B7280', fontSize: '1rem', pl: 2, borderLeft: '3px solid #8B5CF6', bgcolor: 'rgba(139, 92, 246, 0.03)', p: 2, borderRadius: 2 }}>
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
          icon={<CheckCircle size={20} />}
        >
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>

      <Box sx={{ py: 12, background: 'linear-gradient(135deg, #EDE9FE 0%, #F3F4F6 50%, #E5E7EB 100%)', position: 'relative', '&::before': { content: '""', position: 'absolute', inset: 0, backgroundImage: `radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.12) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.12) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(30, 58, 138, 0.08) 0%, transparent 70%)` } }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#F59E0B', 
                fontWeight: 700, 
                fontSize: '0.9rem', 
                letterSpacing: '2px', 
                mb: 2, 
                display: 'block' 
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                mb: 6,
                background: 'linear-gradient(135deg, #1E3A8A 0%, #8B5CF6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
              }}
            >
              Why Work With Us?
            </Typography>
            <Grid container spacing={6}>
              {[
                { 
                  title: 'Fast Response', 
                  desc: 'We respond to all inquiries within 24 hours',
                  icon: <Clock size={40} />,
                  color: '#8B5CF6'
                },
                { 
                  title: 'Global Reach', 
                  desc: 'Serving clients worldwide with remote capabilities',
                  icon: <Globe size={40} />,
                  color: '#10B981'
                },
                { 
                  title: 'Secure Process', 
                  desc: 'Your data and project details are always protected',
                  icon: <CheckCircle size={40} />,
                  color: '#F59E0B'
                },
                { 
                  title: 'Expert Support', 
                  desc: 'Experienced professionals ready to help you succeed',
                  icon: <MessageCircle size={40} />,
                  color: '#1E3A8A'
                },
              ].map((benefit, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box 
                    textAlign="center" 
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 90,
                        height: 90,
                        mx: 'auto',
                        mb: 3,
                        bgcolor: `${benefit.color}10`,
                        color: benefit.color,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {benefit.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#1F2937' }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.7 }}>
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