import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { LoginField } from '../components/login/LoginField';
import { LoginIllustration } from '../components/login/LoginIllustration';
import { SocialLoginButton } from '../components/login/SocialLoginButton';
import { auth, googleProvider } from '../config/firebase';
import appleIcon from '../assets/login/apple.svg';
import facebookIcon from '../assets/login/facebook.svg';
import googleIcon from '../assets/login/google.svg';
import paginationRow from '../assets/login/pagination-row.png';

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LoginPage() {
  const navigate = useNavigate();

  const [values, setValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [googleError, setGoogleError] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleChange = (
    field: keyof LoginFormValues,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
  };

  const validateForm = () => {
    const nextErrors: LoginFormErrors = {};

    if (!values.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!values.password) {
      nextErrors.password = 'Password is required.';
    } else if (values.password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Email/password backend authentication will be added later.
    console.info('Login form is valid.');
  };

  const handleGoogleLogin = async () => {
    setGoogleError('');
    setIsGoogleLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;

      if (!accessToken) {
        setGoogleError(
          'Google sign-in succeeded, but no access token was returned.',
        );
        return;
      }

      navigate('/access-token', {
        replace: true,
        state: { accessToken },
      });
    } catch {
      setGoogleError('Unable to sign in with Google. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

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
          noValidate
          onSubmit={handleSubmit}
          spacing={4}
          sx={{
            width: '100%',
            maxWidth: 540,
            px: { xs: 0, sm: 4, lg: 8 },
            py: { xs: 2, md: 3, lg: 4 },
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
              sx={{ fontSize: 16, lineHeight: 1.5 }}
            >
              Simplify your workflow and boost your productivity with{' '}
              <Box component="span" color="text.primary" sx={{ fontWeight: 700 }}>
                Tuga&apos;s App
              </Box>
              . Get started for free.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <LoginField
              name="email"
              placeholder="Email address"
              type="email"
              autoComplete="email"
              value={values.email}
              error={Boolean(errors.email)}
              helperText={errors.email}
              onChange={(event) => handleChange('email', event)}
            />

            <LoginField
              name="password"
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={values.password}
              error={Boolean(errors.password)}
              helperText={errors.password}
              onChange={(event) => handleChange('password', event)}
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
              type="submit"
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
                '&:hover': { bgcolor: '#2A2A2A' },
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
              <SocialLoginButton
                label="Continue with Google"
                icon={googleIcon}
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading}
              />
              <SocialLoginButton
                label="Continue with Apple"
                icon={appleIcon}
                disabled={isGoogleLoading}
              />
              <SocialLoginButton
                label="Continue with Facebook"
                icon={facebookIcon}
                disabled={isGoogleLoading}
              />
            </Stack>

            {googleError && (
              <Typography color="error" sx={{ fontSize: 14, textAlign: 'center' }}>
                {googleError}
              </Typography>
            )}
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
            <Box
              component="span"
              sx={{ color: 'success.main', fontWeight: 700 }}
            >
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
            minHeight: '100%',
            px: 6,
            py: 4,
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