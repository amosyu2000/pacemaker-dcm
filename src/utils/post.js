import axios from 'axios'
import qs from 'qs'

export default async function(endpoint, json) {
  const response = await axios.post(
    `${process.env.VUE_APP_API}${endpoint}`,
    qs.stringify(json)
  )
  return response
}