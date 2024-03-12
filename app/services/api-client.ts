import axios from "axios";

export default axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    key: process.env.NEXT_API_KEY
  }
})