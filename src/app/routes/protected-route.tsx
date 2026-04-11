import { useAuthStore } from '@/stores/auth-store';
import { BusyIndicator, FlexBox } from '@ui5/webcomponents-react';
import { Navigate } from 'react-router';

export const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <FlexBox
        style={{ height: '100%' }}
        alignItems="Center"
        justifyContent="Center"
      >
        <BusyIndicator active delay={0} />
      </FlexBox>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
