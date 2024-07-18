import { describe, it, expect } from 'vitest';

import { CARD, USER } from '../constants';

import getImageUrlWithBase from './getImageUrlWithBase';

describe('getImageUrlWithBase', () => {
  it('должна вернуть URL изображения для CARD', () => {
    const result = getImageUrlWithBase('image.jpg', CARD);
    expect(result).toBe('http://localhost:3000/image.jpg');
  });

  it('должна вернуть placeholder для CARD, если imageUrl null', () => {
    const result = getImageUrlWithBase(null, CARD);
    expect(result).toBe('/placeholderImage.webp');
  });

  it('должна вернуть URL изображения для USER', () => {
    const result = getImageUrlWithBase('avatar.jpg', USER);
    expect(result).toBe('http://localhost:3000/avatar.jpg');
  });

  it('должна вернуть placeholder для USER, если imageUrl null', () => {
    const result = getImageUrlWithBase(null, USER);
    expect(result).toBe('/placeholderAvatar.webp');
  });

  it('должна вернуть notFound для неизвестного типа', () => {
    const result = getImageUrlWithBase('image.jpg', 'UNKNOWN');
    expect(result).toBe('/notFound.webp');
  });
});
