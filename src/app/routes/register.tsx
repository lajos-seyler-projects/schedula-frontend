import RegisterForm from '@/features/users/components/register-form';
import { FlexBox, Title } from '@ui5/webcomponents-react';

export default function RegisterRoute() {
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
          Register
        </Title>

        <RegisterForm />
      </FlexBox>
    </FlexBox>
  );
}
