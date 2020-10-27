import axios from 'axios';
import LocalStorageService from 'lib/services/localStorageService';
import Router from 'next/router';

const localStorageService = LocalStorageService.getService();
const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;


export function init() {
  axios.interceptors.request.use(
    config => {
      const token = localStorageService.getAccessToken();
      if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      config.headers['Content-Type'] = 'application/json';
      return config;
    },
    error => {
      Promise.reject(error)
    });

  axios.interceptors.response.use((response) => {
    return response
  }, function (error) {
    const originalRequest = error.config;

    const res = originalRequest.match(/\/token\/refresh/g);
    if (error.response.status === 401 && res != null) {
      localStorageService.clearToken();
      Router.push('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      return axios.post(`${url}/token/refresh`,
        {
          "refresh_token": refreshToken
        })
        .then(res => {
          if (res.status === 201) {
            localStorageService.setToken(res.data);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
            return axios(originalRequest);
          }
        })
    }
    return Promise.reject(error);
  });
}