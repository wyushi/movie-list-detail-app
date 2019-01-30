const API_KEY = `3403673c3e3cf351c8741bda8180865e`,
      API_BASE_URL = `https://api.themoviedb.org/3`,
      IMAGE_BASE_URL = `https://image.tmdb.org/t/p`
  

export const popularMovies = page => {
  return `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
}

export const ImageType = {
  THUMBNAIL: 'w342',
  POSTER: 'w780'
}

export const imageURL = (path, type) => {
  if (!path) return
  return `${IMAGE_BASE_URL}/${type}${path}`
}