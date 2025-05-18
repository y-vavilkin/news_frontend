import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Header from '../../components/Header';
import { renderHeader } from '../components/mocks';

describe('CustomModal', () => {
  it('Рендер кнопок авторизации если isOnline = false', () => {
    renderHeader(<Header />);

    expect(screen.getByText(/SIGN UP/i)).toBeInTheDocument();
    expect(screen.getByText(/SIGN IN/i)).toBeInTheDocument();
  });

  it('Рендер иконки пользователя если isOnline = true', () => {
    renderHeader(<Header />, {
      auth: {
        isOnline: true
      },
      posts: {
        textForSearch: ''
      }
    });

    expect(screen.getByAltText(/Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
