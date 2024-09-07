import { screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { mockComment, storeComment, renderComment } from './const';

describe('COMMENT', () => {
  test('Рендер компоненты Comment', () => {
    renderComment();
    expect(screen.getByText(mockComment.text)).toBeDefined();
    expect(screen.getByText(mockComment.user.login)).toBeDefined();
    expect(screen.getByText(mockComment.user.email)).toBeDefined();
  });

  test('Удаления комментария', () => {
    renderComment();

    const deleteButton = screen.getByTestId('delete-comment');
    fireEvent.click(deleteButton);

    expect(storeComment.getActions()).toContainEqual({
      type: 'SET_COMMENT_ID',
      payload: mockComment.id
    });
    expect(storeComment.getActions()).toContainEqual({
      type: 'DELETE_COOMENT_REQUESTED',
      payload: mockComment.id
    });
  });
});
