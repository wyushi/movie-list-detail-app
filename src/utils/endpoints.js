const API_KEY = `3403673c3e3cf351c8741bda8180865e`,
      API_BASE_ULR = `https://api.themoviedb.org/3`

export const popularMovies = page => {
  return `${API_BASE_ULR}/discover/movie?api_key=${API_KEY}&page=${page}`
}