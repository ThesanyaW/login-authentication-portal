import { useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { LoginField } from '../components/login/LoginField';
import { LoginIllustration } from '../components/login/LoginIllustration';
import { SocialLoginButton } from '../components/login/SocialLoginButton';
import appleIcon from '../assets/login/apple.svg';
import facebookIcon from '../assets/login/facebook.svg';
import xIcon from '../assets/login/circle-x.svg';
import paginationRow from '../assets/login/pagination-row.png';

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        gap: 4,
        p: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          component="form"
          spacing={4}
          sx={{
            width: '100%',
            maxWidth: 540,
            px: { xs: 0, sm: 4, lg: 8 },
            py: { xs: 3, md: 6 },
          }}
        >
          <Stack spacing={2} sx={{ textAlign: 'center' }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: 32, sm: 40 },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.04em',
              }}
            >
              Welcome back!
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: 16,
                lineHeight: 1.5,
              }}
            >
              Simplify your workflow and boost your productivity with{' '}
              <Box
                component="span"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Tuga&apos;s App
              </Box>
              . Get started for free.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <LoginField placeholder="Username" />

            <LoginField
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              hasPasswordToggle
              passwordVisible={showPassword}
              onTogglePassword={() => setShowPassword((visible) => !visible)}
            />

            <Box sx={{ textAlign: 'right' }}>
              <Button
                color="inherit"
                sx={{
                  minWidth: 0,
                  p: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Forgot Password?
              </Button>
            </Box>
          </Stack>

          <Stack spacing={3} sx={{ alignItems: 'center' }}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                height: 56,
                borderRadius: '28px',
                fontSize: 16,
                fontWeight: 700,
                textTransform: 'none',
                bgcolor: '#111111',

                '&:hover': {
                  bgcolor: '#2A2A2A',
                },
              }}
            >
              Login
            </Button>

            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: 'center', width: '100%' }}
            >
              <Divider sx={{ flex: 1 }} />
              <Typography
                color="text.secondary"
                sx={{ fontSize: 14, fontWeight: 500 }}
              >
                or continue with
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Stack>

            <Stack direction="row" spacing={2}>
              <SocialLoginButton label="Continue with X" icon={xIcon} />
              <SocialLoginButton label="Continue with Apple" icon={appleIcon} />
              <SocialLoginButton label="Continue with Facebook" icon={facebookIcon} />
            </Stack>
          </Stack>

          <Typography
            component="p"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Not a member?{' '}
            <Box component="span" color="success.main" sx={{ fontWeight: 700 }}>
              Register now
            </Box>
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' } }}>
        <Paper
          elevation={0}
          sx={{
            width: '100%',
            minHeight: 836,
            px: 6,
            pt: 8,
            pb: 6,
            borderRadius: 8,
            bgcolor: '#F1F8F4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6,
            overflow: 'hidden',
          }}
        >
          <LoginIllustration />

          <Box component="img" src={paginationRow} alt="Slide one of three" />

          <Typography
            component="p"
            sx={{
              maxWidth: 500,
              textAlign: 'center',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            Make your work easier and organized with{' '}
              <Box component="span" sx={{ fontWeight: 800 }}>
              Tuga&apos;s App
            </Box>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}