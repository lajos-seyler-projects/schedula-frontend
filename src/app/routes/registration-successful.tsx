import { paths } from '@/config/paths';
import { Button, FlexBox, Text, Title } from '@ui5/webcomponents-react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const StyledText = styled(Text)`
  padding: 1rem;
`;

export default function RegistrationSuccessful() {
  const navigate = useNavigate();

  return (
    <FlexBox
      direction="Column"
      justifyContent="Center"
      alignItems="Center"
      style={{ minHeight: '100vh', padding: '1rem' }}
    >
      <Title level="H2" size="H2">
        Registration Successful
      </Title>

      <StyledText>
        We've sent a verification link to your email. Please click the link to
        verify your account before logging in.
      </StyledText>

      <Button onClick={() => navigate(paths.login.getHref())}>Login</Button>
    </FlexBox>
  );
}
