import { screen, fireEvent } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Comment from '../../components/Comment';

import { mockComment, initialCommentState, renderComment } from './mocks';

describe('COMMENT', () => {
  test('Рендер компоненты Comment', () => {
    renderComment(<Comment {...mockComment} />, initialCommentState);
    expect(screen.getByText(mockComment.text)).toBeDefined();
    expect(screen.getByText(mockComment.user.login)).toBeDefined();
    expect(screen.getByText(mockComment.user.email)).toBeDefined();
  });

  test('Удаления комментария', () => {
    const { store } = renderComment(<Comment {...mockComment} />, initialCommentState);

    const deleteButton = screen.getByTestId('delete-comment');
    fireEvent.click(deleteButton);

    expect(store.getActions()).toContainEqual({
      type: 'SET_COMMENT_ID',
      payload: mockComment.id
    });
    expect(store.getActions()).toContainEqual({
      type: 'DELETE_COOMENT_REQUESTED',
      payload: mockComment.id
    });
  });
});
