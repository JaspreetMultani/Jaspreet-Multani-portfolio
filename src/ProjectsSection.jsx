import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    IconButton,
    CardMedia,
    Chip,
    Stack,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useRef } from 'react';
import ScrollAnimation from './components/ScrollAnimation';

const ProjectPlaceholder = ({ type = 'terminal', title }) => {
    return (
        <Box
            sx={{
                height: 200,
                width: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                borderBottom: '1px solid rgba(143, 151, 121, 0.2)',
                p: 2,
            }}
        >
            {type === 'terminal' && (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: '#ff5f56',
                            }}
                        />
                        <Box
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: '#ffbd2e',
                            }}
                        />
                        <Box
                            sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                backgroundColor: '#27c93f',
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            color: '#94A3B8',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            mb: 1,
                        }}
                    >
                        $ run wonderland.java
                    </Typography>
                    <Typography
                        sx={{
                            color: '#334155',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            mb: 1,
                        }}
                    >
                        Welcome to Wonderland...
                    </Typography>
                    <Typography
                        sx={{
                            color: '#fff',
                            fontFamily: 'monospace',
                            fontSize: '0.9rem',
                            animation: 'blink 1s step-end infinite',
                            '@keyframes blink': {
                                '0%, 100%': { opacity: 1 },
                                '50%': { opacity: 0 },
                            },
                        }}
                    >
                        _
                    </Typography>
                </>
            )}
            {type === 'default' && (
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#94A3B8',
                            textAlign: 'center',
                            px: 2,
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

const projects = [
    {
        title: 'Typing Racer',
        description: 'A multiplayer typing speed game built with React and Material UI.',
        link: 'https://github.com/JaspreetMultani/NeonTypeRacer',
        demoLink: 'https://neon-type-racer.vercel.app/',
        image: 'https://github.com/JaspreetMultani/NeonTypeRacer/blob/main/Screenshots_neontype/HomeScreen.png?raw=true',
        techStack: ['React', 'Material-UI', 'Firebase', 'Node.js'],
        status: 'Completed'
    },
    {
        title: 'Wonderland Text Game',
        description: 'A Java-based interactive fiction game inspired by Alice in Wonderland.',
        link: 'https://github.com/JaspreetMultani/Wonderland_Game',
        type: 'terminal',
        techStack: ['Java', 'OOP', 'File I/O'],
        status: 'Completed'
    },
    {
        title: 'Tic Tac Toe',
        description: 'A classic game with a 2v2 mode built with React and basic CSS. Working on AI implementation.',
        link: 'https://github.com/JaspreetMultani/TicTacToe',
        image: 'https://github.com/JaspreetMultani/TicTacToe/raw/main/tictactoe.png?raw=true',
        techStack: ['React', 'CSS', 'JavaScript'],
        status: 'In Progress'
    },
];

export default function ProjectsSection() {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Box
            id="projects"
            sx={{
                py: 10,
                px: { xs: 2, md: 4 },
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
            <ScrollAnimation direction="down">
                <Typography variant="h4" sx={{ color: '#fff', mb: 4, textAlign: 'center' }}>
                    Projects
                </Typography>
            </ScrollAnimation>

            <IconButton
                onClick={() => handleScroll('left')}
                sx={{
                    position: 'absolute',
                    left: { xs: '5px', md: '20px' },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 103, 75, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    zIndex: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 103, 75, 0.4)',
                    },
                }}
            >
                <KeyboardArrowLeftIcon />
            </IconButton>

            <IconButton
                onClick={() => handleScroll('right')}
                sx={{
                    position: 'absolute',
                    right: { xs: '5px', md: '20px' },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 103, 75, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    zIndex: 2,
                    '&:hover': {
                        backgroundColor: 'rgba(0, 103, 75, 0.4)',
                    },
                }}
            >
                <KeyboardArrowRightIcon />
            </IconButton>

            {/* Scrollable Container */}
            <Box
                ref={scrollContainerRef}
                sx={{
                    display: 'flex',
                    gap: 3,
                    overflowX: 'auto',
                    px: 2,
                    py: 4,
                    scrollbarWidth: 'none', // Firefox
                    '&::-webkit-scrollbar': {
                        display: 'none', // Chrome, Safari, Edge
                    },
                    '-ms-overflow-style': 'none', // IE
                    scrollSnapType: 'x mandatory',
                }}
            >
                {projects.map((project, index) => (
                    <ScrollAnimation key={index} direction="up" delay={index * 0.2}>
                        <Card
                            sx={{
                                minWidth: '350px',
                                maxWidth: '350px',
                                height: '450px',
                                display: 'flex',
                                flexDirection: 'column',
                                background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                                backdropFilter: 'blur(10px)',
                                color: '#fff',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(143, 151, 121, 0.2)',
                                position: 'relative',
                                overflow: 'hidden',
                                scrollSnapAlign: 'center',
                                flexShrink: 0,
                                '&:before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                                    backgroundSize: '300% 100%',
                                    animation: 'aurora 15s ease infinite',
                                },
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    boxShadow: '0 8px 24px rgba(0, 103, 75, 0.2)',
                                    '&:before': {
                                        animation: 'aurora 3s ease infinite',
                                    },
                                },
                            }}
                        >
                            {project.image ? (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        objectFit: 'cover',
                                        borderBottom: '1px solid rgba(143, 151, 121, 0.2)',
                                    }}
                                />
                            ) : (
                                <ProjectPlaceholder type={project.type || 'default'} title={project.title} />
                            )}
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {project.title}
                                    </Typography>
                                    <Chip
                                        label={project.status}
                                        size="small"
                                        sx={{
                                            backgroundColor: 'rgba(15, 23, 42, 0.3)',
                                            color: '#94A3B8',
                                            fontSize: '0.7rem',
                                        }}
                                    />
                                </Box>
                                <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>
                                    {project.description}
                                </Typography>
                                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                    {project.techStack.map((tech, i) => (
                                        <Chip
                                            key={i}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(15, 23, 42, 0.3)',
                                                color: '#94A3B8',
                                                fontSize: '0.7rem',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(15, 23, 42, 0.4)',
                                                },
                                            }}
                                        />
                                    ))}
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                                <Button
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="small"
                                    startIcon={<GitHubIcon />}
                                    sx={{
                                        background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                                        backgroundSize: '200% 100%',
                                        color: '#fff',
                                        transition: 'all 0.3s ease',
                                        padding: '6px 12px',
                                        '&:hover': {
                                            backgroundPosition: '100% 0',
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 4px 12px rgba(0, 103, 75, 0.3)',
                                        },
                                    }}
                                >
                                    View Code
                                </Button>
                                {project.demoLink && (
                                    <Button
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="small"
                                        endIcon={<LaunchIcon />}
                                        sx={{
                                            background: 'rgba(148, 163, 184, 0.1)',
                                            color: '#94A3B8',
                                            transition: 'all 0.3s ease',
                                            padding: '6px 12px',
                                            '&:hover': {
                                                background: 'rgba(148, 163, 184, 0.2)',
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                    >
                                        Live Demo
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </ScrollAnimation>
                ))}
            </Box>
        </Box>
    );
}
