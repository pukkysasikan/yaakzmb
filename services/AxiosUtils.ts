import axios from 'axios';
import toast from 'react-hot-toast';



const api = axios.create({
  baseURL:"https://api-pos-uat.bestcommercesolutions.com",
  headers: { 
    'Authorization': 'Bearer yr^voVolfSx8Xn*^',    
  },
})

api.interceptors.response.use(
    async (response) => {
      if (response) {
        if (
          response.data.status === 'error' ||
          response.data.status === 'errors'
        ) {
          toast.error(response.data.message)
        }
      }
      return response
    },
    function (error) {
      try {
        toast(error.response.data.message, { icon: '⚠️' })
      } catch (e) {
        if (error && error.response && error.response.status === 500) {
          toast.error('[500] Internal Server Error')
        } else if (error && error.response && error.response.status === 408) {
          toast.error('[408] Request Timeout')
        } else if (error && error.response && error.response.status === 501) {
          toast.error('[501] Not Implemented')
        } else if (error && error.response && error.response.status === 502) {
          toast.error('[502] Bad Gateway')
        } else if (error && error.response && error.response.status === 404) {
          toast.error('[404] Not Found')
        } else {
          toast(`${error}`, {icon: '📡'})
        }
      }
      
    }
  )

  
export {
  api
};
