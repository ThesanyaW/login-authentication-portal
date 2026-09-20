import { IconButton } from '@mui/material';

type SocialLoginButtonProps = {
  label: string;
  icon: string;
};

export function SocialLoginButton({
  label,
  icon,
}: SocialLoginButtonProps) {
  return (
    <IconButton
      aria-label={label}
      sx={{
        width: 48,
        height: 48,
        bgcolor: '#111111',

        '&:hover': {
          bgcolor: '#2A2A2A',
        },
      }}
    >
      <img src={icon} alt="" width="20" height="20" />
    </IconButton>
  );
}