/// <reference types="cypress" />
import LoginForm from './login-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router';

const mount = (ui: React.ReactNode) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });

  cy.mount(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{ui}</MemoryRouter>
    </QueryClientProvider>,
  );
};

describe('LoginForm', () => {
  it('disables the login button while request is pending', () => {
    cy.intercept('POST', '**/api/token**', (req) => {
      req.on('response', (res) => {
        res.setDelay(500);
      });
      req.reply({ statusCode: 401, body: { detail: 'Invalid credentials' } });
    }).as('loginRequest');

    mount(<LoginForm />);

    cy.get('ui5-input[placeholder="Email"]')
      .shadow()
      .find('input')
      .type('wrong@example.com');
    cy.get('ui5-input[placeholder="Password"]')
      .shadow()
      .find('input')
      .type('wrongpassword');
    cy.contains('ui5-button', 'Login').shadow().find('button').click();

    cy.contains('ui5-button', 'Login')
      .shadow()
      .find('button')
      .should('be.disabled');

    cy.wait('@loginRequest');

    cy.contains('Invalid username or password.').should('be.visible');
    cy.contains('ui5-button', 'Login')
      .shadow()
      .find('button')
      .should('not.be.disabled');
  });
});
