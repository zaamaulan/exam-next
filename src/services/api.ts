import axios from 'axios'

export const api = axios.create({
  baseURL: '/api',
  // headers: {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  // },
})
