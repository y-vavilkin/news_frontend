import { describe, it, expect } from 'vitest';

import { CARD, USER } from '../../constants';

import getImageUrlWithBase from '../../helpers/getImageUrlWithBase';

describe('getImageUrlWithBase', () => {
  it('should return the image URL for CARD', () => {
    const result = getImageUrlWithBase('image.jpg', CARD);
    expect(result).toBe('http://localhost:3000/image.jpg');
  });

  it('should return placeholder for CARD if imageUrl is null', () => {
    const result = getImageUrlWithBase(null, CARD);
    expect(result).toBe('/placeholderImage.webp');
  });

  it('should return the image URL for USER', () => {
    const result = getImageUrlWithBase('avatar.jpg', USER);
    expect(result).toBe('http://localhost:3000/avatar.jpg');
  });

  it('should return placeholder for USER if imageUrl is null', () => {
    const result = getImageUrlWithBase(null, USER);
    expect(result).toBe('/placeholderAvatar.webp');
  });

  it('should return notFound for unknown type', () => {
    const result = getImageUrlWithBase('image.jpg', 'UNKNOWN');
    expect(result).toBe('/notFound.webp');
  });
});
