import { Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

interface AuthProps {
  submitLabel: string;
  onSubmit: (credential: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
}

function Auth({ submitLabel, onSubmit, children }: AuthProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Stack
      spacing={3}
      sx={{
        height: '100vh',
        maxWidth: {
          xs: '100%',
          md: '30%',
        },
        marginInline: 'auto',
        justifyContent: 'center',
      }}
    >
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button variant="contained" onClick={() => onSubmit({ email, password })}>
        {submitLabel}
      </Button>

      {children}
    </Stack>
  );
}

export default Auth;
