import { describe, expect, test } from 'vitest';

import getImageUrlWithBase from '../../helpers/getImageUrlWithBase';
import { CARD, USER } from '../../constants';

describe('getImageUrlWithBase', () => {
  test('should return the image URL for CARD', () => {
    expect(getImageUrlWithBase('image.jpg', CARD)).toBe('http://localhost:3000/image.jpg');
  });

  test('should return placeholder for CARD if imageUrl is null', () => {
    expect(getImageUrlWithBase(null, CARD)).toBe('/placeholderImage.webp');
  });

  test('should return the image URL for USER', () => {
    expect(getImageUrlWithBase('avatar.jpg', USER)).toBe('http://localhost:3000/avatar.jpg');
  });

  test('should return placeholder for USER if imageUrl is null', () => {
    expect(getImageUrlWithBase(null, USER)).toBe('/placeholderAvatar.webp');
  });

  test('should return notFound for unknown type', () => {
    expect(getImageUrlWithBase('image.jpg', 'UNKNOWN')).toBe('/notFound.webp');
  });
});
