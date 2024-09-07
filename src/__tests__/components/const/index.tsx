import configureStore, { MockStore } from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';

import { beforeEach } from 'vitest';

import { MemoryRouter } from 'react-router-dom';

import { TypeModal } from '../../../interfaces/modal';
import Comment, { CommentProps } from '../../../components/Comment/Comment.tsx';

/*
*
* AuthForm.tsx
*
*/
interface TMockState {
  auth: {
    error: string | null
  }
  modal: {
    type: TypeModal
  }
}

const mockAuthFormStore = configureStore([]);
const initialState: TMockState = {
  auth: { error: null },
  modal: { type: TypeModal.LOGIN }
};

export const errorState: TMockState = {
  auth: { error: 'Some error' },
  modal: { type: TypeModal.LOGIN }
};

export const renderWithProvider = (
  component: React.ReactNode,
  state = initialState
) => {
  const store = mockAuthFormStore(state);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
};

/*
*
* Comment.tsx
*
*/
const mockStoreComment = configureStore([]);

export let storeComment: MockStore;

beforeEach(() => {
  storeComment = mockStoreComment({
    comments: {
      isLoadingComment: false
    },
    auth: {
      authUser: {
        role: 'ADMIN'
      }
    }
  });
});

export const mockComment: CommentProps = {
  id: 1,
  text: 'Test comment text',
  user: {
    id: 1,
    login: 'rayangosling',
    email: 'albert@example.com',
    avatarUrl: 'http://example.com/avatar.png',
    createdAt: '19.07.2024',
    updatedAt: '19.07.2024',
    posts: [],
    role: ''
  },
  updatedAt: '2024-07-19T12:00:00Z',
  isVisibleActions: true
};

export const renderComment = () => {
  return render(
    <Provider store={storeComment}>
      <MemoryRouter>
        <Comment {...mockComment} />
      </MemoryRouter>
    </Provider>
  );
};
