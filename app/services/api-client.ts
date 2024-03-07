import axios from "axios";

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  params: {
    key: process.env.NEXT_API_KEY
  }
})