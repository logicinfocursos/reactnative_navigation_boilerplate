// src\services\apiGET.js - logicinfo.com.br
import { api } from './api.js'


const apiGET = async ({ table = '', searchID = '', searchField = 'id' }) => {
  
  if (table !== '') {
    try {
      let uri = table
      if (searchField && searchID) uri += `/${searchID}/${searchField}`
      if (!searchField && searchID) uri += `/${searchID}`

      const response = await api.get(`${uri}`)

      return response.data
    } catch (error) {
      console.error('Erro:', error.message)
    }
  }

  return null
}

export { apiGET }
