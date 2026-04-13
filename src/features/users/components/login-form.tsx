import { paths } from '@/config/paths';
import { useLogin } from '@/features/users/api/login';
import { isObject } from '@/lib/utils';
import {
  Button,
  Input,
  InputDomRef,
  MessageStrip,
  Text,
} from '@ui5/webcomponents-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

export default function LoginForm() {
  const navigate = useNavigate();
  const emailRef = useRef<InputDomRef | null>(null);
  const passwordRef = useRef<InputDomRef | null>(null);

  const { mutate, isPending, error } = useLogin();

  let formErrors;
  let responseError;

  if (error?.response?.status === 400) {
    formErrors = error?.response?.data;
  } else if (error?.response?.status === 401) {
    responseError = 'Invalid username or password.';
  } else if (error?.message) {
    responseError = 'Something went wrong. Please try again later.';
  }

  const emailError =
    isObject(formErrors) && Array.isArray(formErrors.email)
      ? formErrors.email[0]
      : undefined;
  const passwordError =
    isObject(formErrors) && Array.isArray(formErrors.password)
      ? formErrors.password[0]
      : undefined;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!emailRef.current || !passwordRef.current) return;

    mutate(
      { email: emailRef.current.value, password: passwordRef.current.value },
      {
        onSuccess: () => navigate(paths.app.home.getHref()),
      },
    );
  };

  return (
    <>
      <Input
        ref={emailRef}
        placeholder="Email"
        style={{ width: '100%' }}
        valueState={emailError ? 'Negative' : 'None'}
        valueStateMessage={<Text>{emailError}</Text>}
      />

      <Input
        ref={passwordRef}
        type="Password"
        placeholder="Password"
        style={{ width: '100%' }}
        valueState={passwordError ? 'Negative' : 'None'}
        valueStateMessage={<Text>{passwordError}</Text>}
      />

      {responseError && (
        <MessageStrip design="Negative">{responseError}</MessageStrip>
      )}

      <Button design="Emphasized" disabled={isPending} onClick={handleSubmit}>
        Login
      </Button>

      <Button
        design="Default"
        disabled={isPending}
        onClick={() => navigate(paths.register.getHref())}
      >
        Register
      </Button>
    </>
  );
}
