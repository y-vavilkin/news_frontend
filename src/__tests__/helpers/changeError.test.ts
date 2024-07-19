import { describe, expect, test } from 'vitest';

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

import {changeError} from '../../helpers';

describe('changeError', () => {
  test('returns message for GLOBAL_ERROR', () => {
    expect(changeError(GLOBAL_ERROR)).toBe('Sorry, something went wrong.');
  });

  test('returns message for BAD_URL', () => {
    expect(changeError(BAD_URL)).toBe('Sorry, url is bad');
  });

  test('returns message for USER_EXIST', () => {
    expect(changeError(USER_EXIST)).toBe('Sorry, user exist');
  });

  test('returns message for USER_NOT_EXIST', () => {
    expect(changeError(USER_NOT_EXIST)).toBe('Sorry, user not exist');
  });

  test('returns message for INCORRECT_DATA', () => {
    expect(changeError(INCORRECT_DATA)).toBe('Sorry, incorrect data');
  });

  test('returns message for POST_NOT_HAS_BEEN_DELETED', () => {
    expect(changeError(POST_NOT_HAS_BEEN_DELETED)).toBe('Sorry, post not has been deleted');
  });

  test('returns message for ERROR_401', () => {
    expect(changeError(ERROR_401)).toBe('Sorry, you are unauthorized');
  });

  test('returns message for ERROR_404', () => {
    expect(changeError(ERROR_404)).toBe('Sorry, page not found.');
  });

  test('returns message for ERROR_400', () => {
    expect(changeError(ERROR_400)).toBe('Sorry, bad request');
  });
});
