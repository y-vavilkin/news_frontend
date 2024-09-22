import { screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';

import AuthForm from '../../components/AuthForm';

import { errorState, renderAuthForm } from './mocks';

describe('AUTH FORM', () => {
  test('Рендер компоненты AuthForm', () => {
    renderAuthForm(<AuthForm />);
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('Валидация и отправка формы', async () => {
    const { store } = renderAuthForm(<AuthForm />);

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

  test('Отображение ошибок валидации', async () => {
    renderAuthForm(<AuthForm />);

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

  test('Отображение ошибок авторизации', async () => {
    renderAuthForm(<AuthForm />, errorState);

    await waitFor(() => {
      expect(screen.getByText(/some error/i)).toBeInTheDocument();
    });
  });
});
