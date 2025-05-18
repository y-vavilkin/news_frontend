import { screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import CustomModal from '../../components/Modal';
import { renderModal } from '../components/mocks';
import { TypeModal } from '../../interfaces/modal';

describe('CustomModal', () => {
  it('не рендерит модальное окно, если оно закрыто', () => {
    renderModal(<CustomModal />);

    const modal = screen.queryByTestId('mock-form');

    expect(modal).toEqual(null);
  });

  it('рендерит модальное окно LOGIN и форму, если оно открыто', async () => {
    renderModal(<CustomModal />, {
      modal: {
        isModalOpen: true,
        type: TypeModal.LOGIN
      },
      auth: {
        error: null
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
    });
  });

  it('рендерит модальное окно LOGIN и форму, с ошибкой', async () => {
    renderModal(<CustomModal />, {
      modal: {
        isModalOpen: true,
        type: TypeModal.LOGIN
      },
      auth: {
        error: 'ОШИБКА' as any
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/ОШИБКА/i)).toBeInTheDocument();
    });
  });

  it('рендерит модальное окно REGISTRATION и форму, если оно открыто', async () => {
    renderModal(<CustomModal />, {
      modal: {
        isModalOpen: true,
        type: TypeModal.REGISTRATION
      },
      auth: {
        error: null
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/REGISTRATION/i)).toBeInTheDocument();
    });
  });

  it('рендерит модальное окно REGISTRATION и форму, с ошибкой', async () => {
    renderModal(<CustomModal />, {
      modal: {
        isModalOpen: true,
        type: TypeModal.REGISTRATION
      },
      auth: {
        error: 'ОШИБКА' as any
      }
    });

    await waitFor(() => {
      expect(screen.getByText(/ОШИБКА/i)).toBeInTheDocument();
    });
  });
});
