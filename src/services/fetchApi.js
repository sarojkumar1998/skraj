import axios from "axios";
const baseUrl = "https://api.themoviedb.org/3/"
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2E5OTc5NTI4ZWU3NzU3MzhhMmJkNjVkOTJiYWI2ZiIsInN1YiI6IjY0M2E5N2I1YjZjMjY0MDQ0MjM5ZDY0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.30MdZM3rj2VGHUJKbRU7FeC2RXDFFLWLtbd0ccMxuyM";


let headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json;charset=utf-8'
}
const fetchApi = (data) => {
  return axios.get(
    `${baseUrl}${data.path}`, 
    { 
      headers,
      params : data?.params
    }
  )
}
export const postFetchApi = (data) => {
  return axios.post( 
    `${baseUrl}${data.path}`,
    data?.params,
    {
      headers,
    }
  )
}
export default fetchApi