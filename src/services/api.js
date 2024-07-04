// src\services\api.js
import axios from 'axios'

import setup from '../configurations/setup.json'


const apiBaseUrl = setup.configuration.apiBaseUrlmobile

const api = axios.create({ baseURL: apiBaseUrl})

export { api }