import { Box, Typography, Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

export default function HeroSection() {
    return (
        <Box
            id="hero"
            sx={{
                height: '75vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: 2,
                pt: 8,
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
            }}
        >
            <Typography variant="h3" gutterBottom sx={{ color: '#fff' }}>
                Hi, I'm Jaspreet
            </Typography>

            <Typography variant="h5" sx={{ color: '#fff', height: '40px' }}>
                <Typewriter
                    words={[
                        'CS Student',
                        'Full-Stack Developer',
                        'Problem Solver',
                        'Leetcoder',
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={3000}
                />
            </Typography>

            <Button
                variant="contained"
                href="#projects"
                sx={{
                    mt: 4,
                    background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                    backgroundSize: '300% 100%',
                    transition: 'all 0.3s ease',
                    padding: '10px 24px',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': {
                        transform: 'scale(1.05)',
                        backgroundPosition: '100% 0',
                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.3)',
                    },
                }}
            >
                View My Projects
            </Button>
        </Box>
    );
}
