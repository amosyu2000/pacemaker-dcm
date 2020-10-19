import axios from 'axios'
import qs from 'qs'

export default async function(endpoint, json) {
  let response = null
  try {
    response = await axios.post(
      `${process.env.VUE_APP_API}/${endpoint}`,
      qs.stringify({
        licenseKey: process.env.VUE_APP_LICENSE_KEY,
        ...json
      })
    )
  } catch (e) {
    return {
      data: {
        success: false,
        reason: 'Failed to connect to the server.',
      },
    }
  }
  return response
}