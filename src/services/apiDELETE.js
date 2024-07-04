// src\services\api\apiDELETE.js - logicinfo.com.br
import { api } from './api.js'


const apiDELETE = async ({ table, id }) => {

    if (table && id) {

        try {

            const uri = `${table}/${id}`

            await api.delete(uri)
            return true

        } catch (error) {

            console.log(`error when trying to read the apiDELETE - table: ${table}`, error)
        }
    }

    return false
}

export { apiDELETE }