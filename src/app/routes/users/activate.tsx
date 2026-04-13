import { paths } from '@/config/paths';
import { activateEmail } from '@/features/users/api/activate-email';
import { BusyIndicator, Button, FlexBox, Text } from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function ActiveUserRoute() {
  const navigate = useNavigate();
  const { uuid, token } = useParams();

  const [status, setStatus] = useState<'pending' | 'success' | 'error'>(
    uuid && token ? 'pending' : 'error',
  );

  useEffect(() => {
    if (!uuid || !token) return;

    activateEmail(uuid, token)
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'));
  }, [uuid, token]);

  return (
    <FlexBox
      direction="Column"
      justifyContent="Center"
      alignItems="Center"
      gap={8}
      style={{ minHeight: '100vh', padding: '1rem' }}
    >
      {status === 'pending' && <BusyIndicator active delay={0} />}
      {status === 'success' && (
        <Text>Email successfully verified! You can login now!</Text>
      )}
      {status === 'error' && <Text>Invalid or expired token.</Text>}
      {status !== 'pending' && (
        <Button onClick={() => navigate(paths.login.getHref())}>
          Go to Login
        </Button>
      )}
    </FlexBox>
  );
}
