const getImageUrlWithBase = (imageUrl: string | null): string => {
  if (imageUrl !== null) {
    return `${import.meta.env.VITE_SERVER_URL}${imageUrl}`;
  } else {
    return '/public/placeholderImage.webp';
  }
};

export default getImageUrlWithBase;
