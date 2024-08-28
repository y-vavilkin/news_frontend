import { describe, expect, test } from "vitest";

import getImageUrlWithBase from "../../helpers/getImageUrlWithBase";
import { CARD, USER } from "../../constants";

describe("GET IMAGE URL", () => {
  const url = import.meta.env.VITE_SERVER_URL;

  test("Возврат URL для компоненты CARD", () => {
    expect(getImageUrlWithBase("image.jpg", CARD)).toBe(`${url}/image.jpg`);
  });

  test("Возврат placeholder для компоненты CARD если imageUrl null", () => {
    expect(getImageUrlWithBase(null, CARD)).toBe("/placeholderImage.webp");
  });

  test("Возврат URL для компоненты USER", () => {
    expect(getImageUrlWithBase("avatar.jpg", USER)).toBe(`${url}/avatar.jpg`);
  });

  test("Возврат placeholder для компоненты USER если imageUrl null", () => {
    expect(getImageUrlWithBase(null, USER)).toBe("/placeholderAvatar.webp");
  });
});
