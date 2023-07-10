export const getImageUrl = posterPath => {
  return posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
};
