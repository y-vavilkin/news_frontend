import { CARD, USER } from '../constants';

const getImageUrlWithBase = (imageUrl: string | null, type: string): string => {
  const baseUrl = import.meta.env.VITE_SERVER_URL;
  switch (type) {
    case CARD:
      return imageUrl !== null ? `${baseUrl}/${imageUrl}` : '/placeholderImage.webp';
    case USER:
      return imageUrl !== null ? `${baseUrl}/${imageUrl}` : '/placeholderAvatar.webp';
    default:
      return '/public/notFound.webp';
  }
};

export default getImageUrlWithBase;
