import { render, screen, fireEvent } from "@testing-library/react";
import configureStore, { MockStore } from "redux-mock-store";
import { beforeEach, describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Comment, { CommentProps } from "../../components/Comment/Comment";

describe("COMMENT", () => {
  const mockStore = configureStore([]);
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      comments: {
        isLoadingComment: false,
      },
      auth: {
        authUser: {
          role: "ADMIN",
        },
      },
    });
  });

  test("Рендер компоненты Comment", () => {
    const mockComment: CommentProps = {
      id: 1,
      text: "Test comment text",
      user: {
        id: 1,
        login: "rayangosling",
        email: "albert@example.com",
        avatarUrl: "http://example.com/avatar.png",
        createdAt: "19.07.2024",
        updatedAt: "19.07.2024",
        posts: [],
        role: "",
      },
      updatedAt: "2024-07-19T12:00:00Z",
      isVisibleActions: true,
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Comment {...mockComment} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(mockComment.text)).toBeDefined();
    expect(screen.getByText(mockComment.user.login)).toBeDefined();
    expect(screen.getByText(mockComment.user.email)).toBeDefined();
  });

  test("Удаления комментария", () => {
    const mockComment: CommentProps = {
      id: 1,
      text: "Test comment text",
      user: {
        id: 1,
        login: "rayangosling",
        email: "albert@example.com",
        avatarUrl: "http://example.com/avatar.png",
        createdAt: "",
        updatedAt: "",
        posts: [],
        role: "",
      },
      updatedAt: "2024-07-19T12:00:00Z",
      isVisibleActions: true,
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Comment {...mockComment} />
        </MemoryRouter>
      </Provider>
    );

    const deleteButton = screen.getByTestId("delete-comment");
    fireEvent.click(deleteButton);

    expect(store.getActions()).toContainEqual({
      type: "SET_COMMENT_ID",
      payload: mockComment.id,
    });
    expect(store.getActions()).toContainEqual({
      type: "DELETE_COOMENT_REQUESTED",
      payload: mockComment.id,
    });
  });
});
