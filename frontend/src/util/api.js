import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  timeout: 5000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export async function post(url, body) {
  const result = await instance.post(url, body);
  console.log(result.data);
  return result.data;
}
