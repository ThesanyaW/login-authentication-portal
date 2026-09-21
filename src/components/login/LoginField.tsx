import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from '@mui/material';
import closedEyeIcon from '../../assets/login/closed-eye.svg';
import openEyeIcon from '../../assets/login/open-eye.svg';

type LoginFieldProps = TextFieldProps & {
  hasPasswordToggle?: boolean;
  passwordVisible?: boolean;
  onTogglePassword?: () => void;
};

export function LoginField({
  hasPasswordToggle = false,
  passwordVisible = false,
  onTogglePassword,
  ...props
}: LoginFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      {...props}
      slotProps={{
        input: {
          endAdornment: hasPasswordToggle ? (
            <InputAdornment position="end">
              <IconButton
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                edge="end"
                onClick={onTogglePassword}
              >
                <img
                  src={passwordVisible ? openEyeIcon : closedEyeIcon}
                  alt=""
                  width="20"
                  height="20"
                />
              </IconButton>
            </InputAdornment>
          ) : undefined,
        },
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          height: 56,
          borderRadius: '28px',
          px: 3,
          fontSize: 15,

          '& fieldset': {
            borderColor: '#D1D5DB',
          },

          '&:hover fieldset': {
            borderColor: '#9CA3AF',
          },

          '&.Mui-focused fieldset': {
            borderColor: '#3CB371',
            borderWidth: 1,
          },
        },
        ...props.sx,
      }}
    />
  );
}