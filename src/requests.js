const API_KEY = "728697287a213c8a88483fa1d7ceea82";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languague=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languague=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  
}

export default requests;