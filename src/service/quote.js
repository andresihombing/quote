import request from '../utils/request';
const base_URL = 'https://api.kanye.rest/';

const urls = {
  quote: `${base_URL}`,
};

const callApi = (endpoint, method, headers = {}, params = {}, data = {}, base = base_URL) => {
  const options = {
    baseURL: base,
    url: endpoint,
    method,
    headers,
    data,
    params,
  };
  
  return request(options).then((response) => {
    const responseAPI = response?.data;
    return responseAPI;
  });
};

export const getQuoteApi = () => {
  return callApi(urls.quote, 'get', {}, {}, {}, base_URL)
};