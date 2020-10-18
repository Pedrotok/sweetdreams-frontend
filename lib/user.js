import axios from 'axios';
import LocalStorageService from "lib/services/localStorageService";
import Router from 'next/router'

const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function authenticate(email, password) {
  try {
    const response = await axios.post(`${url}/user/authenticate`, {
      email: email,
      password: password
    });

    const localStorageService = LocalStorageService.getService();
    localStorageService.setToken(response.data.content);
    Router.push('/');
  }
  catch (error) {
    console.log("Error ", error);
  }
}