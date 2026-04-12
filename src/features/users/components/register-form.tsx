import { paths } from '@/config/paths';
import { useRegister } from '@/features/users/api/register';
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

export default function RegisterForm() {
  const navigate = useNavigate();
  const usernameRef = useRef<InputDomRef | null>(null);
  const emailRef = useRef<InputDomRef | null>(null);
  const firstNameRef = useRef<InputDomRef | null>(null);
  const lastNameRef = useRef<InputDomRef | null>(null);
  const passwordRef = useRef<InputDomRef | null>(null);

  const { mutate, isPending, error } = useRegister();

  let formErrors;
  let responseError;

  if (error?.response?.status === 400) {
    formErrors = error?.response?.data;
  } else if (error?.message) {
    responseError = 'Something went wrong. Please try again later.';
  }

  const usernameError =
    isObject(formErrors) && Array.isArray(formErrors.username)
      ? formErrors.username[0]
      : undefined;
  const emailError =
    isObject(formErrors) && Array.isArray(formErrors.email)
      ? formErrors.email[0]
      : undefined;
  const passwordError =
    isObject(formErrors) && Array.isArray(formErrors.password)
      ? formErrors.password[0]
      : undefined;
  const firstNameError =
    isObject(formErrors) && Array.isArray(formErrors.first_name)
      ? formErrors.first_name[0]
      : undefined;
  const lastNameError =
    isObject(formErrors) && Array.isArray(formErrors.last_name)
      ? formErrors.last_name[0]
      : undefined;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      !usernameRef.current ||
      !emailRef.current ||
      !passwordRef.current ||
      !firstNameRef.current ||
      !lastNameRef.current
    )
      return;

    mutate(
      {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        first_name: firstNameRef.current.value,
        last_name: lastNameRef.current.value,
      },
      {
        onSuccess: () => navigate(paths.app.home.getHref()),
      },
    );
  };

  return (
    <>
      <Input
        ref={usernameRef}
        placeholder="Username"
        style={{ width: '100%' }}
        valueState={usernameError ? 'Negative' : 'None'}
        valueStateMessage={<Text>{usernameError}</Text>}
      />

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

      <Input
        ref={firstNameRef}
        placeholder="First Name (optional)"
        style={{ width: '100%' }}
        valueState={firstNameError ? 'Negative' : 'None'}
        valueStateMessage={<Text>{firstNameError}</Text>}
      />

      <Input
        ref={lastNameRef}
        placeholder="Last Name (optional)"
        style={{ width: '100%' }}
        valueState={lastNameError ? 'Negative' : 'None'}
        valueStateMessage={<Text>{lastNameError}</Text>}
      />

      {responseError && (
        <MessageStrip design="Negative">{responseError}</MessageStrip>
      )}

      <Button design="Emphasized" disabled={isPending} onClick={handleSubmit}>
        Register
      </Button>

      <Button
        design="Default"
        disabled={isPending}
        onClick={() => navigate(paths.login.getHref())}
      >
        Login
      </Button>
    </>
  );
}
