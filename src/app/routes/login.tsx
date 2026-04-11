import { paths } from '@/config/paths';
import { useLogin } from '@/features/users/api/login';
import { Button, FlexBox, Input, Title } from '@ui5/webcomponents-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginRoute() {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutate(
      { email, password },
      {
        onSuccess: () => navigate(paths.app.home.getHref()),
      },
    );
  };

  return (
    <FlexBox
      direction="Column"
      justifyContent="Center"
      alignItems="Center"
      style={{ minHeight: '100vh', padding: '1rem' }}
    >
      <FlexBox
        direction="Column"
        style={{
          width: '100%',
          maxWidth: '400px',
          gap: '1rem',
        }}
      >
        <Title level="H1" size="H2" style={{ textAlign: 'center' }}>
          Login
        </Title>

        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%' }}
        />

        <Input
          type="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%' }}
        />

        <Button design="Emphasized" disabled={isPending} onClick={handleSubmit}>
          Login
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
