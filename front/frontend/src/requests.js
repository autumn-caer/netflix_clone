const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`
}

export default requests;