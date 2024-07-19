import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

import { TypeModal } from '../../interfaces/modal';
import AuthForm from '../../components/AuthForm';

const mockStore = configureStore([]);
const initialState = {
  auth: { error: null },
  modal: { type: TypeModal.LOGIN }
};

const renderWithProvider = (component: React.ReactNode, state = initialState) => {
  const store = mockStore(state);
  return {
    ...render(
      <Provider store={store}>
        {component}
      </Provider>
    ),
    store,
  };
};

describe('AuthForm', () => {
  test('renders AuthForm component', () => {
    renderWithProvider(<AuthForm />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('validates and submits form', async () => {
    const { store } = renderWithProvider(<AuthForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' }
    });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toHaveLength(1);
      expect(actions[0].type).toBe('AUTH_USER_REQUESTED');
      expect(actions[0].payload).toEqual({
        email: 'test@example.com',
        password: 'password123'
      });
    });
  });

  test('displays validation errors', async () => {
    renderWithProvider(<AuthForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: '' }
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: '' }
    });
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Minimum 5 characters/i)).toBeInTheDocument();
    });
  });

  test('displays auth error from redux state', async () => {
    renderWithProvider(<AuthForm />, {
      auth: { error: 'Some error' },
      modal: { type: TypeModal.LOGIN }
    });

    await waitFor(() => {
      expect(screen.getByText(/some error/i)).toBeInTheDocument();
    });
  });
});
