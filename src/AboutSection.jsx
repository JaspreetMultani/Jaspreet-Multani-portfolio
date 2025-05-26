import { Box, Typography, Grid, Avatar, Container, Paper, Divider, Chip } from '@mui/material';
import ScrollAnimation from './components/ScrollAnimation';
import SchoolIcon from '@mui/icons-material/School';

const education = {
    school: 'University of Western Ontario',
    degree: 'Bachelor of Science',
    major: 'Computer Science',
    period: '2022 - 2027',
    courses: ['Data Structures & Algorithms', 'Software Design', 'Web Development', 'Operating Systems']
};

const skillGroups = [
    {
        title: 'Frontend',
        skills: [
            { icon: '/images/tech-icons/react.png', name: 'React' },
            { icon: '/images/tech-icons/javascript.png', name: 'JavaScript' },
            { icon: '/images/tech-icons/html.png', name: 'HTML' },
            { icon: '/images/tech-icons/css.png', name: 'CSS' },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { icon: '/images/tech-icons/nodejs.png', name: 'Node.js' },
            { icon: '/images/tech-icons/python.png', name: 'Python' },
            { icon: '/images/tech-icons/java.png', name: 'Java' },
        ]
    },
    {
        title: 'Database & Tools',
        skills: [
            { icon: '/images/tech-icons/mongodb.png', name: 'MongoDB' },
            { icon: '/images/tech-icons/git.png', name: 'Git' },
            { icon: '/images/tech-icons/docker.png', name: 'Docker' },
            { icon: '/images/tech-icons/material-ui.png', name: 'Material-UI' },
        ]
    }
];

export default function AboutSection() {
    return (
        <Box
            id="about"
            sx={{
                pt: { xs: 16, md: 20 },
                pb: { xs: 10, md: 14 },
                width: '100%',
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
            }}
        >
            <Container maxWidth="lg">
                <ScrollAnimation direction="down">
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#fff',
                            fontWeight: 700,
                            mb: 6,
                            textAlign: 'center',
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
                        About Me
                    </Typography>
                </ScrollAnimation>

                <Grid container spacing={4} alignItems="flex-start" justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <ScrollAnimation direction="up">
                            <Paper
                                elevation={0}
                                sx={{
                                    background: 'rgba(0, 0, 0, 0.2)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(143, 151, 121, 0.2)',
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                }}
                            >
                                <Grid container>
                                    <Grid container item xs={12}>
                                        {/* Image Section */}
                                        <Grid item xs={12} md={3}>
                                            <Box
                                                sx={{
                                                    p: 3,
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src="/images/profile-pic.jpeg"
                                                    alt="Jaspreet Multani"
                                                    sx={{
                                                        width: '200px',
                                                        height: '200px',
                                                        objectFit: 'cover',
                                                        borderRadius: 2,
                                                        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.2)',
                                                    }}
                                                />
                                            </Box>
                                        </Grid>

                                        {/* Introduction Section */}
                                        <Grid item xs={12} md={9}>
                                            <Box sx={{ p: 3 }}>
                                                <Typography
                                                    variant="body1"
                                                    sx={{
                                                        color: '#ccc',
                                                        fontSize: '1.1rem',
                                                        lineHeight: 1.7,
                                                        mb: 2,
                                                    }}
                                                >
                                                    I'm Jaspreet, a Computer Science student and full-stack developer. I enjoy building
                                                    sleek web apps, solving challenging problems, and creating clean, elegant user
                                                    experiences. I'm currently focused on building modern, responsive React applications
                                                    and preparing for technical interviews. I love combining creativity with functionality —
                                                    whether that's through games, tools, or portfolio projects.
                                                </Typography>
                                            </Box>
                                        </Grid>

                                        {/* Education and Courses Section */}
                                        <Grid item xs={12}>
                                            <Box sx={{ px: 4, pb: 4 }}>
                                                {/* Education Section */}
                                                <Box sx={{ mb: 4 }}>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            fontSize: '1.1rem',
                                                            mb: 2,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 1,
                                                        }}
                                                    >
                                                        <SchoolIcon sx={{ fontSize: '1.2rem' }} />
                                                        Education
                                                    </Typography>

                                                    <Box sx={{ pl: 3, borderLeft: '2px solid rgba(148, 163, 184, 0.2)' }}>
                                                        <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', mb: 1 }}>
                                                            {education.school}
                                                        </Typography>
                                                        <Typography variant="subtitle1" sx={{ color: '#94A3B8', fontSize: '0.9rem', mb: 1 }}>
                                                            {education.degree} in {education.major}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: '#bbb', mb: 2 }}>
                                                            {education.period}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                                {/* Courses Section */}
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#94A3B8',
                                                            fontSize: '1.1rem',
                                                            mb: 2,
                                                        }}
                                                    >
                                                        Key Courses
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                                        {education.courses.map((course, i) => (
                                                            <Chip
                                                                key={i}
                                                                label={course}
                                                                size="small"
                                                                sx={{
                                                                    backgroundColor: 'rgba(15, 23, 42, 0.3)',
                                                                    color: '#94A3B8',
                                                                    fontSize: '0.8rem',
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(15, 23, 42, 0.4)',
                                                                    },
                                                                }}
                                                            />
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </ScrollAnimation>
                    </Grid>
                </Grid>

                {/* Skills Section */}
                <Box sx={{ mt: 8 }}>
                    <ScrollAnimation direction="up">
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#fff',
                                mb: 6,
                                textAlign: 'center',
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -12,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '40px',
                                    height: '2px',
                                    background: 'linear-gradient(90deg, #0F172A, #334155, #94A3B8)',
                                },
                            }}
                        >
                            Technologies & Tools
                        </Typography>
                    </ScrollAnimation>

                    <Grid container spacing={6}>
                        {skillGroups.map((group, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <ScrollAnimation direction="up" delay={index * 0.2}>
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(143, 151, 121, 0.2)',
                                            borderRadius: 2,
                                            height: '100%',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)',
                                                boxShadow: '0 8px 24px rgba(0, 103, 75, 0.2)',
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#94A3B8',
                                                mb: 3,
                                                textAlign: 'center',
                                                fontSize: '1.2rem',
                                                position: 'relative',
                                                '&:after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    bottom: -8,
                                                    left: '50%',
                                                    transform: 'translateX(-50%)',
                                                    width: '30px',
                                                    height: '2px',
                                                    background: 'rgba(143, 151, 121, 0.3)',
                                                },
                                            }}
                                        >
                                            {group.title}
                                        </Typography>
                                        <Grid container spacing={3} justifyContent="center">
                                            {group.skills.map((skill, i) => (
                                                <Grid item key={i} xs={6} sm={6} md={6}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center',
                                                            gap: 2,
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'translateY(-3px)',
                                                                '& img': {
                                                                    transform: 'scale(1.1)',
                                                                },
                                                                '& .skill-name': {
                                                                    color: '#fff',
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            sx={{
                                                                width: 48,
                                                                height: 48,
                                                                transition: 'transform 0.3s ease',
                                                                filter: 'brightness(0.9)',
                                                                '&:hover': {
                                                                    filter: 'brightness(1)',
                                                                },
                                                            }}
                                                        />
                                                        <Typography
                                                            variant="body2"
                                                            className="skill-name"
                                                            sx={{
                                                                color: '#94A3B8',
                                                                textAlign: 'center',
                                                                transition: 'color 0.3s ease',
                                                                fontSize: '0.9rem',
                                                            }}
                                                        >
                                                            {skill.name}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Paper>
                                </ScrollAnimation>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
