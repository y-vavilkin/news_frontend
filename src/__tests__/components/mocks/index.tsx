import configureStore from 'redux-mock-store';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { TypeModal } from '../../../interfaces/modal';
import { CommentProps } from '../../../components/Comment/Comment.tsx';

export const renderWithProvider = (
  component: React.ReactNode,
  initialState: any = {},
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );

  return {
    ...render(component, { wrapper: Wrapper, ...options }),
    store
  };
};

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

const initialState: TMockState = {
  auth: { error: null },
  modal: { type: TypeModal.LOGIN }
};

export const errorState: TMockState = {
  auth: { error: 'Some error' },
  modal: { type: TypeModal.LOGIN }
};

export const renderAuthForm = (component: React.ReactNode, state = initialState) => {
  return renderWithProvider(component, state);
};

/*
*
* Comment.tsx
*
*/
export const initialCommentState = {
  comments: {
    isLoadingComment: false
  },
  auth: {
    authUser: {
      role: 'ADMIN'
    }
  }
};

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

export const renderComment = (component: React.ReactNode, state = initialCommentState) => {
  return renderWithProvider(component, state);
};
