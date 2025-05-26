import { Box } from '@mui/material';

export default function BackgroundGradient() {
    return (
        <Box
            sx={{
                position: 'fixed',
                width: '200vw',
                height: '200vh',
                top: '-50%',
                left: '-50%',
                background: `linear-gradient(45deg, #0F172A, #334155, #94A3B8)`,
                backgroundSize: '400% 400%',
                animation: 'aurora 15s ease infinite',
                filter: 'blur(100px)',
                opacity: 0.5,
                zIndex: -1,
                transform: 'translate3d(0,0,0)',
                '@keyframes aurora': {
                    '0%': {
                        backgroundPosition: '0% 50%',
                    },
                    '50%': {
                        backgroundPosition: '100% 50%',
                    },
                    '100%': {
                        backgroundPosition: '0% 50%',
                    },
                },
            }}
        />
    );
}
