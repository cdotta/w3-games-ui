export const getSafeImageUrl = (image, size) => {
  if (image.formats && image.formats[size]) {
    return image.formats[size].url;
  }
  return image.url;
};
