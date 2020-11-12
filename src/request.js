const API_KEY = "afe0f6f02952aece23b195ed042d3772"

const request = {

    fetchTreanding:`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`


}

export default request;