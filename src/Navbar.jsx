import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(15, 23, 42, 0.7)',
                backdropFilter: 'blur(10px)',
                px: 4,
                pt: 1,
                zIndex: 1000,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side: logo and nav links */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>
                        Jaspreet Multani
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            href="#about"
                            sx={{
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            About
                        </Button>
                        <Button
                            href="#projects"
                            sx={{
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            Projects
                        </Button>
                        <Button
                            href="#contact"
                            sx={{
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                }
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                </Box>

                {/* Right side: social icons */}
                <Box>
                    <IconButton
                        href="https://github.com/JaspreetMultani"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>

                    <IconButton
                        href="https://www.linkedin.com/in/jmultani"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }
                        }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
