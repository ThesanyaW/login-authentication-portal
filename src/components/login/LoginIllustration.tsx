import { Box, Paper, Stack, Typography, type SxProps, type Theme } from '@mui/material';
import characterImage from '../../assets/login/main-character-illustration.png';
import avatarOne from '../../assets/login/avatar-1.png';
import avatarTwo from '../../assets/login/avatar-2.png';
import progressDonut from '../../assets/login/progress-donut.png';

type AvatarProps = {
  image: string;
  sx: SxProps<Theme>;
};

function Avatar({ image, sx }: AvatarProps) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 56,
        height: 56,
        p: '2px',
        border: '2px solid #3CB371',
        borderRadius: '50%',
        bgcolor: '#FFFFFF',
        zIndex: 2,
        ...sx,
      }}
    >
      <Box
        component="img"
        src={image}
        alt=""
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
}

export function LoginIllustration() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 580,
        height: 380,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
  sx={{
    position: 'absolute',
    top: 58,
    width: 340,
    height: 210,
    borderRadius: '50%',
    bgcolor: 'rgba(255, 255, 255, 0.58)',
    filter: 'blur(18px)',
  }}
/>

      <Box
        component="img"
        src={characterImage}
        alt="Person organizing tasks"
        sx={{
          width: 300,
          height: 300,
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      <Avatar image={avatarOne} sx={{ top: 16, left: 32 }} />
      <Avatar image={avatarTwo} sx={{ top: 160, right: 32 }} />

      <Paper
        elevation={0}
        sx={{
          position: 'absolute',
          left: 16,
          bottom: 16,
          width: 210,
          p: 2,
          border: '1px solid #000000',
          borderRadius: 2,
          boxShadow: '0 8px 12px rgba(0, 0, 0, 0.06)',
          zIndex: 2,
        }}
      >
        <Stack spacing={1.5}>
          <Stack spacing={0.5}>
            <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
              Canva Design
            </Typography>
            <Typography color="text.secondary" sx={{ fontSize: 12, fontWeight: 500 }}>
              10 Task
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                px: 1.5,
                py: 0.75,
                border: '1px solid #3CB371',
                borderRadius: 3,
                bgcolor: '#F1F8F4',
                color: '#3CB371',
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              Design
            </Box>

            <Box sx={{ width: 36, height: 36, position: 'relative' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background:
                        'conic-gradient(#3CB371 0deg 302deg, #DDF0E4 302deg 360deg)',
                    }}
                />

<Box
  sx={{
    position: 'absolute',
    inset: 4,
    borderRadius: '50%',
    bgcolor: '#FFFFFF',
  }}
/>
              <Box
                component="img"
                src={progressDonut}
                alt=""
                sx={{ position: 'absolute', inset: 0 }}
              />
              <Typography
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 9,
                  fontWeight: 800,
                }}
              >
                84%
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}