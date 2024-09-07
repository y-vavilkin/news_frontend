import { runSaga } from 'redux-saga';
import { vi, describe, afterEach, test, expect } from 'vitest';

import getError from '../../../helpers/getError.ts';
import { changeError } from '../../../helpers';
import { editProfileFailed, editProfileReceived, editProfileReset } from '../../actions/user.ts';
import { closeModal } from '../../actions/modal.ts';
import editProfile from '../../api/editProfile.ts';

import { editProfileWorker } from '../editProfileSaga.ts';

import { mockAction, mockError, mockErrorMessage, mockResponse } from './const';

vi.mock('../../api/editProfile');
vi.mock('../../../helpers/getError');
vi.mock('../../../helpers');

describe('EDIT PROFILE WORKER SAGA', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('Успешное редактирование профиля', async () => {
    const dispatched: unknown[] = [];

    (editProfile as ReturnType<typeof vi.fn>).mockResolvedValue(mockResponse);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({})
      },
      editProfileWorker as any,
      mockAction
    ).toPromise();

    expect(dispatched).toEqual([
      editProfileReceived(mockResponse.data),
      editProfileReset(),
      closeModal()
    ]);
  });

  test('Редактирование профиля с ошибкой', async () => {
    const dispatched: unknown[] = [];

    (editProfile as ReturnType<typeof vi.fn>).mockRejectedValue(mockError);
    (getError as ReturnType<typeof vi.fn>).mockReturnValue(mockErrorMessage);

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({})
      },
      editProfileWorker as any,
      mockAction
    ).toPromise();

    expect(dispatched).toEqual([
      editProfileFailed(changeError(mockErrorMessage))
    ]);
  });
});
