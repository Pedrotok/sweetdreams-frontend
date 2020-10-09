import LocalStorageService from "lib/services/localStorageService";

const url = process.env.NEXT_PUBLIC_SWEET_DREAMS_API;

export async function authenticate(email, password) {
  let response = await fetch(`${url}/user/authenticate`,
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    }
  );

  if (response.ok) {
    let json = await response.json();
    const localStorageService = LocalStorageService.getService();
    localStorageService._setToken(json.content);
    return json.content;
  } else {
    return "Error";
  }
}