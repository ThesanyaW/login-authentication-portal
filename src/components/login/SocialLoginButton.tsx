import { IconButton } from '@mui/material';

type SocialLoginButtonProps = {
  label: string;
  icon: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function SocialLoginButton({
  label,
  icon,
  onClick,
  disabled = false,
}: SocialLoginButtonProps) {
  return (
    <IconButton
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      sx={{
        width: 48,
        height: 48,
        bgcolor: '#111111',

        '&:hover': {
          bgcolor: '#2A2A2A',
        },

        '&.Mui-disabled': {
          bgcolor: '#9CA3AF',
        },
      }}
    >
      <img src={icon} alt="" width="20" height="20" />
    </IconButton>
  );
}