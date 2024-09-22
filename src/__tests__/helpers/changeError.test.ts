import { describe, expect, test } from 'vitest';

import { changeError } from '../../helpers';
import {
  POST_NOT_HAS_BEEN_DELETED,
  GLOBAL_ERROR,
  USER_EXIST,
  INCORRECT_DATA,
  USER_NOT_EXIST,
  ERROR_400,
  ERROR_401,
  ERROR_404,
  BAD_URL
} from '../../constants/errors';

describe('CHANGE ERROR', () => {
  test('Ошибка GLOBAL_ERROR', () => {
    expect(changeError(GLOBAL_ERROR)).toBe('Sorry, something went wrong.');
  });

  test('Ошибка BAD_URL', () => {
    expect(changeError(BAD_URL)).toBe('Sorry, url is bad');
  });

  test('Ошибка USER_EXIST', () => {
    expect(changeError(USER_EXIST)).toBe('Sorry, user exist');
  });

  test('Ошибка USER_NOT_EXIST', () => {
    expect(changeError(USER_NOT_EXIST)).toBe('Sorry, user not exist');
  });

  test('Ошибка INCORRECT_DATA', () => {
    expect(changeError(INCORRECT_DATA)).toBe('Sorry, incorrect data');
  });

  test('Ошибка POST_NOT_HAS_BEEN_DELETED', () => {
    expect(changeError(POST_NOT_HAS_BEEN_DELETED)).toBe(
      'Sorry, post not has been deleted'
    );
  });

  test('Ошибка ERROR_401', () => {
    expect(changeError(ERROR_401)).toBe('Sorry, you are unauthorized');
  });

  test('Ошибка ERROR_404', () => {
    expect(changeError(ERROR_404)).toBe('Sorry, page not found.');
  });

  test('Ошибка ERROR_400', () => {
    expect(changeError(ERROR_400)).toBe('Sorry, bad request');
  });
});
