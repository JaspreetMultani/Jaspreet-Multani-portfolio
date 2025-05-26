import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    IconButton,
    Snackbar,
    Alert,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ScrollAnimation from './components/ScrollAnimation';

export default function ContactSection() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                'service_tee3xf8',
                'template_ygm43ti',
                form.current,
                '64mILL42Oc1HS4Bc0'
            );

            setSnackbar({
                open: true,
                message: 'Message sent successfully! I will get back to you soon.',
                severity: 'success',
            });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to send message. Please try again later.',
                severity: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    return (
        <Box
            id="contact"
            sx={{
                py: 5,
                background: 'transparent',
                position: 'relative',
                zIndex: 1,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(10px)',
                    zIndex: -1,
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <ScrollAnimation direction="down" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#FFFFFF',
                            textAlign: 'center',
                            mb: 6,
                            position: 'relative',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -8,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60px',
                                height: '2px',
                                background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                            },
                        }}
                    >
                        Get In Touch
                    </Typography>
                </ScrollAnimation>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                    }}
                >
                    {/* Social Links */}
                    <ScrollAnimation direction="up" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                justifyContent: 'center',
                                mb: 2,
                            }}
                        >
                            <IconButton
                                href="https://github.com/JaspreetMultani"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: '#94A3B8',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#334155',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                                href="https://www.linkedin.com/in/jmultani"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: '#94A3B8',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#334155',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                                href="mailto:multj0574@gmail.com"
                                sx={{
                                    color: '#94A3B8',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: '#334155',
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                <EmailIcon fontSize="large" />
                            </IconButton>
                        </Box>
                    </ScrollAnimation>

                    <ScrollAnimation direction="up" delay={0.2} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            sx={{
                                color: '#94A3B8',
                                textAlign: 'center',
                                maxWidth: '600px',
                                mb: 4,
                            }}
                        >
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
                        </Typography>
                    </ScrollAnimation>

                    {/* Contact Form */}
                    <ScrollAnimation direction="up" delay={0.3} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Box
                            component="form"
                            ref={form}
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3,
                                width: '100%',
                                maxWidth: '600px',
                                background: 'rgba(0, 0, 0, 0.2)',
                                backdropFilter: 'blur(10px)',
                                padding: { xs: 3, sm: 4 },
                                borderRadius: 2,
                                border: '1px solid rgba(148, 163, 184, 0.2)',
                            }}
                        >
                            <TextField
                                name="name"
                                label="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: '#FFFFFF',
                                        '& fieldset': {
                                            borderColor: '#94A3B8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#334155',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#0F172A',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#94A3B8',
                                    },
                                }}
                            />
                            <TextField
                                name="email"
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: '#FFFFFF',
                                        '& fieldset': {
                                            borderColor: '#94A3B8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#334155',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#0F172A',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#94A3B8',
                                    },
                                }}
                            />
                            <TextField
                                name="message"
                                label="Message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                fullWidth
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: '#FFFFFF',
                                        '& fieldset': {
                                            borderColor: '#94A3B8',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#334155',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#0F172A',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#94A3B8',
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    background: 'linear-gradient(90deg, #0F172A, #334155)',
                                    backgroundSize: '200% 100%',
                                    transition: 'all 0.3s ease',
                                    padding: '12px',
                                    textTransform: 'none',
                                    fontSize: '1.1rem',
                                    color: '#FFFFFF',
                                    '&:hover': {
                                        backgroundPosition: '100% 0',
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.3)',
                                    },
                                    '&:disabled': {
                                        background: 'rgba(148, 163, 184, 0.3)',
                                    },
                                }}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </ScrollAnimation>
                </Box>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{
                        width: '100%',
                        background: snackbar.severity === 'success' ? '#334155' : '#d32f2f',
                        color: '#FFFFFF',
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
} 