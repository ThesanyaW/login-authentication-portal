import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

type AccessTokenLocationState = {
  accessToken?: string;
};

export function AccessTokenPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { accessToken } = (location.state ?? {}) as AccessTokenLocationState;

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        py: 4,
      }}
    >
      <Paper sx={{ width: '100%', p: { xs: 3, sm: 5 }, borderRadius: 4 }}>
        <Stack spacing={3}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: 700 }}
          >
            Google sign-in successful
          </Typography>

          {accessToken ? (
            <>
              <Typography color="text.secondary">
                Google OAuth access token:
              </Typography>

              <Typography
                component="code"
                sx={{
                  display: 'block',
                  p: 2,
                  borderRadius: 2,
                  bgcolor: '#F3F4F6',
                  overflowWrap: 'anywhere',
                  fontFamily: 'monospace',
                  fontSize: 14,
                }}
              >
                {accessToken}
              </Typography>
            </>
          ) : (
            <Typography color="error">
              No access token was found. Sign in with Google again.
            </Typography>
          )}

          <Button
            variant="contained"
            onClick={() => navigate('/', { replace: true })}
            sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
          >
            Back to login
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}