import Api from '../API'

const env = {
  local: 'local',
  dev: 'dev',
  stage: 'stage',
  production: 'production',
}

const API_URL = {
  local: '',
  dev: '',
  stage: 'https://jsonplaceholder.typicode.com',
  production: 'https://jsonplaceholder.typicode.com',
}

const currentEnv = env.stage //change config here
export const BASE_URL = API_URL[currentEnv]
export const API = Api
